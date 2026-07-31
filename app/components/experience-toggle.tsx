'use client'

import { useExperience, type Mode } from './experience-provider'

const MODES: { value: Mode; label: string }[] = [
  { value: 'quiet', label: 'Quiet' },
  { value: 'play', label: 'Play' },
]

/**
 * Floating Quiet ↔ Play control. Play turns on the RISO duotone treatment on
 * work imagery + looser layout + hover motion (see global.css [data-mode="play"]).
 * Grain ships always-on as the baseline, so there's no texture switch here.
 */
export function ExperienceToggle() {
  const { mode, setMode, ready } = useExperience()

  return (
    <div
      className="experience-toggle"
      role="radiogroup"
      aria-label="Experience mode"
      style={{ opacity: ready ? 1 : 0 }}
    >
      {MODES.map((m) => (
        <button
          key={m.value}
          type="button"
          role="radio"
          aria-checked={mode === m.value}
          className="experience-toggle__opt"
          data-active={mode === m.value}
          onClick={() => setMode(m.value)}
        >
          {m.label}
        </button>
      ))}
    </div>
  )
}
