'use client'

import { useLanguage } from '@/context/LanguageContext'

const content = {
  es: {
    description: 'Respaldamos de forma exclusiva a comercios, empresas y sociedades sobre capitales asegurados no embargables de hasta USD 1.200.000.',
    linksTitle: 'Enlaces',
    links: [
      { label: 'Inicio', href: '/#inicio' },
      { label: 'Nosotros', href: '/#nosotros' },
      { label: 'Servicios', href: '/#servicios' },
      { label: 'Clientes Extranjeros', href: '/clientes-extranjeros' },
      { label: 'Preguntas Frecuentes', href: '/#faq' },
      { label: 'Contacto', href: '/#contacto' },
    ],
    contactTitle: 'Contacto',
    contactInfo: [
      'Punta del Este, Uruguay',
      'contacto@somosasegurate.com',
      '+598 94 022 035',
    ],
    rights: '© 2026 Asegurate. Todos los derechos reservados.',
    privacy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
  },
  pt: {
    description: 'Asseguramos de forma exclusiva comércios, empresas e sociedades sobre capitais segurados impenhoráveis de até USD 1.200.000.',
    linksTitle: 'Links',
    links: [
      { label: 'Início', href: '/#inicio' },
      { label: 'Sobre Nós', href: '/#nosotros' },
      { label: 'Serviços', href: '/#servicios' },
      { label: 'Clientes Estrangeiros', href: '/clientes-extranjeros' },
      { label: 'Perguntas Frequentes', href: '/#faq' },
      { label: 'Contato', href: '/#contacto' },
    ],
    contactTitle: 'Contato',
    contactInfo: [
      'Av. Franklin Delano Roosevelt 61, Punta del Este, Departamento de Maldonado, Uruguai',
      'contacto@somosasegurate.com',
      '+598 94 022 035',
    ],
    rights: '© 2026 Asegurate. Todos os direitos reservados.',
    privacy: 'Política de Privacidade',
    terms: 'Termos e Condições',
  },
  en: {
    description: 'We exclusively back businesses, companies and corporations on non-seizable insured capital up to USD 1,200,000.',
    linksTitle: 'Links',
    links: [
      { label: 'Home', href: '/#inicio' },
      { label: 'About Us', href: '/#nosotros' },
      { label: 'Services', href: '/#servicios' },
      { label: 'International Clients', href: '/clientes-extranjeros' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/#contacto' },
    ],
    contactTitle: 'Contact',
    contactInfo: [
      'Av. Franklin Delano Roosevelt 61, Punta del Este, Departamento de Maldonado, Uruguay',
      'contacto@somosasegurate.com',
      '+598 94 022 035',
    ],
    rights: '© 2026 Asegurate. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  },
}

const icons = [
  (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.56 3.35a2 2 0 0 1 1.82-2.18H6.4a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z" />
    </svg>
  ),
]

export default function Footer() {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <footer style={{ backgroundColor: '#040C1F', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="inline-flex mb-5">
              <img
                src="/brand/logo/Asegurate_Horizontal.svg"
                alt="Asegurate"
                className="h-16"
              />
            </a>
            <p className="text-sm leading-relaxed max-w-sm text-white/55">
              {t.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-[#C6A23A]">{t.linksTitle}</h3>
            <ul className="flex flex-col gap-2">
              {t.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors text-white/55 hover:text-[#C6A23A]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-[#C6A23A]">{t.contactTitle}</h3>
            <ul className="flex flex-col gap-3">
              {t.contactInfo.map((text, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white/55">
                  <span className="shrink-0">{icons[idx]}</span>
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">{t.rights}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs transition-colors text-white/35 hover:text-[#C6A23A]">
              {t.privacy}
            </a>
            <a href="#" className="text-xs transition-colors text-white/35 hover:text-[#C6A23A]">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
