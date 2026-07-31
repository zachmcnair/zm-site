'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ColumnLabel } from './column-label'
import { useExperience } from '../experience-provider'
import portfolioData from '../../lib/portfolio.json'

interface Item {
  id: string
  src: string
  alt: string
  title: string
  client: string
  metatags: string[]
  aspectRatio?: string
  hidden?: boolean
  featured?: boolean
  caseStudyUrl?: string
  caseStudySlug?: string
  projectId?: string
}

// Deterministic featured feed: one item per project (prefer the featured one),
// in source order. Computed at module scope so SSR and client agree.
const FEED: Item[] = (() => {
  const items = (portfolioData as Item[]).filter((i) => !i.hidden)
  const byProject = new Map<string, Item[]>()
  for (const it of items) {
    const key = it.projectId || it.client || it.id
    if (!byProject.has(key)) byProject.set(key, [])
    byProject.get(key)!.push(it)
  }
  const feed: Item[] = []
  byProject.forEach((group) => {
    feed.push(group.find((g) => g.featured) || group[0])
  })
  return feed.slice(0, 8)
})()

function linkFor(item: Item): { href: string | null; external: boolean } {
  if (item.caseStudySlug) return { href: `/case-studies/${item.caseStudySlug}`, external: false }
  if (item.caseStudyUrl?.startsWith('http')) return { href: item.caseStudyUrl, external: true }
  return { href: null, external: false }
}

function WorkItem({ item, index }: { item: Item; index: number }) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const { mode } = useExperience()
  const { href, external } = linkFor(item)

  // Cached images may finish loading before React attaches onLoad — catch that.
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [])

  const media = (
    <div className="relative w-full overflow-hidden">
      <img
        ref={imgRef}
        src={item.src}
        alt={item.alt}
        onLoad={() => setLoaded(true)}
        className="w-full h-auto motion-reduce:filter-none"
        style={{
          filter: loaded ? 'blur(0px)' : 'blur(16px)',
          transform: mode === 'play' && loaded ? undefined : undefined,
          transition: 'filter 0.7s ease-out, transform 0.4s ease-out',
        }}
        loading={index < 3 ? 'eager' : 'lazy'}
      />
      {href && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
          <span
            className="relative z-10 px-5 py-2.5 font-dm-mono"
            style={{
              fontSize: '11px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--text)',
              backgroundColor: 'var(--background)',
              border: '1px solid var(--raised)',
            }}
          >
            {item.caseStudySlug ? 'View case study' : external ? 'View live' : 'View'}
          </span>
        </div>
      )}
    </div>
  )

  const caption = (
    <div className="mt-3 flex items-baseline gap-3">
      <span
        className="font-dm-mono shrink-0"
        style={{ color: 'var(--text-tertiary)', fontSize: '11px' }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="font-faktum-regular" style={{ color: 'var(--text)', fontSize: 'var(--unit-sm)' }}>
          {item.title}
        </span>
        <span
          className="font-faktum-regular"
          style={{ color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)' }}
        >
          {item.client}
          {item.metatags?.length ? ` — ${item.metatags.slice(0, 3).join(', ')}` : ''}
        </span>
      </div>
    </div>
  )

  const body = (
    <div
      className="group block"
      data-play={mode === 'play'}
      style={{ transition: 'transform 0.4s ease-out' }}
    >
      {media}
      {caption}
    </div>
  )

  if (!href) return <div>{body}</div>
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="no-underline"
      style={{ textDecoration: 'none' }}
    >
      {body}
    </Link>
  )
}

export function SelectWorkColumn() {
  return (
    <div className="flex flex-col gap-8">
      <ColumnLabel
        action={
          <Link
            href="/portfolio"
            className="font-dm-mono hover:underline"
            style={{ color: 'var(--text-tertiary)', fontSize: '11px', textTransform: 'uppercase' }}
          >
            See all →
          </Link>
        }
      >
        Selected Work
      </ColumnLabel>

      <div className="flex flex-col gap-12 lg:gap-16">
        {FEED.map((item, i) => (
          <WorkItem key={item.id} item={item} index={i} />
        ))}
      </div>

      <Link
        href="/portfolio"
        className="self-start font-dm-mono hover:underline"
        style={{
          color: 'var(--text)',
          fontSize: '11px',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        See all work →
      </Link>
    </div>
  )
}
