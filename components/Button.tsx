import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'mint' | 'outline-light'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-all duration-300 ease-out will-change-transform focus-visible:outline-offset-4 active:scale-[0.98]'

const variants: Record<Variant, string> = {
  primary:
    'bg-forest text-cream shadow-[0_10px_30px_-12px_rgb(31_77_58/0.7)] hover:-translate-y-0.5 hover:bg-forest-700 hover:shadow-[0_16px_36px_-14px_rgb(31_77_58/0.75)]',
  secondary:
    'bg-warm-white text-forest ring-1 ring-forest/15 hover:-translate-y-0.5 hover:ring-forest/35 hover:shadow-soft',
  ghost: 'text-forest hover:bg-forest/5',
  mint: 'bg-mint text-forest-900 shadow-[0_10px_30px_-12px_rgb(159_220_192/0.8)] hover:-translate-y-0.5 hover:bg-[#b2e5ce]',
  'outline-light': 'text-cream ring-1 ring-cream/30 hover:-translate-y-0.5 hover:bg-cream/10 hover:ring-cream/60',
}

const sizes = {
  md: 'h-11 px-5 text-[0.95rem]',
  lg: 'h-13 px-7 text-base',
} as const

interface ButtonLinkProps {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: keyof typeof sizes
  arrow?: boolean
  className?: string
  onClick?: () => void
}

export function ButtonLink({ href, children, variant = 'primary', size = 'lg', arrow = false, className = '', onClick }: ButtonLinkProps) {
  return (
    <a href={href} onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
      {arrow && <ArrowRight aria-hidden className="h-[1.1em] w-[1.1em] transition-transform duration-300 group-hover:translate-x-1" />}
    </a>
  )
}
