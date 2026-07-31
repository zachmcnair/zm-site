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
      pitch: getVar('--play-htpitch', 6),
      registration: getVar('--play-registration', 1.5),
    })

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
      // Animated GIFs would freeze as a single halftoned frame — keep them on the
      // live CSS duotone instead (which animates with the GIF).
      if (/\.gif(\?|$)/i.test(img.currentSrc || img.src || '')) return
      if (!img.complete || !img.naturalWidth) {
        img.addEventListener('load', () => active() && renderOne(wrap), { once: true })
        return
      }
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
        /* tainted/undecodable image — leave the duotone treatment */
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
      canvases.forEach((_, wrap) => enqueue(wrap))
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
