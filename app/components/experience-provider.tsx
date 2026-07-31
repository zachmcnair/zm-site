'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

export type Mode = 'quiet' | 'play'
export type Texture = 'on' | 'off'

interface ExperienceContextValue {
  mode: Mode
  texture: Texture
  setMode: (m: Mode) => void
  toggleMode: () => void
  setTexture: (t: Texture) => void
  toggleTexture: () => void
  /** False until mounted, so consumers can avoid hydration mismatches. */
  ready: boolean
}

const MODE_KEY = 'zm-mode'
const TEXTURE_KEY = 'zm-texture'

const ExperienceContext = createContext<ExperienceContextValue | null>(null)

/**
 * Inline script that applies the persisted experience attributes to <html>
 * before first paint, preventing a flash of the wrong mode/texture.
 * Rendered in <head> from layout.tsx.
 */
// For now the experience toggle is removed and grain ships always-on in Quiet
// mode. (The Quiet/Play + texture switching returns in the next phase.)
export const experienceNoFlashScript = `
(function () {
  try {
    var el = document.documentElement;
    el.setAttribute('data-mode', 'quiet');
    el.setAttribute('data-texture', 'on');
  } catch (e) {}
})();
`

export function ExperienceProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>('quiet')
  const [texture, setTextureState] = useState<Texture>('on')
  const [ready, setReady] = useState(false)

  // Hydrate from what the no-flash script already put on <html>.
  useEffect(() => {
    const el = document.documentElement
    const m = (el.getAttribute('data-mode') as Mode) || 'quiet'
    const t = (el.getAttribute('data-texture') as Texture) || 'on'
    setModeState(m)
    setTextureState(t)
    setReady(true)
  }, [])

  const setMode = useCallback((m: Mode) => {
    setModeState(m)
    document.documentElement.setAttribute('data-mode', m)
    try {
      localStorage.setItem(MODE_KEY, m)
    } catch {}
  }, [])

  const setTexture = useCallback((t: Texture) => {
    setTextureState(t)
    document.documentElement.setAttribute('data-texture', t)
    try {
      localStorage.setItem(TEXTURE_KEY, t)
    } catch {}
  }, [])

  const toggleMode = useCallback(
    () => setMode(mode === 'play' ? 'quiet' : 'play'),
    [mode, setMode]
  )
  const toggleTexture = useCallback(
    () => setTexture(texture === 'on' ? 'off' : 'on'),
    [texture, setTexture]
  )

  return (
    <ExperienceContext.Provider
      value={{ mode, texture, setMode, toggleMode, setTexture, toggleTexture, ready }}
    >
      {children}
    </ExperienceContext.Provider>
  )
}

export function useExperience(): ExperienceContextValue {
  const ctx = useContext(ExperienceContext)
  if (!ctx) {
    throw new Error('useExperience must be used within an ExperienceProvider')
  }
  return ctx
}
