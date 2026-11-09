// Single source of truth for URLs and brand facts used across the landing site.
//
// Every value is resolved at BUILD time (static export), so changing one means
// rebuilding. Only NEXT_PUBLIC_* values are read; nothing here is secret.

function cleanUrl(value: string | undefined, fallback: string): string {
  const url = (value ?? '').trim() || fallback
  return url.replace(/\/+$/, '')
}

/** Where this landing site is served (canonical URLs, sitemap, Open Graph). */
export const SITE_URL = cleanUrl(process.env.NEXT_PUBLIC_SITE_URL, 'https://www.tiffny.online')

/** The Tiffny web app (all roles sign in here). */
export const APP_URL = cleanUrl(process.env.NEXT_PUBLIC_APP_URL, 'https://tiffny.online')

/**
 * Public contact address. Optional: when unset, no contact line is rendered
 * anywhere (no unverified or placeholder details are ever shown).
 */
export const CONTACT_EMAIL = (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '').trim()

/** Entry points into the existing app. These routes exist in tiffin-next today. */
export const links = {
  login: `${APP_URL}/login`,
  customerSignup: `${APP_URL}/signup`,
  vendorSignup: `${APP_URL}/vendor-auth/signup`,
} as const

export const brand = {
  name: 'Tiffny',
  tagline: 'Good Food. Better Connections. Smarter Meals.',
  description:
    'Tiffny brings tiffin customers and home-style food businesses together — customers follow their daily meals and wallet, while vendors manage meals, customers, payments and staff in one place.',
  shortDescription:
    'A simpler way for tiffin customers and food businesses to manage everyday meals.',
  colors: { forest: '#1F4D3A', cream: '#FAF7F0', mint: '#9FDCC0' },
} as const

/** In-page anchors used by the navigation and footer. */
export const sections = [
  { id: 'top', label: 'Home' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'customers', label: 'For Customers' },
  { id: 'vendors', label: 'For Vendors' },
  { id: 'about', label: 'About Us' },
] as const
