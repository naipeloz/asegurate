import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'
import HeroSlider from '@/components/HeroSlider'

export const metadata: Metadata = {
  title: 'Asegúrate – Blindaje Empresarial en Uruguay',
  description:
    'La primera empresa en Uruguay especializada en blindaje empresarial a través de estructuras aseguradas. Capitales no embargables de hasta USD 1.200.000. Punta del Este.',
  alternates: { canonical: 'https://asegurate.uy' },
}

// Brand icon paths
const ICONS = {
  Seguridad: '/brand/icons/Seguridad.svg',
  Exclusividad: '/brand/icons/Exclusividad.svg',
  Juridico: '/brand/icons/Juridico.svg',
  Innovacion: '/brand/icons/Innovacion.svg',
  Empresa: '/brand/icons/Empresa.svg',
  Rentabilidad: '/brand/icons/Rentabilidad.svg',
  Contrato: '/brand/icons/Contrato.svg',
  Confidencialidad: '/brand/icons/Confidencialidad.svg',
}

// Inline SVGs for UI controls
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

const features = [
  {
    icon: ICONS.Seguridad,
    title: 'Protección Estratégica',
    desc: 'Soluciones diseñadas para proteger su patrimonio empresarial con máxima seguridad jurídica.',
  },
  {
    icon: ICONS.Exclusividad,
    title: 'Exclusividad Insondable',
    desc: 'Servicio personalizado y confidencial para un selecto grupo de clientes.',
  },
  {
    icon: ICONS.Juridico,
    title: 'Solidez Jurídica',
    desc: 'Respaldados por marcos legales robustos que garantizan la intangibilidad de sus activos.',
  },
  {
    icon: ICONS.Innovacion,
    title: 'Visión de Largo Plazo',
    desc: 'Estrategias de protección pensadas para el futuro de su empresa.',
  },
]

const services = [
  {
    icon: ICONS.Empresa,
    title: 'Seguros Empresariales',
    desc: 'Coberturas exclusivas diseñadas para empresas y sociedades con necesidades especiales de protección.',
  },
  {
    icon: ICONS.Rentabilidad,
    title: 'Capitales No Embargables',
    desc: 'Aseguramos capitales de hasta USD 1.200.000 con garantía de no embargo.',
  },
  {
    icon: ICONS.Contrato,
    title: 'Asesoramiento Estratégico',
    desc: 'Consultoría personalizada para estructurar la mejor protección para su patrimonio.',
  },
  {
    icon: ICONS.Confidencialidad,
    title: 'Gestión Confidencial',
    desc: 'Manejo discreto y profesional de todas sus operaciones y documentación.',
  },
]

const coveragePoints = [
  <>Capitales asegurados no embargables de hasta <span className="font-semibold text-[#C6A23A]">USD 1.200.000</span></>,
  'Protección jurídica especializada para comercios, empresas y sociedades',
  'Confidencialidad absoluta en todas las operaciones',
  'Atención personalizada en Punta del Este y zonas aledañas',
]

const contactDetails = [
  { icon: <MapPinIcon />, label: 'Ubicación', value: 'Punta del Este, Uruguay' },
  { icon: <MailIcon />, label: 'Email', value: 'info@asegurate.com' },
  { icon: <PhoneIcon />, label: 'Teléfono', value: '+598 XXXX XXXX' },
  { icon: null, label: 'Horario', value: 'Lunes a Viernes: 9:00 – 18:00' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ─── HERO ─── */}
      <section id="inicio" className="pt-20">
        <HeroSlider />
      </section>

      {/* ─── NOSOTROS ─── */}
      <section id="nosotros" className="py-20" style={{ backgroundColor: '#303E60' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-6 text-white">Nosotros</h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed text-white/75">
              Asegúrate es pionera en ofrecer seguros exclusivos para comercios, empresas y
              sociedades, garantizando la protección de capitales asegurados no embargables.
              Nuestra misión es brindar solidez jurídica, confidencialidad absoluta y una visión de
              largo plazo para nuestros clientes más exigentes.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-[14px] p-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div
                  className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                >
                  <img src={f.icon} alt="" className="w-6 h-6 brightness-0 invert" />
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
              style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
            >
              <img src={ICONS.Seguridad} alt="" className="w-8 h-8 brightness-0 invert" />
            </div>
            <h3 className="font-bold text-3xl mb-4 text-white">Nuestra Misión</h3>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-white/75">
              Ser el socio estratégico de confianza para empresas y sociedades que buscan proteger
              su patrimonio con la máxima seguridad jurídica. Nos comprometemos a ofrecer
              soluciones personalizadas, confidenciales y de largo plazo, respaldadas por nuestra
              autoridad en el mercado y nuestra inquebrantable solidez institucional.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section id="servicios" className="py-20" style={{ backgroundColor: '#273050' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-4 text-white">Servicios</h2>
            <p className="text-lg text-white/75">Soluciones de Protección Patrimonial</p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-[14px] p-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div
                  className="w-14 h-14 rounded-[10px] flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                >
                  <img src={s.icon} alt="" className="w-7 h-7 brightness-0 invert" />
                </div>
                <h3 className="font-semibold text-2xl mb-3 text-white">{s.title}</h3>
                <p className="text-lg leading-relaxed text-white/75">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Coverage highlight card */}
          <div
            className="rounded-2xl max-w-4xl mx-auto px-12 py-12"
            style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <h3 className="font-bold text-3xl text-center mb-8 text-white">
              Cobertura Exclusiva
            </h3>
            <ul className="flex flex-col gap-4">
              {coveragePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#C6A23A] shrink-0" />
                  <p className="text-lg leading-relaxed text-white/75">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-20" style={{ backgroundColor: '#303E60' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl text-white">
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="max-w-[896px] mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section id="contacto" className="py-20" style={{ backgroundColor: '#273050' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-4 text-white">Contacto</h2>
            <p className="text-lg text-white/75">Agenda una Consulta Confidencial</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div
              className="rounded-[14px] p-8"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <h3 className="font-bold text-2xl mb-6 text-white">Formulario de Contacto</h3>
              <ContactForm />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-8">
              {/* Schedule meeting — gold glass */}
              <div
                className="rounded-[14px] p-8"
                style={{
                  backgroundColor: 'rgba(198,162,58,0.08)',
                  border: '1px solid rgba(198,162,58,0.30)',
                }}
              >
                <h3 className="font-bold text-2xl mb-3 text-white">Agenda una Reunión</h3>
                <p className="text-base leading-relaxed mb-6 text-white/75">
                  ¿Prefieres hablar directamente con nosotros? Agenda una consulta confidencial en
                  el horario que mejor te convenga.
                </p>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 bg-[#C6A23A] hover:bg-[#816828] text-[#040C1F] font-semibold text-base py-4 rounded-[10px] shadow-lg transition-colors"
                >
                  <CalendarIcon size={20} />
                  Agendar Consulta
                </a>
              </div>

              {/* Contact info */}
              <div
                className="rounded-[14px] p-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <h3 className="font-bold text-2xl mb-6 text-white">
                  Información de Contacto
                </h3>
                <div className="flex flex-col gap-5">
                  {contactDetails.map((item) => (
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

      {/* ─── CTA BANNER — dark institutional ─── */}
      <section className="py-20 bg-[#040C1F]">
        <div className="max-w-[896px] mx-auto px-6 text-center">
          <h2 className="font-bold text-4xl lg:text-5xl mb-5 text-white">
            ¿Listo para Proteger su Patrimonio?
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-white/70">
            Agenda una consulta confidencial con nuestros especialistas y descubre cómo podemos
            ayudarte.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#C6A23A] hover:bg-[#816828] text-[#040C1F] font-semibold text-base px-8 py-4 rounded-[10px] shadow-lg transition-colors"
          >
            <CalendarIcon size={20} />
            Agendar Consulta
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
