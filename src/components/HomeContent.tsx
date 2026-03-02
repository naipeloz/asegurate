'use client'

import { useLanguage } from '@/context/LanguageContext'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'

// ─── Brand assets ─────────────────────────────────────────────────────────────
const ICONS = {
  Seguridad:       '/brand/icons/Seguridad.svg',
  Exclusividad:    '/brand/icons/Exclusividad.svg',
  Juridico:        '/brand/icons/Juridico.svg',
  Innovacion:      '/brand/icons/Innovacion.svg',
  Empresa:         '/brand/icons/Empresa.svg',
  Rentabilidad:    '/brand/icons/Rentabilidad.svg',
  Contrato:        '/brand/icons/Contrato.svg',
  Confidencialidad:'/brand/icons/Confidencialidad.svg',
}

// CSS filter: converts black SVG → brand gold #C6A23A
const GOLD_FILTER = 'brightness(0) saturate(100%) invert(68%) sepia(83%) saturate(350%) hue-rotate(3deg) brightness(100%) contrast(88%)'

const CALENDLY_URL = 'https://calendly.com/asegurate'

// ─── Inline SVG icons ─────────────────────────────────────────────────────────
function CalendarIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
function MapPinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.56 3.35a2 2 0 0 1 1.82-2.18H6.4a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6 6l.76-.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z" />
    </svg>
  )
}

// ─── Content ─────────────────────────────────────────────────────────────────
const content = {
  es: {
    nosotros: {
      h2: 'Nosotros',
      body: 'Asegúrate es pionera en ofrecer seguros exclusivos para comercios, empresas y sociedades, garantizando la protección de capitales asegurados no embargables. Nuestra misión es brindar solidez jurídica, confidencialidad absoluta y una visión de largo plazo para nuestros clientes más exigentes.',
      misionH3: 'Nuestra Misión',
      misionBody: 'Ser el socio estratégico de confianza para empresas y sociedades que buscan proteger su patrimonio con la máxima seguridad jurídica. Nos comprometemos a ofrecer soluciones personalizadas, confidenciales y de largo plazo, respaldadas por nuestra autoridad en el mercado y nuestra inquebrantable solidez institucional.',
    },
    features: [
      { icon: ICONS.Seguridad,    title: 'Protección Estratégica',  desc: 'Soluciones diseñadas para proteger su patrimonio empresarial con máxima seguridad jurídica.' },
      { icon: ICONS.Exclusividad, title: 'Exclusividad Insondable', desc: 'Servicio personalizado y confidencial para un selecto grupo de clientes.' },
      { icon: ICONS.Juridico,     title: 'Solidez Jurídica',        desc: 'Respaldados por marcos legales robustos que garantizan la intangibilidad de sus activos.' },
      { icon: ICONS.Innovacion,   title: 'Visión de Largo Plazo',   desc: 'Estrategias de protección pensadas para el futuro de su empresa.' },
    ],
    servicios: {
      h2: 'Servicios',
      subtitle: 'Soluciones de Protección Patrimonial',
      coverageH3: 'Cobertura Exclusiva',
      coveragePoints: [
        'Capitales asegurados no embargables de hasta $USD',
        'Protección jurídica especializada para comercios, empresas y sociedades',
        'Confidencialidad absoluta en todas las operaciones',
        'Atención personalizada en Punta del Este y zonas aledañas',
      ],
    },
    services: [
      { icon: ICONS.Empresa,          title: 'Seguros Empresariales',    desc: 'Coberturas exclusivas diseñadas para empresas y sociedades con necesidades especiales de protección.' },
      { icon: ICONS.Rentabilidad,     title: 'Capitales No Embargables', desc: 'Aseguramos capitales de hasta USD 1.200.000 con garantía de no embargo.' },
      { icon: ICONS.Contrato,         title: 'Asesoramiento Estratégico',desc: 'Consultoría personalizada para estructurar la mejor protección para su patrimonio.' },
      { icon: ICONS.Confidencialidad, title: 'Gestión Confidencial',     desc: 'Manejo discreto y profesional de todas sus operaciones y documentación.' },
    ],
    faq: { h2: 'Preguntas Frecuentes' },
    contacto: {
      h2: 'Contacto',
      subtitle: 'Agenda una Consulta Confidencial',
      formH3: 'Formulario de Contacto',
      meetingH3: 'Agenda una Reunión',
      meetingBody: '¿Prefieres hablar directamente con nosotros? Agenda una consulta confidencial en el horario que mejor te convenga.',
      meetingCta: 'Agenda tu consulta',
      infoH3: 'Información de Contacto',
      labels: { location: 'Ubicación', email: 'Email', phone: 'Teléfono', hours: 'Horario' },
    },
    cta: {
      h2: '¿Listo para Proteger su Patrimonio?',
      body: 'Agenda una consulta confidencial con nuestros especialistas y descubre cómo podemos ayudarte.',
      button: 'Agenda tu consulta',
    },
  },

  pt: {
    nosotros: {
      h2: 'Sobre Nós',
      body: 'A Asegurate é pioneira na oferta de seguros exclusivos para comércios, empresas e sociedades, garantindo a proteção de capitais segurados não penhoráveis. Nossa missão é fornecer solidez jurídica, confidencialidade absoluta e uma visão de longo prazo para os nossos clientes mais exigentes.',
      misionH3: 'Nossa Missão',
      misionBody: 'Ser o parceiro estratégico de confiança para empresas e sociedades que buscam proteger seu patrimônio com máxima segurança jurídica. Comprometemo-nos a oferecer soluções personalizadas, confidenciais e de longo prazo, respaldadas pela nossa autoridade no mercado e pela nossa inabalável solidez institucional.',
    },
    features: [
      { icon: ICONS.Seguridad,    title: 'Proteção Estratégica', desc: 'Soluções desenvolvidas para proteger seu patrimônio empresarial com máxima segurança jurídica.' },
      { icon: ICONS.Exclusividad, title: 'Exclusividade',        desc: 'Serviço personalizado e confidencial para um seleto grupo de clientes.' },
      { icon: ICONS.Juridico,     title: 'Solidez Jurídica',     desc: 'Respaldados por marcos legais robustos que garantem a intangibilidade dos seus ativos.' },
      { icon: ICONS.Innovacion,   title: 'Visão de Longo Prazo', desc: 'Estratégias de proteção pensadas para o futuro da sua empresa.' },
    ],
    servicios: {
      h2: 'Serviços',
      subtitle: 'Soluções de Proteção Patrimonial',
      coverageH3: 'Cobertura Exclusiva',
      coveragePoints: [
        'Capitais segurados não penhoráveis de até $USD',
        'Proteção jurídica especializada para comércios, empresas e sociedades',
        'Absoluta confidencialidade em todas as operações',
        'Atendimento personalizado em Punta del Este e arredores',
      ],
    },
    services: [
      { icon: ICONS.Empresa,          title: 'Seguros Empresariais',      desc: 'Coberturas exclusivas desenvolvidas para empresas e sociedades com necessidades especiais de proteção.' },
      { icon: ICONS.Rentabilidad,     title: 'Capitais Não Penhoráveis',  desc: 'Asseguramos capitais de até USD 1.200.000 com garantia de não penhora.' },
      { icon: ICONS.Contrato,         title: 'Assessoria Estratégica',    desc: 'Consultoria personalizada para estruturar a melhor proteção para o seu patrimônio.' },
      { icon: ICONS.Confidencialidad, title: 'Gestão Confidencial',       desc: 'Tratamento discreto e profissional de todas as suas operações e documentação.' },
    ],
    faq: { h2: 'Perguntas Frequentes' },
    contacto: {
      h2: 'Contato',
      subtitle: 'Agende uma Consulta Confidencial',
      formH3: 'Formulário de Contato',
      meetingH3: 'Agende uma Reunião',
      meetingBody: 'Prefere falar diretamente conosco? Agende uma consulta confidencial no horário que melhor lhe convenha.',
      meetingCta: 'Agende sua consulta',
      infoH3: 'Informações de Contato',
      labels: { location: 'Localização', email: 'Email', phone: 'Telefone', hours: 'Horário' },
    },
    cta: {
      h2: 'Pronto para Proteger seu Patrimônio?',
      body: 'Agende uma consulta confidencial com nossos especialistas e descubra como podemos ajudá-lo.',
      button: 'Agende sua consulta',
    },
  },

  en: {
    nosotros: {
      h2: 'About Us',
      body: 'Asegúrate is a pioneer in offering exclusive insurance for businesses and corporations, guaranteeing the protection of non-seizable insured capital. Our mission is to provide legal strength, absolute confidentiality and a long-term vision for our most demanding clients.',
      misionH3: 'Our Mission',
      misionBody: 'To be the trusted strategic partner for companies and corporations seeking to protect their assets with maximum legal security. We are committed to offering personalized, confidential and long-term solutions, backed by our authority in the market and our unwavering institutional strength.',
    },
    features: [
      { icon: ICONS.Seguridad,    title: 'Strategic Protection', desc: 'Solutions designed to protect your business assets with maximum legal security.' },
      { icon: ICONS.Exclusividad, title: 'Exclusivity',          desc: 'Personalized and confidential service for a select group of clients.' },
      { icon: ICONS.Juridico,     title: 'Legal Strength',       desc: 'Backed by robust legal frameworks that guarantee the intangibility of your assets.' },
      { icon: ICONS.Innovacion,   title: 'Long-term Vision',     desc: 'Protection strategies designed for the future of your company.' },
    ],
    servicios: {
      h2: 'Services',
      subtitle: 'Asset Protection Solutions',
      coverageH3: 'Exclusive Coverage',
      coveragePoints: [
        'Insured non-seizable capital of up to $USD',
        'Specialized legal protection for businesses and corporations',
        'Absolute confidentiality in all operations',
        'Personalized service in Punta del Este and surrounding areas',
      ],
    },
    services: [
      { icon: ICONS.Empresa,          title: 'Corporate Insurance',      desc: 'Exclusive coverage designed for companies with special protection needs.' },
      { icon: ICONS.Rentabilidad,     title: 'Non-Seizable Capital',     desc: 'We insure capital up to USD 1,200,000 with a non-seizure guarantee.' },
      { icon: ICONS.Contrato,         title: 'Strategic Advisory',       desc: 'Personalized consulting to structure the best protection for your assets.' },
      { icon: ICONS.Confidencialidad, title: 'Confidential Management',  desc: 'Discreet and professional handling of all your operations and documentation.' },
    ],
    faq: { h2: 'Frequently Asked Questions' },
    contacto: {
      h2: 'Contact',
      subtitle: 'Schedule a Confidential Consultation',
      formH3: 'Contact Form',
      meetingH3: 'Schedule a Meeting',
      meetingBody: 'Would you prefer to speak directly with us? Schedule a confidential consultation at a time that suits you best.',
      meetingCta: 'Schedule your consultation',
      infoH3: 'Contact Information',
      labels: { location: 'Location', email: 'Email', phone: 'Phone', hours: 'Hours' },
    },
    cta: {
      h2: 'Ready to Protect Your Assets?',
      body: 'Schedule a confidential consultation with our specialists and discover how we can help you.',
      button: 'Schedule your consultation',
    },
  },
}

const contactDetails = (labels: { location: string; email: string; phone: string; hours: string }) => [
  { icon: <MapPinIcon />, label: labels.location, value: 'Punta del Este, Uruguay' },
  { icon: <MailIcon />,   label: labels.email,    value: 'info@asegurate.com' },
  { icon: <PhoneIcon />,  label: labels.phone,    value: '+598 XXXX XXXX' },
  { icon: null,           label: labels.hours,    value: 'Lun – Vie: 9:00 – 18:00' },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function HomeContent() {
  const { lang } = useLanguage()
  const t = content[lang]
  const details = contactDetails(t.contacto.labels)

  return (
    <>
      {/* ─── NOSOTROS ─── */}
      <section id="nosotros" className="py-20" style={{ backgroundColor: '#303E60' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-6 text-[#C6A23A]">{t.nosotros.h2}</h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white/80">{t.nosotros.body}</p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {t.features.map((f) => (
              <div
                key={f.title}
                className="rounded-[14px] p-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div
                  className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(198,162,58,0.15)' }}
                >
                  <img src={f.icon} alt="" className="w-6 h-6" style={{ filter: GOLD_FILTER }} />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white">{f.title}</h3>
                <p className="text-base leading-relaxed text-white/75">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Mission card */}
          <div
            className="rounded-2xl max-w-4xl mx-auto px-12 py-12 text-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'rgba(198,162,58,0.15)' }}
            >
              <img src={ICONS.Seguridad} alt="" className="w-8 h-8" style={{ filter: GOLD_FILTER }} />
            </div>
            <h3 className="font-bold text-3xl mb-4 text-[#C6A23A]">{t.nosotros.misionH3}</h3>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-white/80">{t.nosotros.misionBody}</p>
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section id="servicios" className="py-20" style={{ backgroundColor: '#273050' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-4 text-[#C6A23A]">{t.servicios.h2}</h2>
            <p className="text-lg text-white/75">{t.servicios.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {t.services.map((s) => (
              <div
                key={s.title}
                className="rounded-[14px] p-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div
                  className="w-14 h-14 rounded-[10px] flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(198,162,58,0.15)' }}
                >
                  <img src={s.icon} alt="" className="w-7 h-7" style={{ filter: GOLD_FILTER }} />
                </div>
                <h3 className="font-semibold text-2xl mb-3 text-white">{s.title}</h3>
                <p className="text-lg leading-relaxed text-white/75">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Coverage card */}
          <div
            className="rounded-2xl max-w-4xl mx-auto px-12 py-12"
            style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <h3 className="font-bold text-3xl text-center mb-8 text-[#C6A23A]">{t.servicios.coverageH3}</h3>
            <ul className="flex flex-col gap-4">
              {t.servicios.coveragePoints.map((point, i) => {
                const parts = point.split('$USD')
                return (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#C6A23A] shrink-0" />
                    <p className="text-lg leading-relaxed text-white/80">
                      {parts[0]}
                      {parts.length > 1 && <span className="font-semibold text-[#C6A23A]">USD 1.200.000</span>}
                      {parts[1]}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-20" style={{ backgroundColor: '#303E60' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl text-[#C6A23A]">{t.faq.h2}</h2>
          </div>
          <div className="max-w-[896px] mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section id="contacto" className="py-20" style={{ backgroundColor: '#273050' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-4 text-[#C6A23A]">{t.contacto.h2}</h2>
            <p className="text-lg text-white/75">{t.contacto.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form card */}
            <div
              className="rounded-[14px] p-8"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <h3 className="font-bold text-2xl mb-6 text-white">{t.contacto.formH3}</h3>
              <ContactForm />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-8">
              {/* Calendly card — gold glass */}
              <div
                className="rounded-[14px] p-8"
                style={{ backgroundColor: 'rgba(198,162,58,0.08)', border: '1px solid rgba(198,162,58,0.30)' }}
              >
                <h3 className="font-bold text-2xl mb-3 text-white">{t.contacto.meetingH3}</h3>
                <p className="text-base leading-relaxed mb-6 text-white/75">{t.contacto.meetingBody}</p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-semibold text-base py-4 rounded-[10px] shadow-lg transition-colors"
                  style={{ backgroundColor: '#C6A23A', color: '#040C1F' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#816828')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C6A23A')}
                >
                  <CalendarIcon size={20} />
                  {t.contacto.meetingCta}
                </a>
              </div>

              {/* Contact info card */}
              <div
                className="rounded-[14px] p-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <h3 className="font-bold text-2xl mb-6 text-white">{t.contacto.infoH3}</h3>
                <div className="flex flex-col gap-5">
                  {details.map((item) => (
                    <div key={item.label}>
                      <p className="text-xs mb-1 text-white/55">{item.label}</p>
                      <div className="flex items-center gap-2 text-white">
                        {item.icon && <span className="opacity-60 shrink-0">{item.icon}</span>}
                        <p className="text-base">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-20 bg-[#040C1F]">
        <div className="max-w-[896px] mx-auto px-6 text-center">
          <h2 className="font-bold text-4xl lg:text-5xl mb-5 text-[#C6A23A]">{t.cta.h2}</h2>
          <p className="text-xl mb-8 leading-relaxed text-white/70">{t.cta.body}</p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-base px-8 py-4 rounded-[10px] shadow-lg transition-colors"
            style={{ backgroundColor: '#C6A23A', color: '#040C1F' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#816828')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C6A23A')}
          >
            <CalendarIcon size={20} />
            {t.cta.button}
          </a>
        </div>
      </section>
    </>
  )
}
