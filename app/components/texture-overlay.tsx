'use client'

/**
 * Full-viewport texture, gated by html[data-texture="on"] (see global.css).
 * Two layers form the physical "surface":
 *  - __grain: the fine, ever-present film grain (the "table"), slowly drifting.
 *  - __dust:  sparser specks that settle on top and drift on their own.
 * Each work image adds its OWN grain (see .riso-media::after) that moves with it.
 */
export function TextureOverlay() {
  return (
    <div className="texture-overlay" aria-hidden="true">
      <svg className="texture-overlay__grain" xmlns="http://www.w3.org/2000/svg">
        <filter id="zm-grain">
          <feTurbulence
            id="zm-grain-turb"
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#zm-grain)" />
      </svg>
      <div className="texture-overlay__dust" />
    </div>
  )
}
