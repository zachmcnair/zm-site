/**
 * CMYK halftone renderer — the "Full Process" print pass.
 * Screens a source image into four ink plates (C/M/Y/K), each on its own screen
 * angle and offset slightly (registration "shake"), composited subtractively on
 * paper. Pure Canvas 2D so it works on any same-origin image.
 */

export type HalftoneOpts = {
  pitch: number // dot spacing in display px
  registration: number // plate misregistration magnitude (px)
  maxRadius?: number // dot radius at full ink, as a factor of pitch
  scale?: number // canvas pixels per display px (crispness)
  paper?: string // paper color the ink prints on
}

// Riso-ish process inks (vivid, slightly soft).
const INKS: Record<'c' | 'm' | 'y' | 'k', [number, number, number]> = {
  c: [0, 148, 218],
  m: [232, 0, 128],
  y: [255, 221, 0],
  k: [26, 24, 34],
}
// Classic screen angles (degrees) to avoid moiré.
const ANGLES: Record<'c' | 'm' | 'y' | 'k', number> = { c: 15, m: 75, y: 0, k: 45 }
// Per-plate registration directions (unit-ish), scaled by `registration`.
const REG: Record<'c' | 'm' | 'y' | 'k', [number, number]> = {
  c: [1, 0.25],
  m: [-0.7, 0.85],
  y: [0.35, -1],
  k: [0, 0],
}
const PLATES: ('c' | 'm' | 'y' | 'k')[] = ['k', 'c', 'm', 'y']

export function renderHalftone(
  img: HTMLImageElement,
  out: HTMLCanvasElement,
  dispW: number,
  dispH: number,
  opts: HalftoneOpts
) {
  const scale = opts.scale ?? Math.min(2, typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1)
  const maxRadiusF = opts.maxRadius ?? 0.72
  const W = Math.max(1, Math.round(dispW * scale))
  const H = Math.max(1, Math.round(dispH * scale))
  out.width = W
  out.height = H

  // Sample buffer (source image resized to render size).
  const src = document.createElement('canvas')
  src.width = W
  src.height = H
  const sctx = src.getContext('2d', { willReadFrequently: true })
  if (!sctx) return
  sctx.drawImage(img, 0, 0, W, H)
  const data = sctx.getImageData(0, 0, W, H).data

  const ctx = out.getContext('2d')
  if (!ctx) return
  ctx.fillStyle = opts.paper ?? '#faf6ec'
  ctx.fillRect(0, 0, W, H)

  const pitch = Math.max(2, opts.pitch * scale)
  const maxR = pitch * maxRadiusF
  const reg = opts.registration * scale
  const cx = W / 2
  const cy = H / 2
  const diag = Math.ceil(Math.hypot(W, H) / 2) + pitch

  const sample = (x: number, y: number, ch: 'c' | 'm' | 'y' | 'k') => {
    const xi = x < 0 ? 0 : x > W - 1 ? W - 1 : Math.round(x)
    const yi = y < 0 ? 0 : y > H - 1 ? H - 1 : Math.round(y)
    const i = (yi * W + xi) * 4
    const r = data[i] / 255
    const g = data[i + 1] / 255
    const b = data[i + 2] / 255
    const k = 1 - Math.max(r, g, b)
    if (ch === 'k') return k
    if (k >= 0.999) return 0
    if (ch === 'c') return (1 - r - k) / (1 - k)
    if (ch === 'm') return (1 - g - k) / (1 - k)
    return (1 - b - k) / (1 - k)
  }

  ctx.globalCompositeOperation = 'multiply'
  for (const ch of PLATES) {
    const [ir, ig, ib] = INKS[ch]
    ctx.fillStyle = `rgb(${ir},${ig},${ib})`
    const a = (ANGLES[ch] * Math.PI) / 180
    const cos = Math.cos(a)
    const sin = Math.sin(a)
    const ox = REG[ch][0] * reg
    const oy = REG[ch][1] * reg
    for (let gy = -diag; gy <= diag; gy += pitch) {
      for (let gx = -diag; gx <= diag; gx += pitch) {
        const x = cx + gx * cos - gy * sin
        const y = cy + gx * sin + gy * cos
        if (x < -pitch || x > W + pitch || y < -pitch || y > H + pitch) continue
        const d = sample(x + ox, y + oy, ch)
        if (d <= 0.03) continue
        const r = Math.min(maxR, Math.sqrt(d) * maxR)
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }
  ctx.globalCompositeOperation = 'source-over'
}
