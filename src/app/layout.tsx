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
    template: '%s | Asegúrate',
    default: 'Asegúrate – Blindaje Empresarial en Uruguay',
  },
  description:
    'La primera empresa en Uruguay especializada en blindaje empresarial a través de estructuras aseguradas. Capitales no embargables de hasta USD 1.200.000. Punta del Este.',
  keywords: [
    'seguros empresariales Uruguay',
    'protección patrimonial',
    'capitales no embargables',
    'blindaje empresarial',
    'Punta del Este',
    'seguros Uruguay',
    'estructuras aseguradas',
    'patrimonio empresarial',
    'seguros comercios Uruguay',
  ],
  authors: [{ name: 'Asegúrate' }],
  creator: 'Asegúrate',
  publisher: 'Asegúrate',
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
    siteName: 'Asegúrate',
    title: 'Asegúrate – Blindaje Empresarial en Uruguay',
    description:
      'La primera empresa en Uruguay especializada en blindaje empresarial. Capitales asegurados no embargables de hasta USD 1.200.000.',
    images: [
      {
        url: '/brand/logo/Asegurate_Horizontal_Tagline.png',
        width: 1200,
        height: 630,
        alt: 'Asegúrate – Protección Patrimonial Exclusiva',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asegúrate – Blindaje Empresarial en Uruguay',
    description:
      'La primera empresa en Uruguay especializada en blindaje empresarial. Capitales no embargables hasta USD 1.200.000.',
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
    languages: { 'es-UY': BASE_URL, 'pt-BR': BASE_URL },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Asegúrate',
  description:
    'La primera empresa en Uruguay especializada en blindaje empresarial a través de estructuras aseguradas. Capitales no embargables de hasta USD 1.200.000.',
  url: BASE_URL,
  logo: `${BASE_URL}/brand/logo/Asegurate_Horizontal_Negro.svg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Punta del Este',
    addressRegion: 'Maldonado',
    addressCountry: 'UY',
  },
  areaServed: { '@type': 'Country', name: 'Uruguay' },
  email: 'info@asegurate.com',
  priceRange: '$$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
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
