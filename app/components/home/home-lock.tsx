'use client'

import { useEffect } from 'react'

/**
 * Marks the home route so global.css can switch the desktop layout into
 * fixed-viewport, independent-per-column scrolling (and hide the footer there).
 * The class is also set pre-paint by an inline script in layout.tsx to avoid a
 * flash; this component keeps it in sync across client-side navigation.
 */
export function HomeLock() {
  useEffect(() => {
    document.documentElement.classList.add('home-locked')
    return () => document.documentElement.classList.remove('home-locked')
  }, [])
  return null
}
