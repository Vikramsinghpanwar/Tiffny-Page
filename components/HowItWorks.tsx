'use client'

import { useRef, useState } from 'react'
import { CalendarCheck2, ClipboardList, Search, Settings2, Store, UsersRound } from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import { links } from '@/lib/site'

// Steps are traced to the existing app:
//  customer — app/customer/join-vendor, app/customer/dashboard + SkipMealSheet + MealRequests,
//             app/customer/meals, app/customer/payments
//  vendor   — app/vendor/onboarding + meal-config, app/vendor/customers (+ join requests),
//             app/vendor/meals, payments, staff, holidays, reports
const flows = {
  customers: {
    label: 'For customers',
    cta: { label: 'Create a customer account', href: links.customerSignup },
    steps: [
      {
        Icon: Search,
        title: 'Find your tiffin provider',
        body: 'Search for your vendor on Tiffny and send a join request — or get added directly by the kitchen you already eat from.',
      },
      {
        Icon: CalendarCheck2,
        title: 'Choose what suits you',
        body: 'See breakfast, lunch and dinner with serving times. Skip a meal before the cut-off, or request only the meals you want if you order on demand.',
      },
      {
        Icon: UsersRound,
        title: 'Stay in sync',
        body: 'Follow your meal calendar, wallet balance and payments, and message your vendor on WhatsApp whenever you need to.',
      },
    ],
  },
  vendors: {
    label: 'For vendors',
    cta: { label: 'Register your business', href: links.vendorSignup },
    steps: [
      {
        Icon: Store,
        title: 'Set up your food business',
        body: 'Add your business profile, then choose the meals you offer with their prices, serving times and skip cut-offs.',
      },
      {
        Icon: ClipboardList,
        title: 'Manage offerings & orders',
        body: 'Add customers or approve join requests, see exactly what to cook each day, and let meals bill from customer wallets automatically.',
      },
      {
        Icon: Settings2,
        title: 'Organise daily operations',
        body: 'Give chefs and delivery staff their own logins, record payments, pause service for holidays and export reports.',
      },
    ],
  },
} as const

type FlowKey = keyof typeof flows
const order: FlowKey[] = ['customers', 'vendors']

export function HowItWorks() {
  const [tab, setTab] = useState<FlowKey>('customers')
  const tabRefs = useRef<Record<FlowKey, HTMLButtonElement | null>>({ customers: null, vendors: null })

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'Home' && e.key !== 'End') return
    e.preventDefault()
    const i = order.indexOf(tab)
    const next =
      e.key === 'Home' ? order[0] : e.key === 'End' ? order[order.length - 1] : order[(i + (e.key === 'ArrowRight' ? 1 : -1) + order.length) % order.length]
    setTab(next)
    tabRefs.current[next]?.focus()
  }

  const flow = flows[tab]

  return (
    <div>
      <div className="flex justify-center" data-reveal>
        <div
          role="tablist"
          aria-label="Choose who you are"
          onKeyDown={onKeyDown}
          className="relative inline-grid grid-cols-2 rounded-full bg-warm-white p-1.5 shadow-soft ring-1 ring-forest/10"
        >
          <span
            aria-hidden
            className="absolute inset-y-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-full bg-forest transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{ transform: tab === 'vendors' ? 'translateX(100%)' : 'none' }}
          />
          {order.map((key) => (
            <button
              key={key}
              ref={(el) => {
                tabRefs.current[key] = el
              }}
              role="tab"
              id={`tab-${key}`}
              aria-selected={tab === key}
              aria-controls={`panel-${key}`}
              tabIndex={tab === key ? 0 : -1}
              onClick={() => setTab(key)}
              className={`relative z-10 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 sm:px-8 ${
                tab === key ? 'text-cream' : 'text-forest hover:text-forest-700'
              }`}
            >
              {flows[key].label}
            </button>
          ))}
        </div>
      </div>

      <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="mt-12 sm:mt-14">
        <ol key={tab} className="relative grid gap-5 md:grid-cols-3 md:gap-6">
          {/* Connector line on desktop */}
          <span
            aria-hidden
            className="absolute left-[16%] right-[16%] top-[3.25rem] hidden border-t-2 border-dashed border-forest/15 md:block"
          />
          {flow.steps.map(({ Icon, title, body }, i) => (
            <li
              key={title}
              className="enter-rise group relative rounded-[1.75rem] bg-warm-white p-7 shadow-card ring-1 ring-forest/[0.07] transition-transform duration-500 hover:-translate-y-1"
              style={{ '--enter-delay': `${i * 110}ms` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-pale text-forest ring-1 ring-mint transition-colors duration-300 group-hover:bg-mint">
                  <Icon aria-hidden className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <span className="font-serif text-5xl italic leading-none text-forest/15" aria-hidden>
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-forest">
                <span className="sr-only">Step {i + 1}: </span>
                {title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-ink-soft">{body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex justify-center">
          <ButtonLink href={flow.cta.href} variant="secondary" arrow>
            {flow.cta.label}
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
