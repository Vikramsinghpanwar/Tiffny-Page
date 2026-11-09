import { ChefHat, LayoutDashboard, Smartphone, Truck } from 'lucide-react'
import {
  BrowserFrame,
  CustomerHomeScreen,
  DeliveriesScreen,
  KitchenScreen,
  PhoneFrame,
  VendorDashboardScreen,
} from '@/components/Mockups'
import { Accent, SectionHeading } from './SectionHeading'

const roles = [
  { Icon: Smartphone, name: 'Customers', body: 'Meals, skips, wallet and profile — designed for the phone in your pocket.' },
  { Icon: LayoutDashboard, name: 'Vendors', body: 'The full picture of the business: meals, customers, payments, staff and reports.' },
  { Icon: ChefHat, name: 'Kitchen staff', body: 'Today’s preparation list by meal, on-demand requests and tomorrow’s numbers.' },
  { Icon: Truck, name: 'Delivery staff', body: 'Today’s deliveries with progress, one-tap status updates and history.' },
]

export function PlatformSection() {
  return (
    <section id="platform" aria-labelledby="platform-title" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-40 mx-auto h-[38rem] max-w-5xl rounded-full bg-[radial-gradient(closest-side,rgb(159_220_192/0.35),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="platform-title"
          eyebrow="The Tiffny experience"
          title={
            <>
              One platform. <Accent>Every role</Accent> at the table.
            </>
          }
          intro="Customers, vendors and their teams each get a view shaped around what they actually do — all signing in at the same place, on any device with a browser."
        />

        {/* Showcase: desktop dashboard flanked by phones */}
        <div className="relative mt-16 lg:mt-20 xl:pb-32">
          <div className="mx-auto max-w-4xl xl:max-w-[50rem]" data-reveal>
            <BrowserFrame label="Preview of the Tiffny vendor dashboard: meals today, active customers, wallet balance and today’s meals by type">
              <VendorDashboardScreen />
            </BrowserFrame>
          </div>
          <div
            className="pointer-events-none absolute -left-2 top-28 hidden xl:block"
            data-reveal
            style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
          >
            <PhoneFrame size="sm" label="Preview of the kitchen view for chefs" className="rotate-[-5deg]">
              <KitchenScreen />
            </PhoneFrame>
          </div>
          <div
            className="pointer-events-none absolute -right-2 top-14 hidden xl:block"
            data-reveal
            style={{ '--reveal-delay': '220ms' } as React.CSSProperties}
          >
            <PhoneFrame size="sm" label="Preview of the deliveries view for delivery staff" className="rotate-[5deg]">
              <DeliveriesScreen />
            </PhoneFrame>
          </div>
        </div>

        {/* Phones as a swipeable row below xl */}
        <div className="-mx-5 mt-12 xl:hidden">
          <ul
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 [scrollbar-width:none] sm:justify-center [&::-webkit-scrollbar]:hidden"
            aria-label="Mobile views"
          >
            {[
              { title: 'Customer home', el: <CustomerHomeScreen /> },
              { title: 'Kitchen', el: <KitchenScreen /> },
              { title: 'Deliveries', el: <DeliveriesScreen /> },
            ].map(({ title, el }) => (
              <li key={title} className="shrink-0 snap-center">
                <PhoneFrame size="sm" label={`Preview of the Tiffny ${title.toLowerCase()} screen`}>
                  {el}
                </PhoneFrame>
                <p className="mt-4 text-center text-sm font-semibold text-forest">{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-center text-xs text-ink-muted xl:mt-12">
          Interface previews recreated from the live product with sample data.
        </p>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map(({ Icon, name, body }, i) => (
            <li
              key={name}
              data-reveal
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
              className="rounded-[1.6rem] bg-warm-white p-6 shadow-soft ring-1 ring-forest/[0.07] transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-mint">
                <Icon aria-hidden className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-bold text-forest">{name}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
