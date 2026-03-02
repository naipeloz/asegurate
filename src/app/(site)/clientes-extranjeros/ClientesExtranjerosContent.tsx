'use client'

import { useLanguage } from '@/context/LanguageContext'

// Brand icon paths
const ICONS = {
  Empresa:          '/brand/icons/Empresa.svg',
  Juridico:         '/brand/icons/Juridico.svg',
  Confidencialidad: '/brand/icons/Confidencialidad.svg',
  Comercio:         '/brand/icons/Comercio.svg',
  Exclusividad:     '/brand/icons/Exclusividad.svg',
  Seguridad:        '/brand/icons/Seguridad.svg',
}

// CSS filter: converts black SVG → brand gold #C6A23A
const GOLD_FILTER = 'brightness(0) saturate(100%) invert(68%) sepia(83%) saturate(350%) hue-rotate(3deg) brightness(100%) contrast(88%)'

const CALENDLY_URL = 'https://calendly.com/asegurate'

// ─── Icons ───────────────────────────────────────────────────────────────────
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

// ─── Translations ─────────────────────────────────────────────────────────────
const content = {
  es: {
    hero: {
      badge: 'International Service',
      h1: 'Clientes Extranjeros',
      subtitle: 'Protección Internacional para su Patrimonio',
      cta1: 'Agenda tu consulta',
      cta2: 'Contáctenos',
    },
    intro: {
      heading: 'Servicio Especializado para Clientes Internacionales',
      p1: 'En Asegúrate entendemos las necesidades únicas de los clientes extranjeros que buscan proteger su patrimonio en Uruguay. Ofrecemos un servicio integral y personalizado que combina nuestra profunda experiencia en el mercado local con una visión global.',
      p2: 'Uruguay se ha consolidado como el destino preferido para la protección patrimonial internacional, gracias a su estabilidad jurídica, confidencialidad garantizada por ley, y su posición estratégica como centro financiero del Cono Sur. Nuestros capitales asegurados no embargables de hasta',
      p2suffix: 'ofrecen la tranquilidad que su patrimonio merece.',
    },
    benefits: {
      heading: 'Nuestros Servicios Internacionales',
      subtitle: 'Soluciones diseñadas para proteger su patrimonio desde cualquier parte del mundo',
      cards: [
        { icon: ICONS.Comercio,         title: 'Asesoramiento Internacional', desc: 'Orientación experta para clientes extranjeros que buscan estructurar sus activos en Uruguay, con conocimiento profundo del marco legal local e internacional.' },
        { icon: ICONS.Juridico,         title: 'Estructuras Legales',          desc: 'Diseñamos las estructuras societarias y de seguros más adecuadas para proteger su patrimonio dentro del robusto marco jurídico uruguayo.' },
        { icon: ICONS.Confidencialidad, title: 'Máxima Confidencialidad',      desc: 'Garantizamos la total privacidad de su información y operaciones, respaldados por la legislación uruguaya sobre confidencialidad financiera.' },
      ],
    },
    why: {
      heading: '¿Por qué Uruguay?',
      subtitle: 'Uruguay ofrece un entorno único y privilegiado para la protección patrimonial internacional',
      cards: [
        { icon: ICONS.Juridico,         title: 'Estabilidad Jurídica',    desc: 'Uruguay cuenta con uno de los sistemas legales más sólidos y transparentes de América Latina, ofreciendo seguridad jurídica incomparable para la protección patrimonial internacional.' },
        { icon: ICONS.Confidencialidad, title: 'Confidencialidad',        desc: 'El marco legal uruguayo garantiza la privacidad de las operaciones financieras y societarias, protegiendo la identidad y los activos de nuestros clientes internacionales.' },
        { icon: ICONS.Comercio,         title: 'Ubicación Estratégica',   desc: 'Punta del Este se posiciona como el hub financiero y de negocios del Cono Sur, con excelente conectividad internacional y una comunidad de alto poder adquisitivo.' },
        { icon: ICONS.Exclusividad,     title: 'Calidad de Vida',         desc: 'Uruguay ofrece una calidad de vida excepcional con seguridad, estabilidad política y una infraestructura de primer nivel para negocios e inversiones internacionales.' },
      ],
    },
    cta: {
      heading: 'Hablemos sobre sus Necesidades',
      body: 'Nuestro equipo de especialistas está listo para asesorarle sobre las mejores estrategias de protección patrimonial para clientes internacionales.',
      button: 'Agenda tu consulta',
    },
  },

  pt: {
    hero: {
      badge: 'Serviço Internacional',
      h1: 'Clientes Estrangeiros',
      subtitle: 'Proteção Internacional para seu Patrimônio',
      cta1: 'Agende sua consulta',
      cta2: 'Contate-nos',
    },
    intro: {
      heading: 'Serviço Especializado para Clientes Internacionais',
      p1: 'Na Asegurate entendemos as necessidades únicas dos clientes estrangeiros que buscam proteger seu patrimônio no Uruguai. Oferecemos um serviço integral e personalizado que combina nossa profunda experiência no mercado local com uma visão global.',
      p2: 'O Uruguai consolidou-se como o destino preferido para a proteção patrimonial internacional, graças à sua estabilidade jurídica, confidencialidade garantida por lei, e sua posição estratégica como centro financeiro do Cone Sul. Nossos capitais segurados não penhoráveis de até',
      p2suffix: 'oferecem a tranquilidade que seu patrimônio merece.',
    },
    benefits: {
      heading: 'Nossos Serviços Internacionais',
      subtitle: 'Soluções desenvolvidas para proteger seu patrimônio de qualquer parte do mundo',
      cards: [
        { icon: ICONS.Comercio,         title: 'Assessoria Internacional',  desc: 'Orientação especializada para clientes estrangeiros que buscam estruturar seus ativos no Uruguai, com profundo conhecimento do marco legal local e internacional.' },
        { icon: ICONS.Juridico,         title: 'Estruturas Legais',         desc: 'Desenvolvemos as estruturas societárias e de seguros mais adequadas para proteger seu patrimônio dentro do robusto marco jurídico uruguaio.' },
        { icon: ICONS.Confidencialidad, title: 'Máxima Confidencialidade',  desc: 'Garantimos a total privacidade de suas informações e operações, respaldados pela legislação uruguaia sobre confidencialidade financeira.' },
      ],
    },
    why: {
      heading: 'Por que o Uruguai?',
      subtitle: 'O Uruguai oferece um ambiente único e privilegiado para a proteção patrimonial internacional',
      cards: [
        { icon: ICONS.Juridico,         title: 'Estabilidade Jurídica',  desc: 'O Uruguai possui um dos sistemas legais mais sólidos e transparentes da América Latina, oferecendo segurança jurídica incomparável para a proteção patrimonial internacional.' },
        { icon: ICONS.Confidencialidad, title: 'Confidencialidade',      desc: 'O marco legal uruguaio garante a privacidade das operações financeiras e societárias, protegendo a identidade e os ativos dos nossos clientes internacionais.' },
        { icon: ICONS.Comercio,         title: 'Localização Estratégica',desc: 'Punta del Este se posiciona como o hub financeiro e de negócios do Cone Sul, com excelente conectividade internacional e uma comunidade de alto poder aquisitivo.' },
        { icon: ICONS.Exclusividad,     title: 'Qualidade de Vida',      desc: 'O Uruguai oferece uma qualidade de vida excepcional com segurança, estabilidade política e uma infraestrutura de primeiro nível para negócios e investimentos internacionais.' },
      ],
    },
    cta: {
      heading: 'Vamos Conversar sobre suas Necessidades',
      body: 'Nossa equipe de especialistas está pronta para assessorá-lo sobre as melhores estratégias de proteção patrimonial para clientes internacionais.',
      button: 'Agende sua consulta',
    },
  },

  en: {
    hero: {
      badge: 'International Service',
      h1: 'International Clients',
      subtitle: 'International Wealth Protection for Your Assets',
      cta1: 'Schedule your consultation',
      cta2: 'Contact Us',
    },
    intro: {
      heading: 'Specialized Service for International Clients',
      p1: 'At Asegurate we understand the unique needs of foreign clients looking to protect their assets in Uruguay. We offer a comprehensive and personalized service that combines our deep expertise in the local market with a global vision.',
      p2: 'Uruguay has consolidated its position as the preferred destination for international asset protection, thanks to its legal stability, confidentiality guaranteed by law, and its strategic position as the financial center of the Southern Cone. Our insured non-seizable assets of up to',
      p2suffix: 'offer the peace of mind your assets deserve.',
    },
    benefits: {
      heading: 'Our International Services',
      subtitle: 'Solutions designed to protect your assets from anywhere in the world',
      cards: [
        { icon: ICONS.Comercio,         title: 'International Advisory',  desc: 'Expert guidance for foreign clients looking to structure their assets in Uruguay, with deep knowledge of local and international legal frameworks.' },
        { icon: ICONS.Juridico,         title: 'Legal Structures',        desc: 'We design the most suitable corporate and insurance structures to protect your assets within the robust Uruguayan legal framework.' },
        { icon: ICONS.Confidencialidad, title: 'Maximum Confidentiality', desc: 'We guarantee total privacy of your information and operations, backed by Uruguayan legislation on financial confidentiality.' },
      ],
    },
    why: {
      heading: 'Why Uruguay?',
      subtitle: 'Uruguay offers a unique and privileged environment for international asset protection',
      cards: [
        { icon: ICONS.Juridico,         title: 'Legal Stability',      desc: 'Uruguay has one of the most solid and transparent legal systems in Latin America, offering incomparable legal security for international asset protection.' },
        { icon: ICONS.Confidencialidad, title: 'Confidentiality',      desc: 'The Uruguayan legal framework guarantees the privacy of financial and corporate operations, protecting the identity and assets of our international clients.' },
        { icon: ICONS.Comercio,         title: 'Strategic Location',   desc: 'Punta del Este is positioned as the financial and business hub of the Southern Cone, with excellent international connectivity and a high-net-worth community.' },
        { icon: ICONS.Exclusividad,     title: 'Quality of Life',      desc: 'Uruguay offers an exceptional quality of life with security, political stability and first-class infrastructure for international business and investments.' },
      ],
    },
    cta: {
      heading: 'Let\'s Talk About Your Needs',
      body: 'Our team of specialists is ready to advise you on the best asset protection strategies for international clients.',
      button: 'Schedule your consultation',
    },
  },
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ClientesExtranjerosContent() {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <>
      {/* ─── HERO ─── */}
      <section id="inicio" className="pt-20 bg-[#303E60]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 text-[#C6A23A] text-sm font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(198,162,58,0.15)', border: '1px solid rgba(198,162,58,0.40)' }}
            >
              <GlobeIcon size={16} />
              {t.hero.badge}
            </div>

            <h1 className="font-bold text-4xl lg:text-6xl leading-tight mb-6 text-[#C6A23A]">
              {t.hero.h1}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-10 text-white/80">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#C6A23A] hover:bg-[#816828] text-[#040C1F] font-semibold text-base px-8 py-4 rounded-[10px] shadow-lg transition-colors"
              >
                <CalendarIcon size={20} />
                {t.hero.cta1}
              </a>
              <a
                href="/#contacto"
                className="font-semibold text-base text-white border-2 border-white/50 px-8 py-4 rounded-[10px] hover:bg-white/10 transition-colors"
              >
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-16 bg-[#273050]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div
            className="rounded-2xl max-w-4xl mx-auto px-10 lg:px-16 py-12"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <h2 className="font-bold text-2xl lg:text-3xl mb-5 text-[#C6A23A]">
              {t.intro.heading}
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-white/80">{t.intro.p1}</p>
            <p className="text-lg leading-relaxed text-white/80">
              {t.intro.p2}{' '}
              <span className="font-semibold text-[#C6A23A]">USD 1.200.000</span>{' '}
              {t.intro.p2suffix}
            </p>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="py-20 bg-[#303E60]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-4 text-[#C6A23A]">
              {t.benefits.heading}
            </h2>
            <p className="text-lg text-white/70">{t.benefits.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.benefits.cards.map((b) => (
              <div
                key={b.title}
                className="rounded-[14px] p-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div
                  className="w-14 h-14 rounded-[10px] flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(198,162,58,0.15)' }}
                >
                  <img src={b.icon} alt="" className="w-7 h-7" style={{ filter: GOLD_FILTER }} />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white">{b.title}</h3>
                <p className="text-base leading-relaxed text-white/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY URUGUAY ─── */}
      <section className="py-20 bg-[#273050]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-4 text-[#C6A23A]">
              {t.why.heading}
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-white/70">{t.why.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.why.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-[14px] p-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div
                  className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'rgba(198,162,58,0.15)' }}
                >
                  <img src={card.icon} alt="" className="w-6 h-6" style={{ filter: GOLD_FILTER }} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#C6A23A]">{card.title}</h3>
                <p className="text-base leading-relaxed text-white/70">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#040C1F]">
        <div className="max-w-[896px] mx-auto px-6 text-center">
          <h2 className="font-bold text-4xl lg:text-5xl mb-5 text-[#C6A23A]">
            {t.cta.heading}
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-white/70">{t.cta.body}</p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C6A23A] hover:bg-[#816828] text-[#040C1F] font-semibold text-base px-8 py-4 rounded-[10px] shadow-lg transition-colors"
          >
            <CalendarIcon size={20} />
            {t.cta.button}
          </a>
        </div>
      </section>
    </>
  )
}
