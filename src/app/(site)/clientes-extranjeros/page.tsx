import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Clientes Extranjeros – Asegúrate',
  description:
    'Protección patrimonial internacional para clientes extranjeros. Estructuras legales en Uruguay con máxima confidencialidad. Punta del Este, Uruguay.',
}

// Brand icon paths
const ICONS = {
  Empresa: '/brand/icons/Empresa.svg',
  Juridico: '/brand/icons/Juridico.svg',
  Confidencialidad: '/brand/icons/Confidencialidad.svg',
  Comercio: '/brand/icons/Comercio.svg',
  Exclusividad: '/brand/icons/Exclusividad.svg',
  Seguridad: '/brand/icons/Seguridad.svg',
}

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

function GlobeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

const benefits = [
  {
    icon: ICONS.Comercio,
    title: 'Asesoramiento Internacional',
    desc: 'Orientación experta para clientes extranjeros que buscan estructurar sus activos en Uruguay, con conocimiento profundo del marco legal local e internacional.',
  },
  {
    icon: ICONS.Juridico,
    title: 'Estructuras Legales',
    desc: 'Diseñamos las estructuras societarias y de seguros más adecuadas para proteger su patrimonio dentro del robusto marco jurídico uruguayo.',
  },
  {
    icon: ICONS.Confidencialidad,
    title: 'Máxima Confidencialidad',
    desc: 'Garantizamos la total privacidad de su información y operaciones, respaldados por la legislación uruguaya sobre confidencialidad financiera.',
  },
]

const whyUruguay = [
  {
    icon: ICONS.Juridico,
    title: 'Estabilidad Jurídica',
    desc: 'Uruguay cuenta con uno de los sistemas legales más sólidos y transparentes de América Latina, ofreciendo seguridad jurídica incomparable para la protección patrimonial internacional.',
  },
  {
    icon: ICONS.Confidencialidad,
    title: 'Confidencialidad',
    desc: 'El marco legal uruguayo garantiza la privacidad de las operaciones financieras y societarias, protegiendo la identidad y los activos de nuestros clientes internacionales.',
  },
  {
    icon: ICONS.Comercio,
    title: 'Ubicación Estratégica',
    desc: 'Punta del Este se posiciona como el hub financiero y de negocios del Cono Sur, con excelente conectividad internacional y una comunidad de alto poder adquisitivo.',
  },
  {
    icon: ICONS.Exclusividad,
    title: 'Calidad de Vida',
    desc: 'Uruguay ofrece una calidad de vida excepcional con seguridad, estabilidad política y una infraestructura de primer nivel para negocios e inversiones internacionales.',
  },
]

export default function ClientesExtranjerosPage() {
  return (
    <>
      <Navbar />

      {/* ─── HERO ─── */}
      <section id="inicio" className="pt-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge — gold accent */}
            <div className="inline-flex items-center gap-2 bg-white border text-[#C6A23A] text-sm font-semibold px-4 py-2 rounded-full shadow-sm mb-8 border-[#C6A23A]/30">
              <GlobeIcon size={16} />
              International Service
            </div>

            <h1 className="font-bold text-4xl lg:text-6xl leading-tight mb-6 text-[#040C1F]">
              Clientes Extranjeros
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-10 text-[#303E60]">
              Protección Internacional para su Patrimonio
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary gold button */}
              <a
                href="/#contacto"
                className="flex items-center gap-2 bg-[#C6A23A] hover:bg-[#816828] text-[#040C1F] font-semibold text-base px-8 py-4 rounded-[10px] shadow-lg transition-colors"
              >
                <CalendarIcon size={20} />
                Agendar Consulta
              </a>
              {/* Outline gold button */}
              <a
                href="/#contacto"
                className="font-semibold text-base text-[#C6A23A] border-2 border-[#C6A23A] px-8 py-4 rounded-[10px] hover:bg-[#C6A23A]/10 transition-colors"
              >
                Contáctenos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTRO CARD ─── */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="bg-white border border-[#e5e7eb] rounded-2xl shadow-sm max-w-4xl mx-auto px-10 lg:px-16 py-12">
            <h2 className="font-bold text-2xl lg:text-3xl mb-5 text-[#040C1F]">
              Servicio Especializado para Clientes Internacionales
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-[#303E60]">
              En Asegúrate entendemos las necesidades únicas de los clientes extranjeros que buscan
              proteger su patrimonio en Uruguay. Ofrecemos un servicio integral y personalizado que
              combina nuestra profunda experiencia en el mercado local con una visión global.
            </p>
            <p className="text-lg leading-relaxed text-[#303E60]">
              Uruguay se ha consolidado como el destino preferido para la protección patrimonial
              internacional, gracias a su estabilidad jurídica, confidencialidad garantizada por
              ley, y su posición estratégica como centro financiero del Cono Sur. Nuestros capitales
              asegurados no embargables de hasta{' '}
              <span className="font-semibold text-[#C6A23A]">USD 1.200.000</span> ofrecen la
              tranquilidad que su patrimonio merece.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="bg-[#f9fafb] py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-4 text-[#040C1F]">
              Nuestros Servicios Internacionales
            </h2>
            <p className="text-lg text-[#303E60]">
              Soluciones diseñadas para proteger su patrimonio desde cualquier parte del mundo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white border border-[#e5e7eb] rounded-[14px] p-8"
              >
                <div className="bg-[#f5edd6] w-14 h-14 rounded-[10px] flex items-center justify-center mb-6">
                  <img src={b.icon} alt="" className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-[#040C1F]">{b.title}</h3>
                <p className="text-base leading-relaxed text-[#303E60]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ¿POR QUÉ URUGUAY? ─── */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-4 text-[#040C1F]">
              ¿Por qué Uruguay?
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#303E60]">
              Uruguay ofrece un entorno único y privilegiado para la protección patrimonial
              internacional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyUruguay.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#e5e7eb] rounded-[14px] p-8"
              >
                <div className="bg-[#f5edd6] w-12 h-12 rounded-[10px] flex items-center justify-center mb-5">
                  <img src={card.icon} alt="" className="w-6 h-6" />
                </div>
                {/* Gold accent titles */}
                <h3 className="font-bold text-xl mb-3 text-[#C6A23A]">{card.title}</h3>
                <p className="text-base leading-relaxed text-[#303E60]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — dark institutional ─── */}
      <section className="py-20 bg-[#040C1F]">
        <div className="max-w-[896px] mx-auto px-6 text-center">
          <h2 className="font-bold text-4xl lg:text-5xl mb-5 text-white">
            Hablemos sobre sus Necesidades
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-white/70">
            Nuestro equipo de especialistas está listo para asesorarle sobre las mejores
            estrategias de protección patrimonial para clientes internacionales.
          </p>
          <a
            href="/#contacto"
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
