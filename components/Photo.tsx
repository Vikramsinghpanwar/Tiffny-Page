import type { Photo as PhotoData } from '@/lib/photos'

interface PhotoProps {
  photo: PhotoData
  /** The `sizes` attribute: how wide the image renders at each breakpoint. */
  sizes: string
  className?: string
  /** Above-the-fold images load eagerly with high priority; everything else is lazy. */
  priority?: boolean
  alt?: string
}

/** Responsive WebP image with intrinsic dimensions (no layout shift). */
export function Photo({ photo, sizes, className = '', priority = false, alt }: PhotoProps) {
  const largest = photo.widths[photo.widths.length - 1]
  const middle = photo.widths[Math.floor(photo.widths.length / 2)]
  const src = (w: number) => `/images/${photo.base}-${w}.webp`
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export; variants are pre-generated
    <img
      src={src(middle)}
      srcSet={photo.widths.map((w) => `${src(w)} ${w}w`).join(', ')}
      sizes={sizes}
      width={largest}
      height={Math.round(largest / photo.ratio)}
      alt={alt ?? photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
    />
  )
}
