import { ColumnLabel } from './column-label'
import {
  availability,
  experience,
  expertise,
  selectClients,
  references,
  press,
} from '../../lib/site-data'

function Subhead({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-dm-mono"
      style={{
        color: 'var(--text-tertiary)',
        fontSize: '11px',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        marginBottom: '0.75rem',
      }}
    >
      {children}
    </div>
  )
}

const sm = { fontSize: 'var(--unit-sm)' } as const

export function ResumeColumn() {
  return (
    <div className="flex flex-col gap-10">
      <ColumnLabel
        action={
          <a
            href="/ZACH MCNAIR - CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-mono hover:underline"
            style={{ color: 'var(--text-tertiary)', fontSize: '11px', textTransform: 'uppercase' }}
          >
            CV ↗
          </a>
        }
      >
        Résumé
      </ColumnLabel>

      {/* Currently */}
      <section>
        <Subhead>Currently</Subhead>
        <a href={availability.mailto} className="group inline-flex items-center gap-2 hover:underline">
          <span
            className="w-2 h-2 rounded-full status-indicator"
            style={{ backgroundColor: availability.dotColor }}
            aria-hidden="true"
          />
          <span className="font-faktum-regular" style={{ ...sm, color: 'var(--text)' }}>
            {availability.label}
          </span>
        </a>
      </section>

      {/* Experience */}
      <section>
        <Subhead>Experience</Subhead>
        <div className="flex flex-col gap-5">
          {experience.map((e) => (
            <div key={e.title + e.org} className="flex flex-col gap-0.5">
              <div className="font-faktum-regular" style={{ ...sm, color: 'var(--text)' }}>
                {e.title}
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-faktum-regular" style={{ ...sm, color: 'var(--text-tertiary)' }}>
                  {e.orgHref ? (
                    <a
                      href={e.orgHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      {e.org}
                    </a>
                  ) : (
                    e.org
                  )}
                </span>
                <span
                  className="font-dm-mono shrink-0"
                  style={{ color: 'var(--text-tertiary)', fontSize: '11px' }}
                >
                  {e.dates}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Select Clients */}
      <section>
        <Subhead>Select Clients</Subhead>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          {selectClients.map((c) => (
            <span key={c} className="font-faktum-regular" style={{ ...sm, color: 'var(--text)' }}>
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section>
        <Subhead>Recognition</Subhead>
        <div className="flex flex-col gap-4">
          {references.map((r) => (
            <div key={r.name} className="flex flex-col gap-1">
              <blockquote
                className="font-newsreader-regular italic"
                style={{ color: 'var(--text-secondary)', fontSize: 'var(--unit-md)', lineHeight: 1.4 }}
              >
                “{r.quote}”
              </blockquote>
              <div className="font-faktum-regular" style={{ ...sm, color: 'var(--text-tertiary)' }}>
                {r.name} — {r.role}, {r.org}
              </div>
            </div>
          ))}
          {press.map((p) => (
            <div
              key={p.title}
              className="font-faktum-regular"
              style={{ ...sm, color: 'var(--text-tertiary)' }}
            >
              {p.title} — {p.outlet}
              {p.year ? `, ${p.year}` : ''}
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section>
        <Subhead>Expertise</Subhead>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {expertise.map((x) => (
            <span key={x} className="font-faktum-regular" style={{ ...sm, color: 'var(--text-secondary)' }}>
              {x}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
