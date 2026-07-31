'use client'

/**
 * Full-viewport texture layer, gated by html[data-texture="on"] (see global.css).
 * M1 ships a subtle RISO-like grain; the full duotone/halftone treatment on
 * work imagery lands in M2.
 */
export function TextureOverlay() {
  return (
    <div className="texture-overlay" aria-hidden="true">
      <svg className="texture-overlay__grain" xmlns="http://www.w3.org/2000/svg">
        <filter id="zm-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#zm-grain)" />
      </svg>
    </div>
  )
}
