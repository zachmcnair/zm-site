import fs from 'fs'
import path from 'path'

/**
 * Inlines zm-illo.svg and drives its fill with currentColor (= var(--text)),
 * so the illustration renders in the real ink tone and inverts cleanly in dark
 * mode — instead of a filter approximation. The SVG's paths have no explicit
 * fill (default black), so they inherit the currentColor we set on the root.
 */
export function Portrait() {
  const raw = fs.readFileSync(path.join(process.cwd(), 'public/zm-illo.svg'), 'utf8')
  const svg = raw
    .replace(/<\?xml[^>]*\?>/, '')
    .replace('<svg ', '<svg fill="currentColor" ')

  return (
    <div
      className="portrait-illo w-full max-w-[380px] self-start"
      style={{ color: 'var(--text)' }}
      role="img"
      aria-label="Illustration of Zach McNair"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
