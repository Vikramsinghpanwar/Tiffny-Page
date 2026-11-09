import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CONTACT_EMAIL } from '@/lib/site'

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <Header onHome={false} />
      <main id="main" className="grain pb-24 pt-32 sm:pt-40">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <header className="border-b border-line pb-8">
            <h1 className="text-4xl font-extrabold tracking-[-0.035em] text-forest sm:text-5xl">{title}</h1>
            <p className="mt-3 text-sm text-ink-muted">Last updated: {updated}</p>
          </header>
          <div className="legal mt-10 space-y-5 text-[1.02rem] leading-relaxed text-ink-soft [&_a]:font-semibold [&_a]:text-forest [&_a]:underline [&_a]:decoration-mint [&_a]:decoration-2 [&_a]:underline-offset-4 [&_h2]:pt-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-forest [&_li]:pl-1 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
            <h2>Contact</h2>
            {CONTACT_EMAIL ? (
              <p>
                Questions about this page can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            ) : (
              <p>
                If you use Tiffny through a food business, you can also reach out to that business directly about your
                meals, wallet or account details.
              </p>
            )}
          </div>
        </article>
      </main>
      <Footer onHome={false} />
    </>
  )
}
