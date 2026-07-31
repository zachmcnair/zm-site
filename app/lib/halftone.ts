/**
 * CMYK halftone renderer — the "Full Process" print pass.
 * Screens a source image into four ink plates (C/M/Y/K), each on its own screen
 * angle and offset slightly (registration "shake"), composited subtractively on
 * paper. Pure Canvas 2D so it works on any same-origin image.
 */

export type HalftoneOpts = {
  pitch: number // dot spacing in display px
  registration: number // plate misregistration magnitude (px)
  grain?: number // grain baked into the print (0..1)
  overspray?: number // stray ink specks past the edges (0..1)
  maxRadius?: number // dot radius at full ink, as a factor of pitch
  scale?: number // canvas pixels per display px (crispness)
  paper?: string // paper color the ink prints on
}

// Cached grayscale noise tile for baked-in grain (visible regardless of blend).
let noiseTile: HTMLCanvasElement | null = null
function getNoise(): HTMLCanvasElement {
  if (noiseTile) return noiseTile
  const n = document.createElement('canvas')
  n.width = 128
  n.height = 128
  const nx = n.getContext('2d')
  if (nx) {
    const id = nx.createImageData(128, 128)
    for (let i = 0; i < id.data.length; i += 4) {
      const v = 90 + Math.random() * 130
      id.data[i] = id.data[i + 1] = id.data[i + 2] = v
      id.data[i + 3] = 255
    }
    nx.putImageData(id, 0, 0)
  }
  noiseTile = n
  return n
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
// Per-plate registration directions, scaled by `registration`. Magnitudes are
// > 1 so a few px of registration reads as clear plate misalignment (color fringe).
const REG: Record<'c' | 'm' | 'y' | 'k', [number, number]> = {
  c: [1.5, 0.4],
  m: [-1.1, 1.25],
  y: [0.6, -1.5],
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
  const scale = opts.scale ?? Math.min(1.5, typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1)
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
  const TWO_PI = Math.PI * 2
  for (const ch of PLATES) {
    const [ir, ig, ib] = INKS[ch]
    ctx.fillStyle = `rgb(${ir},${ig},${ib})`
    const a = (ANGLES[ch] * Math.PI) / 180
    const cos = Math.cos(a)
    const sin = Math.sin(a)
    const ox = REG[ch][0] * reg
    const oy = REG[ch][1] * reg
    // Batch every dot of this plate into ONE path → a single fill (fast).
    const path = new Path2D()
    for (let gy = -diag; gy <= diag; gy += pitch) {
      for (let gx = -diag; gx <= diag; gx += pitch) {
        const x = cx + gx * cos - gy * sin
        const y = cy + gx * sin + gy * cos
        if (x < -pitch || x > W + pitch || y < -pitch || y > H + pitch) continue
        const d = sample(x + ox, y + oy, ch)
        if (d <= 0.03) continue
        const r = Math.min(maxR, Math.sqrt(d) * maxR)
        path.moveTo(x + r, y)
        path.arc(x, y, r, 0, TWO_PI)
      }
    }
    ctx.fill(path)
  }

  // Baked grain — visible on the print regardless of any overlay blend.
  if (opts.grain && opts.grain > 0.01) {
    const pat = ctx.createPattern(getNoise(), 'repeat')
    if (pat) {
      ctx.globalCompositeOperation = 'overlay'
      ctx.globalAlpha = Math.min(1, opts.grain)
      ctx.fillStyle = pat
      ctx.fillRect(0, 0, W, H)
      ctx.globalAlpha = 1
    }
  }

  // Overspray — stray ink specks near the edges so borders aren't clean lines.
  // Sized in DISPLAY px (not dot-pitch) so it stays visible at any pitch.
  const ospray = opts.overspray ?? 0.5
  if (ospray > 0.01) {
    ctx.globalCompositeOperation = 'multiply'
    ctx.fillStyle = 'rgba(26,24,34,0.6)'
    const band = 22 * scale
    const maxSpeck = 3.2 * scale
    const specks = Math.round(((W + H) / scale) * 0.14 * ospray)
    for (let i = 0; i < specks; i++) {
      let x: number
      let y: number
      const edge = i & 3
      if (edge === 0) {
        x = Math.random() * W
        y = Math.random() * band
      } else if (edge === 1) {
        x = Math.random() * W
        y = H - Math.random() * band
      } else if (edge === 2) {
        x = Math.random() * band
        y = Math.random() * H
      } else {
        x = W - Math.random() * band
        y = Math.random() * H
      }
      ctx.globalAlpha = 0.14 + Math.random() * 0.32
      ctx.beginPath()
      ctx.arc(x, y, 0.5 * scale + Math.random() * maxSpeck, 0, TWO_PI)
      ctx.fill()
    }
    ctx.globalAlpha = 1
  }
  ctx.globalCompositeOperation = 'source-over'
}
