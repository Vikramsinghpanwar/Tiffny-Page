import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Photo } from '@/components/Photo'
import { photos } from '@/lib/photos'

export const metadata: Metadata = {
  title: 'Photo credits',
  description: 'Attribution for the photography used on the Tiffny website.',
  alternates: { canonical: '/credits' },
}

export default function CreditsPage() {
  return (
    <>
      <Header onHome={false} />
      <main id="main" className="grain pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h1 className="text-4xl font-extrabold tracking-[-0.035em] text-forest sm:text-5xl">Photo credits</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            The food photography on this site comes from Wikimedia Commons contributors and is used under Creative Commons
            licences. Images were cropped and resized for the web; the cropped versions are shared under the same licence.
          </p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {Object.values(photos).map((p) => (
              <li key={p.base} className="flex gap-4 rounded-2xl bg-warm-white p-4 shadow-soft ring-1 ring-forest/[0.06]">
                <Photo photo={p} sizes="96px" className="h-24 w-24 shrink-0 rounded-xl object-cover" alt="" />
                <div className="min-w-0 text-sm leading-relaxed">
                  <p className="font-bold text-forest">
                    <a href={p.credit.source} className="hover:underline" rel="noopener">
                      {p.credit.title}
                    </a>
                  </p>
                  <p className="text-ink-soft">by {p.credit.author}</p>
                  <p className="text-ink-muted">
                    Licence:{' '}
                    <a href={p.credit.licenseUrl} className="font-semibold text-forest underline decoration-mint underline-offset-2" rel="noopener license">
                      {p.credit.license}
                    </a>{' '}
                    · cropped &amp; resized
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer onHome={false} />
    </>
  )
}
