/**
 * Inline SVG filter defs for the RISO duotone treatment (applied to work imagery
 * via `filter: url(#zm-duotone)` in Play mode — see global.css [data-mode="play"]).
 * Maps image luminance onto two brand inks: deep indigo shadows → warm paper
 * highlights, for a screenprint feel. Hidden but present in the DOM.
 */
export function RisoDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      <defs>
        <filter id="zm-duotone" colorInterpolationFilters="sRGB">
          {/* luminance → grayscale */}
          <feColorMatrix
            type="matrix"
            values="0.2126 0.7152 0.0722 0 0
                    0.2126 0.7152 0.0722 0 0
                    0.2126 0.7152 0.0722 0 0
                    0 0 0 1 0"
          />
          {/* grayscale → two inks (shadow #232152 → highlight #EDE7D6).
              IDs let the dev customizer update these live. */}
          <feComponentTransfer>
            <feFuncR id="zm-duo-r" type="table" tableValues="0.137 0.929" />
            <feFuncG id="zm-duo-g" type="table" tableValues="0.129 0.906" />
            <feFuncB id="zm-duo-b" type="table" tableValues="0.322 0.839" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  )
}
