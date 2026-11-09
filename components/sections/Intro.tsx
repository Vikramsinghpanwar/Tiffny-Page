import { Handshake, LayoutDashboard, UtensilsCrossed } from 'lucide-react'
import { Photo } from '@/components/Photo'
import { photos } from '@/lib/photos'
import { Accent, SectionHeading } from './SectionHeading'

// Each highlight describes functionality that exists in the app today.
const highlights = [
  {
    Icon: UtensilsCrossed,
    title: 'Discover meals',
    body: 'See what your tiffin provider is serving — breakfast, lunch and dinner with serving times and prices — today and for the week ahead.',
    card: 'bg-mint-pale ring-mint/70',
    icon: 'bg-warm-white text-forest',
  },
  {
    Icon: Handshake,
    title: 'Connect with vendors',
    body: 'Find your food business on Tiffny and send a join request, or be added by them directly. A WhatsApp message is always one tap away.',
    card: 'bg-beige ring-beige-deep',
    icon: 'bg-warm-white text-forest',
  },
  {
    Icon: LayoutDashboard,
    title: 'Manage operations',
    body: 'Vendors run meals, customers, wallets and holidays from one dashboard, while chefs and delivery staff get their own focused views.',
    card: 'bg-forest text-cream ring-forest',
    icon: 'bg-mint text-forest-900',
  },
]

export function Intro() {
  return (
    <section id="about-tiffny" aria-labelledby="intro-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            id="intro-title"
            eyebrow="Introducing Tiffny"
            title={
              <>
                More than just <Accent>a meal.</Accent>
              </>
            }
          />
          <p className="text-lg leading-relaxed text-ink-soft lg:pb-2" data-reveal>
            Every day, home-style meals travel from tiffin kitchens to desks and doorsteps across India. Tiffny
            gives both sides of that relationship a shared, simple place to manage it — so customers always know what&rsquo;s
            coming, and food businesses spend less time on spreadsheets and phone calls.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <figure
            className="group relative overflow-hidden rounded-[2rem] bg-beige shadow-card lg:col-span-5 lg:row-span-3"
            data-reveal
          >
            <Photo
              photo={photos.vegMeal}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-72 w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04] sm:h-96 lg:h-full"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-900/75 via-forest-900/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-7 text-cream sm:p-8">
              <p className="font-serif text-2xl italic leading-snug sm:text-3xl">
                &ldquo;Ghar ka khana,&rdquo; organised.
              </p>
              <p className="mt-2 max-w-sm text-sm text-cream/80">
                Tiffny is built around the everyday tiffin — the dal, roti and sabzi people rely on.
              </p>
            </figcaption>
          </figure>

          {highlights.map(({ Icon, title, body, card, icon }, i) => (
            <article
              key={title}
              data-reveal
              style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
              className={`group flex flex-col gap-5 rounded-[2rem] p-7 ring-1 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-card sm:flex-row sm:items-start sm:p-8 lg:col-span-7 ${card}`}
            >
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-soft transition-transform duration-500 group-hover:rotate-[-6deg] ${icon}`}
              >
                <Icon aria-hidden className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className={`text-xl font-bold tracking-tight ${i === 2 ? 'text-cream' : 'text-forest'}`}>{title}</h3>
                <p className={`mt-2 leading-relaxed ${i === 2 ? 'text-cream/80' : 'text-ink-soft'}`}>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
