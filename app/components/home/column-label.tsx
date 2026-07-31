/**
 * Small mono section header with a hairline rule beneath — the structural cue
 * borrowed from the Cargo / Gray Ediger reference ("ABOUT ME", "SELECT WORK").
 */
export function ColumnLabel({
  children,
  action,
}: {
  children: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <div
      className="flex items-baseline justify-between pb-3"
      style={{ borderBottom: '1px solid var(--raised)' }}
    >
      <span
        className="font-dm-mono"
        style={{
          color: 'var(--text-tertiary)',
          fontSize: '11px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </span>
      {action}
    </div>
  )
}
