'use client'

import { useEffect, useState } from 'react'
import { useLastFm } from '../lastfm-context'
import { identity } from '../../lib/site-data'

const labelStyle = {
  color: 'var(--text-tertiary)',
  fontSize: '11px',
  letterSpacing: '0.04em',
  textTransform: 'uppercase' as const,
}

const valueStyle = { fontSize: '12px', color: 'var(--text-secondary)' }

/** Compact single-line "now playing" (first track only) for the slim bar. */
function NowPlaying() {
  const { tracks } = useLastFm()
  const track = tracks?.[0]
  if (!track) return null
  return (
    <span className="flex items-center gap-2 min-w-0">
      <span className="font-dm-mono shrink-0" style={labelStyle}>
        Spinning
      </span>
      {track.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={track.image} alt="" className="w-5 h-5 rounded object-cover shrink-0" />
      ) : null}
      <span className="truncate" style={valueStyle}>
        {track.name}
        {track.artist ? <span style={{ color: 'var(--text-tertiary)' }}> — {track.artist}</span> : null}
      </span>
    </span>
  )
}

/** Compact single-line weather for the slim bar. */
function Weather() {
  const [w, setW] = useState<{ temperature: number; condition: string } | null>(null)
  useEffect(() => {
    let alive = true
    const fallback = { temperature: 88, condition: 'Close To The Clouds' }
    fetch('/api/weather')
      .then((r) => (r.ok ? r.json() : fallback))
      .then((d) => alive && setW(d || fallback))
      .catch(() => alive && setW(fallback))
    return () => {
      alive = false
    }
  }, [])
  if (!w) return null
  const label =
    w.condition === 'Close To The Clouds' ? w.condition : `${w.condition} ${w.temperature}°`
  return (
    <span style={valueStyle}>
      {label}
      <span style={{ color: 'var(--text-tertiary)' }}> · Austin, TX</span>
    </span>
  )
}

/**
 * Slim persistent footer for the locked desktop home, where the tall global
 * footer can't live. One line: copyright · now-playing · weather · email.
 * Shown only on lg via .home-footer-bar in global.css.
 */
export function HomeFooterBar() {
  const year = new Date().getFullYear()

  return (
    <div
      className="home-footer-bar items-center justify-between gap-8 px-8 md:px-20 py-3"
      style={{ borderTop: '1px solid var(--raised)' }}
    >
      <div className="flex items-center gap-8 min-w-0">
        <span className="font-dm-mono shrink-0" style={labelStyle}>
          © {year} Zach McNair
        </span>
        <span className="hidden xl:flex min-w-0">
          <NowPlaying />
        </span>
      </div>

      <div className="flex items-center gap-8 shrink-0">
        <span className="hidden xl:inline">
          <Weather />
        </span>
        <a href={`mailto:${identity.email}`} className="font-dm-mono hover:underline" style={labelStyle}>
          {identity.email}
        </a>
      </div>
    </div>
  )
}
