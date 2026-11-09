import type { Metadata } from 'next'
import { ButtonLink } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TiffnyGlyph } from '@/components/Logo'
import { links } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <>
      <Header onHome={false} />
      <main id="main" className="grain flex min-h-[80vh] items-center px-5 pb-20 pt-32">
        <div className="mx-auto max-w-xl text-center">
          <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-mint-pale text-forest ring-1 ring-mint">
            <TiffnyGlyph className="h-11 w-auto" />
          </span>
          <h1 className="mt-8 text-4xl font-extrabold tracking-[-0.035em] text-forest sm:text-5xl">This tiffin went astray.</h1>
          <p className="mt-4 text-lg text-ink-soft">
            The page you&rsquo;re looking for doesn&rsquo;t exist. Looking for your account? Sign in to the Tiffny app.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" arrow>
              Back to home
            </ButtonLink>
            <ButtonLink href={links.login} variant="secondary">
              Login
            </ButtonLink>
          </div>
        </div>
      </main>
      <Footer onHome={false} />
    </>
  )
}
