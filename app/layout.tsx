import type { Metadata, Viewport } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import { brand, SITE_URL } from '@/lib/site'
import './globals.css'

// Fonts are downloaded at build time and self-hosted from /_next/static.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['italic'],
  weight: ['500', '600'],
  display: 'swap',
})

const title = 'Tiffny — Smarter everyday tiffin meals for customers and food businesses'
const description =
  'Tiffny connects tiffin customers with home-style food businesses in India. Follow your daily meals, skip before the cut-off and track your wallet — while vendors manage meals, customers, payments and staff in one place.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: '%s · Tiffny' },
  description,
  applicationName: brand.name,
  keywords: [
    'tiffin service',
    'tiffin management software',
    'tiffin subscription',
    'home-style meals',
    'meal subscription India',
    'tiffin vendor app',
    'dabba service',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: brand.name,
    title,
    description,
    locale: 'en_IN',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Tiffny — Good Food. Better Connections. Smarter Meals.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: brand.colors.cream,
  width: 'device-width',
  initialScale: 1,
}

// Organization + WebSite structured data. Deliberately limited to verifiable facts.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: brand.name,
      url: SITE_URL,
      logo: `${SITE_URL}/icons/icon-512.png`,
      description: brand.description,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: brand.name,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-IN',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        {/* Opt in to scroll-reveal before first paint (see globals.css). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-cream"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
