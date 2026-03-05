import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ClientesExtranjerosContent from './ClientesExtranjerosContent'

export const metadata: Metadata = {
  title: 'Empresarios Extranjeros',
  description:
    'Respaldo patrimonial internacional para empresarios extranjeros. Estructuras legales en Uruguay con máxima confidencialidad. Punta del Este, Uruguay.',
}

export default function ClientesExtranjerosPage() {
  return (
    <>
      <Navbar />
      <ClientesExtranjerosContent />
      <Footer />
    </>
  )
}
