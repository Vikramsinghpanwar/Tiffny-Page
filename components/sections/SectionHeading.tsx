interface SectionHeadingProps {
  eyebrow: string
  title: React.ReactNode
  intro?: React.ReactNode
  id?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
}

export function SectionHeading({ eyebrow, title, intro, id, align = 'center', tone = 'light' }: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} data-reveal>
      <p
        className={`inline-flex items-center gap-2 text-[0.8rem] font-bold uppercase tracking-[0.16em] ${
          dark ? 'text-mint' : 'text-forest-500'
        }`}
      >
        <span aria-hidden className={`h-px w-6 ${dark ? 'bg-mint/60' : 'bg-forest-500/50'}`} />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 text-[2.15rem] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-5xl ${dark ? 'text-cream' : 'text-forest'}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-cream/75' : 'text-ink-soft'}`}>{intro}</p>
      )}
    </div>
  )
}

/** Serif-italic accent used inside headings. */
export function Accent({ children, tone = 'light' }: { children: React.ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <span className={`font-serif font-medium italic tracking-[-0.02em] ${tone === 'dark' ? 'text-mint' : 'text-forest-500'}`}>
      {children}
    </span>
  )
}
