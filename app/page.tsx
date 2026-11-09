import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { RevealObserver } from '@/components/RevealObserver'
import { AboutSection, FinalCta } from '@/components/sections/About'
import { CustomersSection, HowItWorksSection, VendorsSection } from '@/components/sections/Audience'
import { Hero } from '@/components/sections/Hero'
import { Intro } from '@/components/sections/Intro'
import { PlatformSection } from '@/components/sections/Platform'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <HowItWorksSection />
        <CustomersSection />
        <VendorsSection />
        <PlatformSection />
        <AboutSection />
        <FinalCta />
      </main>
      <Footer />
      <RevealObserver />
    </>
  )
}
