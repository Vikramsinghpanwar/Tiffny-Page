// The Tiffny tiffin-carrier mark, copied verbatim from the app
// (tiffin-next/components/brand/TiffnyLogo.tsx) so the brand stays identical.

const GLYPH_HANDLE = 'M42,43 V36 A12,12 0 0,1 66,36 V43'
const GLYPH_TIER_TOP = 'M39,42 H69 A5,5 0 0,1 74,47 V49 A5,5 0 0,1 69,54 H39 A5,5 0 0,1 34,49 V47 A5,5 0 0,1 39,42 Z'
const GLYPH_TIER_MID = 'M39,57 H69 A5,5 0 0,1 74,62 V64 A5,5 0 0,1 69,69 H39 A5,5 0 0,1 34,64 V62 A5,5 0 0,1 39,57 Z'
const GLYPH_TIER_BOTTOM = 'M39,72 H69 A5,5 0 0,1 74,77 V79 A5,5 0 0,1 69,84 H39 A5,5 0 0,1 34,79 V77 A5,5 0 0,1 39,72 Z'

/** Mark-only glyph in currentColor. */
export function TiffnyGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="24 18 60 72" fill="none" aria-hidden="true" focusable="false" className={className}>
      <path d={GLYPH_HANDLE} stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <path d={GLYPH_TIER_TOP} fill="currentColor" />
      <path d={GLYPH_TIER_MID} fill="currentColor" opacity="0.82" />
      <path d={GLYPH_TIER_BOTTOM} fill="currentColor" />
    </svg>
  )
}

/** Full circular badge: forest disc with the cream/mint carrier mark. */
export function TiffnyLogo({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 108 108"
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path d="M54,0 A54,54 0 1,1 54,108 A54,54 0 1,1 54,0 Z" fill="#1F4D3A" />
      <path d={GLYPH_HANDLE} stroke="#FAF7F0" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d={GLYPH_TIER_TOP} fill="#FAF7F0" />
      <path d={GLYPH_TIER_MID} fill="#9FDCC0" />
      <path d={GLYPH_TIER_BOTTOM} fill="#FAF7F0" />
    </svg>
  )
}

/** Logo + wordmark lockup. */
export function Wordmark({ className = '', inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {inverted ? (
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream text-forest" aria-hidden>
          <TiffnyGlyph className="h-6 w-auto" />
        </span>
      ) : (
        <TiffnyLogo className="h-9 w-9" />
      )}
      <span className={`text-[1.35rem] font-extrabold tracking-[-0.03em] ${inverted ? 'text-cream' : 'text-forest'}`}>
        Tiffny
      </span>
    </span>
  )
}
