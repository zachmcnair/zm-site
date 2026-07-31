'use client'

import { useEffect } from 'react'
import { useExperience } from './experience-provider'
import { renderHalftone } from '../lib/halftone'

/**
 * Drives the CMYK-halftone canvas pass in Play mode. For each .riso-media it adds
 * a <canvas> overlay and screens the image into a registered halftone print.
 * Lazy (only visible images) and only while Play + halftone are on; re-renders on
 * resize and when the customizer dispatches "riso:change".
 */
const MAX_RENDER_W = 760 // cap working width so huge images don't explode dot counts

export function HalftoneEngine() {
  const { mode } = useExperience()

  useEffect(() => {
    const root = document.documentElement
    const getVar = (n: string, d: number) => {
      const f = parseFloat(getComputedStyle(root).getPropertyValue(n))
      return isNaN(f) ? d : f
    }
    const halftoneOn = () => getVar('--play-halftone', 1) >= 0.5
    const active = () => mode === 'play' && halftoneOn()

    const canvases = new Map<HTMLElement, HTMLCanvasElement>()
    let io: IntersectionObserver | null = null
    let ro: ResizeObserver | null = null
    let debounce = 0

    const params = () => ({
      pitch: getVar('--play-htpitch', 3),
      registration: getVar('--play-registration', 4.9),
      grain: getVar('--play-photo-grain', 0.45),
      overspray: getVar('--play-overspray', 0),
    })

    // Cache: true = animated (skip halftone → keep the live duotone), false = static.
    // Detect by reading the file header: GIFs animate; WebP with an ANMF chunk animate.
    const animCache = new WeakMap<HTMLImageElement, boolean>()
    const checkAnim = (img: HTMLImageElement, cb: (animated: boolean) => void) => {
      const src = img.currentSrc || img.src || ''
      if (/\.gif(\?|$)/i.test(src)) return cb(true)
      if (!/\.webp(\?|$)/i.test(src)) return cb(false)
      fetch(src)
        .then((r) => r.arrayBuffer())
        .then((buf) => {
          const bytes = new Uint8Array(buf.slice(0, 4096))
          let s = ''
          for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i])
          cb(s.indexOf('ANMF') !== -1)
        })
        .catch(() => cb(false))
    }

    // Render at most one image per frame so activation/scroll never blocks.
    const queue: HTMLElement[] = []
    let pumping = false
    const enqueue = (w: HTMLElement) => {
      if (!queue.includes(w)) queue.push(w)
      if (pumping) return
      pumping = true
      const step = () => {
        const next = queue.shift()
        if (next && active()) renderOne(next)
        if (queue.length) requestAnimationFrame(step)
        else pumping = false
      }
      requestAnimationFrame(step)
    }

    const renderOne = (wrap: HTMLElement) => {
      const img = wrap.querySelector('img') as HTMLImageElement | null
      if (!img) return
      if (!img.complete || !img.naturalWidth) {
        img.addEventListener('load', () => active() && renderOne(wrap), { once: true })
        return
      }
      // Known-animated images: keep them on the live duotone (skip the halftone).
      const known = animCache.get(img)
      if (known === true) return

      const rect = wrap.getBoundingClientRect()
      if (rect.width < 2 || rect.height < 2) return
      let cv = canvases.get(wrap)
      if (!cv) {
        cv = document.createElement('canvas')
        cv.className = 'riso-halftone'
        cv.setAttribute('aria-hidden', 'true')
        img.insertAdjacentElement('afterend', cv)
        canvases.set(wrap, cv)
      }
      const w = Math.min(rect.width, MAX_RENDER_W)
      const h = rect.height * (w / rect.width)
      try {
        renderHalftone(img, cv, w, h, params())
        wrap.setAttribute('data-halftone', 'on')
      } catch {
        return /* tainted/undecodable image — leave the duotone treatment */
      }

      // First encounter: verify it isn't animated; if it is, revert to the duotone.
      if (known === undefined) {
        checkAnim(img, (animated) => {
          animCache.set(img, animated)
          if (animated) {
            const c = canvases.get(wrap)
            if (c) {
              c.remove()
              canvases.delete(wrap)
            }
            wrap.removeAttribute('data-halftone')
          }
        })
      }
    }

    const teardown = () => {
      canvases.forEach((cv, wrap) => {
        cv.remove()
        wrap.removeAttribute('data-halftone')
      })
      canvases.clear()
      io?.disconnect()
      ro?.disconnect()
      io = ro = null
    }

    const start = () => {
      teardown()
      if (!active()) return
      const wraps = Array.from(document.querySelectorAll<HTMLElement>('.riso-media'))
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && enqueue(e.target as HTMLElement)),
        { rootMargin: '250px' }
      )
      ro = new ResizeObserver((entries) => {
        window.clearTimeout(debounce)
        debounce = window.setTimeout(() => {
          if (active()) entries.forEach((e) => enqueue(e.target as HTMLElement))
        }, 150)
      })
      wraps.forEach((w) => {
        io!.observe(w)
        ro!.observe(w)
      })
      // On-screen now: render the first synchronously (instant feedback), queue the rest.
      let first = true
      wraps.forEach((w) => {
        const r = w.getBoundingClientRect()
        if (r.bottom > -250 && r.top < window.innerHeight + 250) {
          if (first) {
            renderOne(w)
            first = false
          } else {
            enqueue(w)
          }
        }
      })
    }

    const rerenderAll = () => {
      if (!active()) {
        teardown()
        return
      }
      if (canvases.size === 0) {
        start()
        return
      }
      // Synchronous re-render (not the rAF queue) so customizer tweaks apply
      // instantly and reliably even when the tab isn't focused (rAF is paused).
      canvases.forEach((_, wrap) => renderOne(wrap))
    }

    start()
    const onChange = () => {
      window.clearTimeout(debounce)
      debounce = window.setTimeout(rerenderAll, 120)
    }
    window.addEventListener('riso:change', onChange)

    return () => {
      teardown()
      window.removeEventListener('riso:change', onChange)
      window.clearTimeout(debounce)
    }
  }, [mode])

  return null
}
