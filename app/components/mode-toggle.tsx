'use client'

import { useExperience } from './experience-provider'

/**
 * Quiet ↔ Play toggle, styled to sit in the top nav beside the light/dark toggle.
 * Laptop icon = Quiet (clean/work); paintbrush = Play (the RISO/textured mode).
 * Shows the current mode's icon and switches on click (mirrors DarkModeToggle).
 */
const LaptopIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text)' }} aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
    />
  </svg>
)

const BrushIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text)' }} aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
    />
  </svg>
)

export function ModeToggle() {
  const { mode, toggleMode, ready } = useExperience()

  // Stable placeholder until hydrated (avoids a server/client mismatch).
  if (!ready) {
    return (
      <span className="min-w-[44px] min-h-[44px] flex items-center justify-center" aria-hidden="true">
        <LaptopIcon />
      </span>
    )
  }

  return (
    <button
      onClick={toggleMode}
      className="nav-tip min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded"
      aria-label={mode === 'play' ? 'Switch to Business Mode' : 'Switch to RISO Mode'}
      data-tip={mode === 'play' ? 'RISO Mode™' : 'Business Mode™'}
    >
      {mode === 'play' ? <BrushIcon /> : <LaptopIcon />}
    </button>
  )
}
