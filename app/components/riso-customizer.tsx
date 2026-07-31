'use client'

import { useEffect, useState } from 'react'

/**
 * DEV-ONLY live customizer for the RISO / Play look. Never ships to production
 * (gated on NODE_ENV). Drives the duotone SVG filter + CSS vars live, and can
 * copy the current settings as JSON to paste back for baking into the source.
 */

type Settings = {
  shadow: string
  highlight: string
  contrast: number
  grainOpacity: number
  grainScale: number
  dust: number
  feather: number
  rough: number
  photoGrain: number
  grainHover: number
  radius: number
  tilt: number
  lift: number
  scale: number
  feedGap: number
}

// Defaults mirror the current baked-in values (see global.css / riso-defs.tsx).
const DEFAULTS: Settings = {
  shadow: '#232152',
  highlight: '#ede7d6',
  contrast: 1.1,
  grainOpacity: 0.265,
  grainScale: 0.65,
  dust: 0.5,
  feather: 16,
  rough: 4,
  photoGrain: 0.16,
  grainHover: 0.55,
  radius: 2,
  tilt: 3,
  lift: 4,
  scale: 1.012,
  feedGap: 2,
}

function hex01(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.replace(/(.)/g, '$1$1') : h, 16)
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}

function apply(s: Settings) {
  const root = document.documentElement
  root.setAttribute('data-mode', 'play') // so the duotone is visible while tuning
  root.style.setProperty('--riso-contrast', String(s.contrast))
  root.style.setProperty('--grain-opacity', String(s.grainOpacity))
  root.style.setProperty('--play-tilt', `${s.tilt}deg`)
  root.style.setProperty('--play-lift', `${-Math.abs(s.lift)}px`)
  root.style.setProperty('--play-scale', String(s.scale))
  root.style.setProperty('--play-feed-gap', `${s.feedGap}rem`)
  root.style.setProperty('--play-radius', `${s.radius}px`)
  root.style.setProperty('--play-grain-hover', String(s.grainHover))
  root.style.setProperty('--play-feather', `${s.feather}px`)
  root.style.setProperty('--play-photo-grain', String(s.photoGrain))
  root.style.setProperty('--dust-opacity', String(s.dust))

  const [sr, sg, sb] = hex01(s.shadow)
  const [hr, hg, hb] = hex01(s.highlight)
  const set = (id: string, a: number, b: number) =>
    document.getElementById(id)?.setAttribute('tableValues', `${a.toFixed(3)} ${b.toFixed(3)}`)
  set('zm-duo-r', sr, hr)
  set('zm-duo-g', sg, hg)
  set('zm-duo-b', sb, hb)

  document.getElementById('zm-grain-turb')?.setAttribute('baseFrequency', String(s.grainScale))
  document.getElementById('zm-rough-disp')?.setAttribute('scale', String(s.rough))
}

const panel: React.CSSProperties = {
  position: 'fixed',
  left: '1rem',
  bottom: '1rem',
  zIndex: 80,
  width: 260,
  maxHeight: '82vh',
  overflowY: 'auto',
  padding: '12px 14px',
  borderRadius: 12,
  background: 'rgba(18,18,22,0.92)',
  backdropFilter: 'blur(10px)',
  color: '#EDEBE4',
  font: '11px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace',
  border: '1px solid rgba(255,255,255,0.12)',
  boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
}

export function RisoCustomizer() {
  const [open, setOpen] = useState(false)
  const [s, setS] = useState<Settings>(DEFAULTS)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (open) apply(s)
  }, [open, s])

  if (process.env.NODE_ENV !== 'development') return null

  const num = (k: keyof Settings, label: string, min: number, max: number, step: number) => (
    <label style={{ display: 'block', marginBottom: 9 }}>
      <span style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.75 }}>
        <span>{label}</span>
        <span>{s[k] as number}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={s[k] as number}
        onChange={(e) => setS({ ...s, [k]: parseFloat(e.target.value) })}
        style={{ width: '100%' }}
      />
    </label>
  )

  const color = (k: 'shadow' | 'highlight', label: string) => (
    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
      <span style={{ opacity: 0.75 }}>{label}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span>{s[k]}</span>
        <input type="color" value={s[k]} onChange={(e) => setS({ ...s, [k]: e.target.value })} />
      </span>
    </label>
  )

  const btn: React.CSSProperties = {
    flex: 1,
    padding: '7px 8px',
    borderRadius: 7,
    border: '1px solid rgba(255,255,255,0.16)',
    background: 'rgba(255,255,255,0.06)',
    color: 'inherit',
    cursor: 'pointer',
    font: 'inherit',
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{ ...btn, position: 'fixed', left: '1rem', bottom: '1rem', zIndex: 80, width: 'auto', padding: '8px 12px', background: 'rgba(18,18,22,0.92)' }}
        title="RISO customizer (dev only)"
      >
        ◐ RISO
      </button>
    )
  }

  return (
    <div style={panel}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <strong style={{ letterSpacing: '0.06em' }}>RISO · dev</strong>
        <button onClick={() => setOpen(false)} style={{ ...btn, flex: 'none', padding: '3px 8px' }}>
          ✕
        </button>
      </div>

      {color('shadow', 'Shadow ink')}
      {color('highlight', 'Highlight ink')}
      {num('contrast', 'Contrast', 0.8, 1.6, 0.01)}
      {num('feather', 'Edge feather px', 0, 48, 1)}
      {num('rough', 'Edge roughen', 0, 14, 0.5)}
      {num('radius', 'Corner radius px', 0, 28, 1)}
      {num('grainOpacity', 'Table grain', 0, 0.5, 0.005)}
      {num('grainScale', 'Grain scale', 0.3, 1.4, 0.05)}
      {num('photoGrain', 'Photo grain', 0, 0.5, 0.01)}
      {num('dust', 'Dust', 0, 1, 0.05)}
      {num('grainHover', 'Hover shimmer', 0, 1, 0.05)}
      {num('tilt', 'Hover tilt°', -4, 4, 0.1)}
      {num('lift', 'Hover lift px', 0, 20, 1)}
      {num('scale', 'Hover scale', 1, 1.06, 0.002)}
      {num('feedGap', 'Feed gap rem', 1, 8, 0.25)}

      <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
        <button
          style={btn}
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(s, null, 2))
            setCopied(true)
            setTimeout(() => setCopied(false), 1200)
          }}
        >
          {copied ? 'Copied ✓' : 'Copy settings'}
        </button>
        <button style={btn} onClick={() => setS(DEFAULTS)}>
          Reset
        </button>
      </div>
      <p style={{ opacity: 0.5, marginTop: 8 }}>Dev only · forces Play while open</p>
    </div>
  )
}
