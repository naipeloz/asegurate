import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSlider from '@/components/HeroSlider'
import HomeContent from '@/components/HomeContent'

export const metadata: Metadata = {
  title: 'Asegúrate – Blindaje Empresarial en Uruguay',
  description:
    'La primera empresa en Uruguay especializada en blindaje empresarial a través de estructuras aseguradas. Capitales no embargables de hasta USD 1.200.000. Punta del Este.',
  alternates: { canonical: 'https://asegurate.uy' },
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero — pt-20 offsets the fixed navbar so slider starts right below it */}
      <section id="inicio" className="pt-20">
        <HeroSlider />
      </section>

      {/* All bilingual home sections (Nosotros, Servicios, FAQ, Contacto, CTA) */}
      <HomeContent />

      <Footer />
    </>
  )
}
