import type { Metadata } from 'next'
import { Montserrat, Mukta } from 'next/font/google'
import { Providers } from '@/components/Providers'
import './globals.css'

// Montserrat → Titulares y destacados (headlines)
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

// Mukta → Logo y cuerpos de texto (body / logo)
const mukta = Mukta({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const BASE_URL = 'https://asegurate.uy'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: 'Asegurate | %s ',
    default: 'Asegurate – Respaldo empresarial y crecimiento patrimonial"',
  },
  description:
    'Especialistas en respaldo patrimonial estratégica para dueños de empresas, sociedades, comercios y profesionales independientes en Uruguay. Estructuras sólidas, confidenciales y a medida.',
  keywords: [
    'protección patrimonial Uruguay',
    'seguros empresariales',
    'capitales no embargables',
    'blindaje empresarial',
    'retiro jubilatorio independientes',
    'Punta del Este',
    'seguros Uruguay',
    'estructuras aseguradas',
    'patrimonio empresarial',
    'continuidad operativa comercios',
  ],
  authors: [{ name: 'Asegurate' }],
  creator: 'Asegurate',
  publisher: 'Asegurate',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_UY',
    url: BASE_URL,
    siteName: 'Asegurate',
    title: 'Asegurate – Respaldo empresarial y crecimiento patrimonial"',
    description:
      'Respaldo patrimonial para dueños de empresas, sociedades, comercios y profesionales independientes. Anticipamos riesgos con estructuras sólidas y sostenibles.',
    images: [
      {
        url: '/brand/logo/Asegurate_Horizontal_Tagline.png',
        width: 1200,
        height: 630,
        alt: 'Asegurate – Respaldo empresarial y crecimiento patrimonial"',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asegurate – Respaldo empresarial y crecimiento patrimonial"',
    description:
      'Respaldo patrimonial para empresas, comercios y profesionales independientes. Estructuras sólidas en Uruguay.',
    images: ['/brand/logo/Asegurate_Horizontal_Tagline.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: { 'es-UY': BASE_URL, 'pt-BR': BASE_URL, 'en-US': BASE_URL },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Asegurate',
  description:
    'Especialistas en respaldo patrimonial estratégica para dueños de empresas, sociedades, comercios y profesionales independientes en Uruguay.',
  url: BASE_URL,
  logo: `${BASE_URL}/brand/logo/Asegurate_Horizontal_Negro.svg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Franklin Delano Roosevelt 61',
    addressLocality: 'Punta del Este',
    addressRegion: 'Maldonado',
    addressCountry: 'UY',
  },
  areaServed: { '@type': 'Country', name: 'Uruguay' },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contacto@somosasegurate.com',
    telephone: '+59893300617',
    contactType: 'customer service',
  },
  priceRange: '$$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '12:00',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${mukta.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
