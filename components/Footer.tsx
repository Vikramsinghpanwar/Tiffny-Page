import { Mail } from 'lucide-react'
import { Wordmark } from '@/components/Logo'
import { brand, CONTACT_EMAIL, links, sections } from '@/lib/site'

export function Footer({ onHome = true }: { onHome?: boolean }) {
  const anchor = (id: string) => (onHome ? `#${id}` : `/${id === 'top' ? '' : `#${id}`}`)
  const year = new Date().getFullYear()

  const columns = [
    {
      title: 'Explore',
      items: sections.map((s) => ({ label: s.label, href: anchor(s.id) })),
    },
    {
      title: 'Customers',
      items: [
        { label: 'Create an account', href: links.customerSignup },
        { label: 'Customer login', href: links.login },
      ],
    },
    {
      title: 'Vendors',
      items: [
        { label: 'Register your business', href: links.vendorSignup },
        { label: 'Vendor & staff login', href: links.login },
      ],
    },
    {
      title: 'Legal',
      items: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Photo credits', href: '/credits' },
      ],
    },
  ]

  return (
    <footer className="bg-forest-900 text-cream" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href={anchor('top')} aria-label="Tiffny home" className="inline-block rounded-full">
              <Wordmark inverted />
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-cream/65">{brand.shortDescription}</p>
            {CONTACT_EMAIL && (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mint transition-colors hover:text-cream"
              >
                <Mail aria-hidden className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
            )}
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-mint">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-[0.95rem] text-cream/70 transition-colors hover:text-cream">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-8 text-sm text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Tiffny. All rights reserved.</p>
          <p>{brand.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
