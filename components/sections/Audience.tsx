import {
  BellRing,
  CalendarDays,
  CalendarOff,
  ChefHat,
  FileSpreadsheet,
  MapPin,
  MessageCircle,
  SlidersHorizontal,
  Undo2,
  Users,
  Wallet,
  WalletCards,
} from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import { HowItWorks } from '@/components/HowItWorks'
import { CustomerHomeScreen, PhoneFrame } from '@/components/Mockups'
import { Photo } from '@/components/Photo'
import { photos } from '@/lib/photos'
import { links } from '@/lib/site'
import { Accent, SectionHeading } from './SectionHeading'

/* ------------------------------------------------------------ How it works */

export function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="relative overflow-hidden bg-beige/55 py-24 sm:py-32">
      <div aria-hidden className="dot-grid absolute inset-x-0 top-0 h-72 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          title={
            <>
              Three simple steps, <Accent>whichever side</Accent>{' '}you’re on.
            </>
          }
          intro="Tiffny keeps the customer and the kitchen on the same page — from the first join request to the last delivery of the day."
        />
        <div className="mt-12">
          <HowItWorks />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- Customers */

const customerFeatures = [
  { Icon: CalendarDays, title: 'Today and the week ahead', body: 'Breakfast, lunch and dinner with serving times, plus a calendar and full meal history.' },
  { Icon: Undo2, title: 'Skip before the cut-off', body: 'Skip a meal before its deadline and you aren’t charged. Changed your mind? Undo it.' },
  { Icon: Wallet, title: 'A wallet you can read', body: 'Your balance, payments and every meal charge in one clear activity list.' },
  { Icon: MessageCircle, title: 'Your vendor, one tap away', body: 'Message your tiffin provider on WhatsApp and keep your address and notes up to date.' },
]

export function CustomersSection() {
  return (
    <section id="customers" aria-labelledby="customers-title" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <div className="relative order-2 mx-auto min-h-[560px] w-full max-w-xl sm:min-h-[620px] lg:order-1 lg:min-h-0" data-reveal>
          <div className="relative ml-auto w-[82%] overflow-hidden rounded-[2.5rem] shadow-card sm:w-[78%]">
            <Photo
              photo={photos.dalRotiSabzi}
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="aspect-[4/5] w-full object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-forest/30 via-transparent to-transparent" />
          </div>
          <div aria-hidden className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-mint/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 sm:left-2 lg:-bottom-10">
            <PhoneFrame
              size="sm"
              label="Preview of the Tiffny customer home screen: today’s meals, wallet balance and a WhatsApp link to the vendor"
            >
              <CustomerHomeScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            id="customers-title"
            eyebrow="For customers"
            title={
              <>
                Everyday meals, <Accent>made simpler.</Accent>
              </>
            }
            intro="Whether you get a tiffin every day or order meals on demand, Tiffny shows you exactly what’s coming, what you’ve paid and what’s been charged — no more guessing or chasing messages."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {customerFeatures.map(({ Icon, title, body }, i) => (
              <li key={title} data-reveal style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-pale text-forest ring-1 ring-mint">
                  <Icon aria-hidden className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-bold text-forest">{title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">{body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center" data-reveal>
            <ButtonLink href={links.customerSignup} arrow>
              Explore as a Customer
            </ButtonLink>
            <ButtonLink href={links.login} variant="ghost">
              Already with a vendor? Log in
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ Vendors */

const vendorFeatures = [
  { Icon: SlidersHorizontal, title: 'Organised food offerings', body: 'Choose the meals you offer, with prices, serving times and skip cut-offs for each.' },
  { Icon: Users, title: 'Customers & join requests', body: 'Add customers yourself or approve requests. Serve regular subscribers and on-demand orders.' },
  { Icon: WalletCards, title: 'Wallets & automatic billing', body: 'Meals are billed from prepaid customer wallets on schedule. Record payments and spot dues fast.' },
  { Icon: ChefHat, title: 'Logins for your team', body: 'Chefs see what to cook today; delivery staff see their route and mark meals delivered.' },
  { Icon: CalendarOff, title: 'Holidays without the hassle', body: 'Pause meals and billing on chosen dates — and resume without deleting anything.' },
  { Icon: FileSpreadsheet, title: 'Reports you can download', body: 'Export customers and balances, outstanding dues and holidays as Excel files.' },
]

export function VendorsSection() {
  return (
    <section id="vendors" aria-labelledby="vendors-title" className="relative overflow-hidden bg-forest py-24 text-cream sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgb(159_220_192/0.18),transparent)]" />
        <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgb(47_108_82/0.6),transparent)]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="vendor-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M44 0H0V44" fill="none" stroke="#FAF7F0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vendor-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              align="left"
              tone="dark"
              id="vendors-title"
              eyebrow="For food vendors"
              title={
                <>
                  Your food business deserves <Accent tone="dark">smarter tools.</Accent>
                </>
              }
              intro="Run your tiffin service from one calm dashboard: know exactly what to cook, who’s skipping, who has paid and what’s due — every single day."
            />
            <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal>
              <ButtonLink href={links.vendorSignup} variant="mint" arrow>
                Join as a Vendor
              </ButtonLink>
              <ButtonLink href={links.login} variant="outline-light">
                Vendor login
              </ButtonLink>
            </div>
          </div>

          <div className="relative lg:col-span-6" data-reveal>
            <div className="overflow-hidden rounded-[2.25rem] ring-1 ring-cream/10">
              <Photo
                photo={photos.tiffinCarriersRow}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="aspect-[16/11] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-3 sm:-bottom-8 sm:left-auto sm:right-6 sm:w-80" aria-hidden>
              <div className="rounded-2xl bg-warm-white p-4 text-forest shadow-float">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-ink-muted">Meals today</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-bold">
                  <BellRing className="h-4 w-4 text-saffron" /> What to cook
                </p>
              </div>
              <div className="rounded-2xl bg-mint p-4 text-forest-900 shadow-float">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-forest/70">Deliveries</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-bold">
                  <MapPin className="h-4 w-4" /> On the way
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-24 grid gap-px overflow-hidden rounded-[2rem] bg-cream/10 ring-1 ring-cream/10 sm:grid-cols-2 lg:grid-cols-3">
          {vendorFeatures.map(({ Icon, title, body }, i) => (
            <li
              key={title}
              data-reveal
              style={{ '--reveal-delay': `${(i % 3) * 80}ms` } as React.CSSProperties}
              className="group bg-forest p-7 transition-colors duration-500 hover:bg-forest-700 sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/[0.08] text-mint ring-1 ring-cream/10 transition-colors duration-500 group-hover:bg-mint group-hover:text-forest-900">
                <Icon aria-hidden className="h-5.5 w-5.5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{title}</h3>
              <p className="mt-2 leading-relaxed text-cream/70">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
