import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSlider from '@/components/HeroSlider'
import HomeContent from '@/components/HomeContent'

export const metadata: Metadata = {
  title: 'Blindaje Empresarial en Uruguay',
  description:
    'Respaldo patrimonial para dueños de empresas, sociedades, comercios y profesionales independientes. Anticipamos riesgos con estructuras sólidas y sostenibles.',
  alternates: { canonical: 'https://somosasegurate.com' },
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
