'use client'

import { useEffect, useRef, useState } from 'react'
import { useExperience } from './experience-provider'

/**
 * Play-mode cursor: a soft ink dot that trails the pointer with a little lag and
 * grows the faster you move it. Disabled on touch / reduced-motion (native cursor
 * stays). Toggles html[data-cursor="custom"] so global.css can hide the native cursor.
 */
export function PlayCursor() {
  const { mode } = useExperience()
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const ok =
      mode === 'play' &&
      typeof window !== 'undefined' &&
      !window.matchMedia('(hover: none)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setActive(ok)
    if (!ok) return

    document.documentElement.setAttribute('data-cursor', 'custom')

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let cx = mx
    let cy = my
    let lmx = mx
    let lmy = my
    let s = 1
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }
    const loop = () => {
      const v = Math.hypot(mx - lmx, my - lmy) // px since last frame
      lmx = mx
      lmy = my
      cx += (mx - cx) * 0.35 // slight trailing lag
      cy += (my - cy) * 0.35
      const target = 1 + Math.min(2.2, v * 0.06) // faster → bigger (up to ~3.2×)
      s += (target - s) * 0.15
      if (ref.current) {
        ref.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%) scale(${s})`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      document.documentElement.removeAttribute('data-cursor')
    }
  }, [mode])

  if (!active) return null
  return <div ref={ref} className="play-cursor" aria-hidden="true" />
}
