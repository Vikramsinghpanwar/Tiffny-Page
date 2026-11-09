import { Eye, HeartHandshake, Leaf } from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import { TiffnyGlyph } from '@/components/Logo'
import { Photo } from '@/components/Photo'
import { photos } from '@/lib/photos'
import { links } from '@/lib/site'
import { Accent, SectionHeading } from './SectionHeading'

// Brand storytelling only — no customer counts, ratings or testimonials.
const values = [
  {
    Icon: Eye,
    title: 'Clear for everyone',
    body: 'Customers see what they’ll get and what they’re charged. Vendors see what to cook and what’s due. No surprises on either side.',
  },
  {
    Icon: HeartHandshake,
    title: 'Fair by design',
    body: 'Skip before the cut-off and you aren’t billed. Pause for a holiday and nobody is charged. Simple rules, applied the same way every day.',
  },
  {
    Icon: Leaf,
    title: 'Made for real kitchens',
    body: 'Built around how tiffin services actually run — daily meals, prepaid wallets, small teams and a lot of WhatsApp.',
  },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-beige/55 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="relative mx-auto w-full max-w-md lg:col-span-5" data-reveal>
            <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-[2.5rem] shadow-card ring-8 ring-warm-white">
              <Photo
                photo={photos.tiffinCarrier}
                sizes="(min-width: 1024px) 34vw, 90vw"
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl bg-forest py-3 pl-3 pr-5 text-cream shadow-float sm:-right-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-forest">
                <TiffnyGlyph className="h-7 w-auto" />
              </span>
              <span className="text-sm font-semibold leading-tight">
                Our mark is the
                <br />
                humble tiffin carrier.
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              align="left"
              id="about-title"
              eyebrow="About Tiffny"
              title={
                <>
                  Built to make everyday food experiences <Accent>better.</Accent>
                </>
              }
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft" data-reveal>
              <p>
                The stacked steel tiffin has carried home-cooked food across India for generations. It works because of
                trust — between the people who cook and the people who eat, every single day.
              </p>
              <p>
                Tiffny exists to protect that trust as tiffin services grow. We replace scattered notebooks, spreadsheets
                and reminder calls with one shared, honest record of meals, skips and payments — so kitchens can focus on
                cooking and customers can simply enjoy their food.
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-20 grid gap-5 md:grid-cols-3">
          {values.map(({ Icon, title, body }, i) => (
            <li
              key={title}
              data-reveal
              style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
              className="rounded-[1.75rem] bg-warm-white p-7 shadow-soft ring-1 ring-forest/[0.06]"
            >
              <Icon aria-hidden className="h-7 w-7 text-forest-500" strokeWidth={1.6} />
              <h3 className="mt-5 text-lg font-bold tracking-tight text-forest">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="px-4 py-20 sm:px-8 sm:py-28">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-forest px-6 py-16 text-center sm:px-12 sm:py-24 lg:text-left"
        data-reveal
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgb(159_220_192/0.25),transparent)]" />
          <div className="absolute -right-24 -top-24 hidden h-[34rem] w-[34rem] rounded-full border-2 border-dashed border-mint/25 lg:block" />
        </div>
        <div className="relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="cta-title" className="text-[2.15rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-cream sm:text-5xl">
              Ready to experience a <Accent tone="dark">smarter way</Accent> to manage meals?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/75 lg:mx-0">
              Discover Tiffny and take the next step towards a simpler food experience.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <ButtonLink href={links.customerSignup} variant="mint" arrow>
                Get Started
              </ButtonLink>
              <ButtonLink href={links.vendorSignup} variant="outline-light">
                Become a Vendor
              </ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-sm lg:col-span-5 lg:block">
            <div className="relative aspect-square overflow-hidden rounded-full ring-[12px] ring-cream/10">
              <Photo photo={photos.thaliOverhead} sizes="380px" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
