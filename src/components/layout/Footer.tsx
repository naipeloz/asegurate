const footerLinks = [
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Preguntas Frecuentes', href: '/#faq' },
  { label: 'Contacto', href: '/#contacto' },
  { label: 'Clientes Extranjeros', href: '/clientes-extranjeros' },
]

const contactInfo = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: 'Punta del Este, Uruguay',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    text: 'info@asegurate.com',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.56 3.35a2 2 0 0 1 1.82-2.18H6.4a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z" />
      </svg>
    ),
    text: '+598 XXXX XXXX',
  },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#040C1F', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="inline-flex mb-5">
              <img
                src="/brand/logo/Asegurate_Horizontal_Blanco.svg"
                alt="Asegúrate"
                className="h-8"
              />
            </a>
            <p className="text-sm leading-relaxed max-w-sm text-white/55">
              Respaldamos de forma exclusiva a comercios, empresas y sociedades sobre capitales
              asegurados no embargables de hasta USD 1.200.000.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-[#C6A23A]">Enlaces</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
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
            <h3 className="font-semibold text-base mb-4 text-[#C6A23A]">Contacto</h3>
            <ul className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-white/55">
                  <span className="shrink-0">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">© 2026 Asegúrate. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs transition-colors text-white/35 hover:text-[#C6A23A]">
              Política de Privacidad
            </a>
            <a href="#" className="text-xs transition-colors text-white/35 hover:text-[#C6A23A]">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
