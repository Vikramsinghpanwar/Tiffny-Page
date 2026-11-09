'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Wordmark } from '@/components/Logo'
import { ButtonLink } from '@/components/Button'
import { links, sections } from '@/lib/site'

/** On the home page anchors are in-page; elsewhere (legal pages) they point back home. */
export function Header({ onHome = true }: { onHome?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('top')
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const href = (id: string) => (onHome ? `#${id}` : `/${id === 'top' ? '' : `#${id}`}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    if (!onHome) return
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [onHome])

  // Mobile menu: lock scroll, close on Escape, keep focus inside while open.
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusables = () =>
      Array.from(panelRef.current?.querySelectorAll<HTMLElement>('a[href], button') ?? [])
    focusables()[0]?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab') {
        const items = [toggleRef.current!, ...focusables()]
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        solid
          ? 'bg-cream/85 shadow-[0_1px_0_rgb(31_77_58/0.08),0_10px_30px_-20px_rgb(31_77_58/0.35)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href={href('top')} className="shrink-0 rounded-full" aria-label="Tiffny home">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {sections.map((s) => {
            const isActive = onHome && active === s.id
            return (
              <li key={s.id}>
                <a
                  href={href(s.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors duration-200 ${
                    isActive ? 'text-forest' : 'text-ink-soft hover:text-forest'
                  }`}
                >
                  {s.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-mint transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={links.login} variant="ghost" size="md">
            Login
          </ButtonLink>
          <ButtonLink href={links.customerSignup} size="md" arrow>
            Get Started
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="relative -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-forest transition-colors hover:bg-forest/5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                open ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                open ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        inert={!open}
        className={`fixed inset-x-0 bottom-0 top-18 bg-cream transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="grain flex h-full flex-col overflow-y-auto px-5 pb-8 pt-4 sm:px-8">
          <ul className="flex flex-col">
            {sections.map((s, i) => (
              <li
                key={s.id}
                className={`border-b border-line transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
              >
                <a
                  href={href(s.id)}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4.5 text-2xl font-semibold tracking-tight text-forest"
                >
                  {s.label}
                  <ArrowRight aria-hidden className="h-5 w-5 text-forest/40" />
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`mt-auto grid gap-3 pt-8 transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
            style={{ transitionDelay: open ? '320ms' : '0ms' }}
          >
            <ButtonLink href={links.customerSignup} arrow className="w-full">
              Get Started
            </ButtonLink>
            <ButtonLink href={links.login} variant="secondary" className="w-full">
              Login
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  )
}
