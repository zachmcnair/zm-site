'use client'

import { useState } from 'react'
import { ColumnLabel } from './column-label'
import {
  identity,
  memo,
  socials,
  type MemoParagraph,
  type Segment,
} from '../../lib/site-data'

function renderSegment(seg: Segment, i: number) {
  if (typeof seg === 'string') {
    // Preserve intentional line breaks (e.g. "Cheers,\nZach").
    const parts = seg.split('\n')
    return parts.map((part, j) => (
      <span key={`${i}-${j}`}>
        {part}
        {j < parts.length - 1 && <br />}
      </span>
    ))
  }
  return (
    <a
      key={i}
      href={seg.href}
      className="hover:underline"
      style={{ color: 'var(--primary)' }}
      target={seg.href.startsWith('http') ? '_blank' : undefined}
      rel={seg.href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {seg.text}
    </a>
  )
}

function Paragraph({ p }: { p: MemoParagraph }) {
  return (
    <p className="memo-text" data-agent-context={p.id}>
      {p.segments.map(renderSegment)}
    </p>
  )
}

export function AboutColumn({ portrait }: { portrait?: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false)
  const lead = memo.filter((p) => p.lead)
  const rest = memo.filter((p) => !p.lead)

  return (
    <div className="flex flex-col gap-8">
      <ColumnLabel>About</ColumnLabel>

      {/* Portrait illustration — inlined so its ink follows var(--text) in both modes */}
      {portrait}

      {/* Identity */}
      <div className="flex flex-col gap-2">
        <h1
          className="font-faktum-medium"
          style={{ color: 'var(--text)', fontSize: 'var(--unit-xl)', lineHeight: 1.15 }}
        >
          {identity.name}
        </h1>
        <p
          className="font-faktum-regular"
          style={{ color: 'var(--text-tertiary)', fontSize: '0.9375rem', lineHeight: 1.5, maxWidth: '60ch' }}
        >
          {identity.tagline}
        </p>
      </div>

      {/* Memo — tightened by default, full letter behind a disclosure */}
      <div className="flex flex-col gap-4">
        {lead.map((p) => (
          <Paragraph key={p.id} p={p} />
        ))}

        <div
          className="grid transition-[grid-template-rows] duration-500 ease-out"
          style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-4 pt-4">
              {rest.map((p) => (
                <Paragraph key={p.id} p={p} />
              ))}
              <img
                src={identity.signature}
                alt="Zach McNair signature"
                className="h-14 w-auto self-start mr-auto"
                style={{ filter: 'var(--signature-filter)' }}
                data-agent-context="personal-signature"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="self-start font-dm-mono hover:underline"
          style={{
            color: 'var(--text-tertiary)',
            fontSize: '11px',
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
          }}
          aria-expanded={expanded}
        >
          {expanded ? 'Close letter ↑' : 'Read the full letter →'}
        </button>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-2 pt-2">
        <ColumnLabel>Contact</ColumnLabel>
        <div className="flex flex-col gap-1 pt-1">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="group flex items-baseline justify-between hover:underline"
              style={{ color: 'var(--text)', fontSize: 'var(--unit-sm)' }}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span
                className="font-dm-mono"
                style={{ color: 'var(--text-tertiary)', fontSize: '11px', textTransform: 'uppercase' }}
              >
                {s.label}
              </span>
              <span className="font-faktum-regular">
                {s.href.replace(/^mailto:/, '').replace(/^https?:\/\/(www\.)?/, '')}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
