import { CalendarCheck2, Check, Sun, Wallet } from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import { Photo } from '@/components/Photo'
import { photos } from '@/lib/photos'
import { links } from '@/lib/site'

function delay(ms: number) {
  return { '--enter-delay': `${ms}ms` } as React.CSSProperties
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="grain relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36">
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(closest-side,rgb(159_220_192/0.55),transparent)]" />
        <div className="absolute -left-48 top-1/2 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgb(241_234_219/0.9),transparent)]" />
        <div className="dot-grid absolute left-0 top-24 h-64 w-64 [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="lg:col-span-7">
          <p
            className="enter-rise inline-flex items-center gap-2 rounded-full bg-warm-white/80 py-1.5 pl-1.5 pr-4 text-[0.82rem] font-semibold text-forest shadow-soft ring-1 ring-forest/10 backdrop-blur"
            style={delay(0)}
          >
            <span className="rounded-full bg-mint px-2.5 py-0.5 text-[0.72rem] uppercase tracking-wider text-forest-900">Tiffny</span>
            Everyday tiffin, beautifully organised
          </p>

          <h1
            id="hero-title"
            className="mt-7 text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.045em] text-forest min-[400px]:text-[2.9rem] sm:text-6xl lg:text-[3.55rem] xl:text-[4.05rem]"
          >
            <span className="enter-rise block" style={delay(80)}>
              Good Food.
            </span>
            <span className="enter-rise block" style={delay(180)}>
              Better Connections.
            </span>
            <span className="enter-rise relative inline-block" style={delay(280)}>
              <span className="font-serif font-medium italic tracking-[-0.03em] text-forest-500">Smarter Meals.</span>
              <svg
                aria-hidden
                viewBox="0 0 300 18"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-mint"
              >
                <path d="M3 13 C 70 3, 150 3, 297 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="enter-rise mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl" style={delay(380)}>
            Tiffny brings customers and food businesses together through a smarter, simpler way to discover and manage
            everyday meals.
          </p>

          <div className="enter-rise mt-10 flex flex-col gap-3 sm:flex-row" style={delay(480)}>
            <ButtonLink href={links.customerSignup} arrow>
              Get Started
            </ButtonLink>
            <ButtonLink href="#about-tiffny" variant="secondary">
              Explore Tiffny
            </ButtonLink>
          </div>

          <ul className="enter-rise mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-soft" style={delay(580)}>
            {['Daily meals at a glance', 'Skip before the cut-off', 'Built for tiffin kitchens'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-mint/60 text-forest">
                  <Check aria-hidden className="h-3 w-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual composition */}
        <div className="relative mx-auto w-full max-w-[34rem] lg:col-span-5 lg:max-w-none">
          <div className="relative mx-auto aspect-square w-[84%] sm:w-[78%] lg:ml-auto lg:mr-2 lg:w-[92%]">
            {/* Orbit ring — echoes the Android splash screen */}
            <div
              aria-hidden
              className="enter-pop absolute -inset-[7%] animate-spin-slow rounded-full border-2 border-dashed border-forest/20"
              style={delay(200)}
            >
              <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint ring-4 ring-cream" />
              <span className="absolute bottom-[14%] left-[3%] h-2.5 w-2.5 rounded-full bg-saffron ring-4 ring-cream" />
            </div>
            <div aria-hidden className="absolute -inset-[1%] rounded-full bg-mint/40 blur-2xl" />
            <div className="enter-pop relative h-full w-full overflow-hidden rounded-full shadow-float ring-[10px] ring-warm-white" style={delay(120)}>
              <Photo
                photo={photos.thaliBananaLeaf}
                priority
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 40vw, 80vw"
                className="h-full w-full scale-[1.04] object-cover"
              />
            </div>
          </div>

          {/* Tiffin photo card */}
          <div
            className="enter-pop absolute -bottom-8 left-0 w-[42%] rotate-[-4deg] overflow-hidden rounded-[1.6rem] bg-warm-white p-2 shadow-float ring-1 ring-forest/10 sm:-bottom-6 lg:-left-6"
            style={delay(420)}
          >
            <Photo
              photo={photos.tiffinUnpacked}
              sizes="(min-width: 1024px) 240px, 40vw"
              priority
              className="aspect-[5/4] w-full rounded-[1.15rem] object-cover"
            />
            <p className="px-2 pb-1 pt-2 text-[0.72rem] font-semibold text-forest sm:text-xs">Today&rsquo;s tiffin · Lunch</p>
          </div>

          {/* Floating UI cards (illustrative) */}
          <div
            aria-hidden
            className="enter-pop absolute -left-1 top-[6%] sm:-left-4 lg:-left-10"
            style={delay(560)}
          >
            <div className="flex animate-float items-center gap-3 rounded-2xl bg-warm-white/95 py-2.5 pl-2.5 pr-4 shadow-float ring-1 ring-forest/10 backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff3df] text-saffron">
                <Sun className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[0.8rem] font-bold text-forest">Lunch · 1:00 PM</span>
                <span className="block text-[0.7rem] font-medium text-ink-muted">Skip before 11:00 AM</span>
              </span>
            </div>
          </div>

          <div aria-hidden className="enter-pop absolute -right-1 top-[44%] sm:right-0 lg:-right-4" style={delay(680)}>
            <div className="animate-float-slow rounded-2xl bg-forest p-4 text-cream shadow-float [animation-delay:-3s]">
              <span className="flex items-center gap-2 text-[0.7rem] font-medium text-mint">
                <Wallet className="h-3.5 w-3.5" /> Wallet balance
              </span>
              <span className="mt-1 block text-2xl font-extrabold tracking-tight">₹1,240</span>
              <span className="mt-0.5 block text-[0.68rem] text-cream/70">Meals charged automatically</span>
            </div>
          </div>

          <div aria-hidden className="enter-pop absolute -bottom-3 right-[6%] hidden sm:bottom-2 sm:block" style={delay(800)}>
            <div className="flex animate-float items-center gap-2 rounded-full bg-warm-white/95 py-2 pl-2 pr-4 shadow-float ring-1 ring-forest/10 [animation-delay:-1.5s]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mint text-forest">
                <CalendarCheck2 className="h-3.5 w-3.5" />
              </span>
              <span className="text-[0.75rem] font-semibold text-forest">Join request approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
