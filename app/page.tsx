import { Header } from '@/components/header'
import { ProfileGrid } from '@/components/profile-grid'
import { InfoSection } from '@/components/info-section'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import HeroSection from '@/components/hero-section'
import { ProfileGridActive } from '@/components/profile-grid-Active'
import ClientAgeVerification from './client-age-verification'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProfileGrid />
      <ProfileGridActive/>
      
      <ClientAgeVerification>
        <InfoSection />
        <FAQSection />
        <Footer />
      </ClientAgeVerification>
    </main>
  )
}
