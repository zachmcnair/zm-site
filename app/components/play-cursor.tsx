'use client'

import { useEffect, useRef, useState } from 'react'
import { useExperience } from './experience-provider'

/**
 * Play-mode cursor: a soft ink dot that trails the pointer and grows with speed,
 * plus a full-screen canvas where movement draws a quick ink stroke that erases
 * itself within a moment (you can dash a letter, not a picture). Disabled on
 * touch / reduced-motion. Toggles html[data-cursor="custom"] to hide the native cursor.
 */
export function PlayCursor() {
  const { mode } = useExperience()
  const dotRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
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
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    let W = 0
    let H = 0

    const resize = () => {
      const c = canvasRef.current
      if (!c) return
      W = window.innerWidth
      H = window.innerHeight
      c.width = Math.round(W * dpr)
      c.height = Math.round(H * dpr)
      c.style.width = `${W}px`
      c.style.height = `${H}px`
      const cx = c.getContext('2d')
      if (cx) cx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const ink =
      getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#5959e3'

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let px = mx
    let py = my
    let cx = mx
    let cy = my
    let s = 1
    let raf = 0

    // Timestamped points; each frame we CLEAR the canvas and redraw only the
    // recent ones (so nothing ever lingers — fixes permanent marks in dark mode).
    const pts: { x: number; y: number; t: number }[] = []
    const LIFE = 420 // ms — swift: a quick stroke, not a drawing

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      pts.push({ x: mx, y: my, t: performance.now() })
      if (pts.length > 140) pts.shift()
    }

    const loop = () => {
      if (canvasRef.current && W === 0) resize()

      // dot follows with lag and scales with speed
      const v = Math.hypot(mx - px, my - py)
      px = mx
      py = my
      cx += (mx - cx) * 0.35
      cy += (my - cy) * 0.35
      const target = 1 + Math.min(2.2, v * 0.06)
      s += (target - s) * 0.15
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%) scale(${s})`
      }

      const ctx = canvasRef.current?.getContext('2d')
      if (ctx && W) {
        const now = performance.now()
        while (pts.length && now - pts[0].t > LIFE) pts.shift()
        ctx.clearRect(0, 0, W, H)
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.strokeStyle = ink
        for (let i = 1; i < pts.length; i++) {
          const p0 = pts[i - 1]
          const p1 = pts[i]
          const k = 1 - (now - p1.t) / LIFE // 1 → 0 as it ages out
          if (k <= 0) continue
          const speed = Math.hypot(p1.x - p0.x, p1.y - p0.y)
          ctx.globalAlpha = Math.min(0.9, k)
          ctx.lineWidth = Math.max(1.5, Math.min(7, speed * 0.4)) * k
          ctx.beginPath()
          ctx.moveTo(p0.x, p0.y)
          ctx.lineTo(p1.x, p1.y)
          ctx.stroke()
        }
        ctx.globalAlpha = 1
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
      document.documentElement.removeAttribute('data-cursor')
    }
  }, [mode])

  if (!active) return null
  return (
    <>
      <canvas ref={canvasRef} className="play-trail" aria-hidden="true" />
      <div ref={dotRef} className="play-cursor" aria-hidden="true" />
    </>
  )
}
