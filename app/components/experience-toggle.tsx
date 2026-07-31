'use client'

import { useExperience } from './experience-provider'

export function ExperienceToggle() {
  const { mode, setMode, texture, toggleTexture, ready } = useExperience()

  return (
    <div
      className="experience-toggle"
      role="group"
      aria-label="Experience settings"
      // Fade in only after we know the real state, to avoid a flash.
      style={{ opacity: ready ? 1 : 0 }}
    >
      {/* Mode: Quiet <-> Play */}
      <div className="experience-toggle__seg" role="radiogroup" aria-label="Mode">
        {(['quiet', 'play'] as const).map((m) => (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={mode === m}
            className="experience-toggle__opt"
            data-active={mode === m}
            onClick={() => setMode(m)}
          >
            {m === 'quiet' ? 'Quiet' : 'Play'}
          </button>
        ))}
      </div>

      <span className="experience-toggle__divider" aria-hidden="true" />

      {/* Texture on/off */}
      <button
        type="button"
        className="experience-toggle__opt experience-toggle__texture"
        role="switch"
        aria-checked={texture === 'on'}
        aria-label="Texture"
        data-active={texture === 'on'}
        onClick={toggleTexture}
      >
        <span className="experience-toggle__dot" aria-hidden="true" />
        Grain
      </button>
    </div>
  )
}
