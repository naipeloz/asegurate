'use client'

import { useLanguage } from '@/context/LanguageContext'
import FAQAccordion from '@/components/FAQAccordion'
import ContactForm from '@/components/ContactForm'

// ─── Brand assets ─────────────────────────────────────────────────────────────
const ICONS = {
  Seguridad: '/brand/icons/Seguridad.svg',
  Exclusividad: '/brand/icons/Exclusividad.svg',
  Juridico: '/brand/icons/Juridico.svg',
  Innovacion: '/brand/icons/Innovacion.svg',
  Empresa: '/brand/icons/Empresa.svg',
  Rentabilidad: '/brand/icons/Rentabilidad.svg',
  Contrato: '/brand/icons/Contrato.svg',
  Confidencialidad: '/brand/icons/Confidencialidad.svg',
  Comercio: '/brand/icons/Comercio.svg',
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

// ─── Rich text renderer (renders **bold** as gold text) ───────────────────────
function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return (
    <p className={className}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} style={{ color: '#C6A23A', fontWeight: 700 }}>{part}</span>
        ) : (
          part
        )
      )}
    </p>
  )
}

// ─── Content ─────────────────────────────────────────────────────────────────
const content = {
  es: {
    nosotros: {
      h2: 'Nosotros',
      body: [
        'En ASEGURATE somos especialistas en **respaldo patrimonial estratégico** para dueños de empresas, sociedades, comercios y profesionales independientes.',
        'Diseñamos estructuras de protección pensadas para anticipar riesgos, ordenar la continuidad del negocio y resguardar el valor de lo construido.',
        'Trabajamos con un enfoque **exclusivo y confidencial**, combinando análisis personalizado, solidez jurídica y una ejecución clara: diagnóstico, propuesta y definición.',
      ],
      beneficiosH2: 'Beneficios —',
      misionH3: 'Nuestra misión',
      misionBody: [
        'Nuestra misión es garantizar el patrimonio de quienes construyen empresas —**dueños, socios, comerciantes y profesionales independientes**— anticipando riesgos con estructuras sólidas, confidenciales y sostenibles.',
        'Acompañamos a quienes lideran y sostienen su actividad en la toma de decisiones estratégicas para garantizar **continuidad, orden patrimonial y visión de largo plazo**, con un proceso claro y a medida.',
      ],
    },
    benefits: [
      { icon: ICONS.Seguridad, title: 'Capital asegurado no embargable', desc: 'Resguarda el valor de tu empresa o participaciones societarias bajo una estructura diseñada para proteger tu patrimonio.' },
      { icon: ICONS.Exclusividad, title: 'Sin período de carencia', desc: 'La cobertura comienza desde el inicio. Una solución pensada para actuar cuando el negocio lo necesita, sin esperas innecesarias.' },
      { icon: ICONS.Juridico, title: 'Fondo rentable en USD', desc: 'Además de proteger, el capital va a un fondo rentable en dólares, combinando respaldo y planificación.' },
      { icon: ICONS.Innovacion, title: 'Diseño personalizado y confidencial', desc: 'Cada caso es único. Analizamos tu estructura y objetivos para diseñar una propuesta a medida, en un proceso privado y profesional.' },
    ],
    servicios: {
      h2: 'Servicios',
      subtitle: 'Soluciones de Protección Patrimonial',
      coverageH3: 'Respaldo Exclusivo',
      coveragePoints: [
        '**Enfoque estratégico y preventivo:** no reaccionamos ante el riesgo; lo anticipamos y diseñamos una estructura patrimonial.',
        '**Diseño a medida:** la propuesta se arma en base a tu estructura societaria, objetivos y nivel de exposición real.',
        '**Confidencialidad y servicio premium:** evaluación privada, comunicación abierta y acompañamiento profesional.',
        '**Claridad en el proceso:** diagnóstico + propuesta en 2 reuniones, e implementación junto a aseguradora para ejecución sólida.',
      ],
    },
    services: [
      { icon: ICONS.Empresa, title: 'Dueños de empresas y sociedades', desc: 'Diseñamos esquemas de respaldo basados en un **capital asegurado no embargable**, sin período de carencia, que representa el valor total de la empresa o de sus participaciones societarias. La solución se adapta a la estructura societaria y puede contemplar socios, directores o personas clave.' },
      { icon: ICONS.Comercio, title: 'Dueños de comercios', desc: 'Para negocios donde el funcionamiento depende directamente del dueño, diseñamos una estructura de respaldo orientada a **continuidad operativa:** previsibilidad ante imprevistos, resplado del valor construido y un esquema claro para no improvisar cuando el comercio necesita estabilidad.' },
      { icon: ICONS.Innovacion, title: 'Profesionales independientes', desc: 'Respaldamos a cada profesional independiente en su actividad garantizando su **retiro jubilatorio**' },
    ],
    faq: { h2: 'Preguntas Frecuentes' },
    contacto: {
      h2: 'Contacto',
      subtitle: 'Agendá una Consulta Confidencial',
      formH3: 'Formulario de Contacto',
      meetingH3: 'Agendá tu Reunión',
      meetingBody: '¡Estamos listos para asesorarte de manera personalizada!',
      meetingCta: 'Agenda ahora',
      infoH3: 'Información de Contacto',
      labels: { location: 'Ubicación', email: 'Email', phone: 'Teléfono', hours: 'Horario', hoursValue: 'Lunes a Viernes: 8:00 a 20:00 | Sábados: 8:00 a 12:00' },
    },
    cta: {
      h2: '¿Listo para proteger tu patrimonio?',
      body: 'Agendá tu consulta exclusiva con nuestros especialistas y descubrí cómo podemos ayudarte con una propuesta clara, confidencial y a medida.',
      button: 'Agendá tu consulta',
    },
  },

  pt: {
    nosotros: {
      h2: 'Sobre Nós',
      body: [
        'Na ASEGURATE, somos especialistas em **proteção patrimonial estratégica** para proprietários de empresas, sociedades, comércios e profissionais independentes.',
        'Projetamos estruturas de proteção pensadas para antecipar riscos, ordenar a continuidade do negócio e resguardar o valor do que foi construído.',
        'Trabalhamos com um foco **exclusivo e confidencial**, combinando análise personalizada, solidez jurídica e uma execução clara: diagnóstico, proposta e definição.',
      ],
      beneficiosH2: 'Benefícios —',
      misionH3: 'Nossa missão',
      misionBody: [
        'Nossa missão é garantir o patrimônio daqueles que constroem empresas —**proprietários, sócios, comerciantes e profissionais independentes**— antecipando riscos com estruturas sólidas, confidenciais e sustentáveis.',
        'Acompanhamos aqueles que lideram e sustentam suas atividades na tomada de decisões estratégicas para garantir **continuidade, ordem patrimonial e visão de longo prazo**, com um processo claro e sob medida.',
      ],
    },
    features: [
      { icon: ICONS.Seguridad, title: 'Proteção Estratégica', desc: 'Soluções desenvolvidas para proteger seu patrimônio empresarial com máxima segurança jurídica.' },
      { icon: ICONS.Exclusividad, title: 'Exclusividade', desc: 'Serviço personalizado e confidencial para um seleto grupo de clientes.' },
      { icon: ICONS.Juridico, title: 'Solidez Jurídica', desc: 'Respaldados por marcos legais robustos que garantem a intangibilidade dos seus ativos.' },
      { icon: ICONS.Innovacion, title: 'Visão de Longo Prazo', desc: 'Estratégias de proteção pensadas para o futuro da sua empresa.' },
    ],
    benefits: [
      { icon: ICONS.Seguridad, title: 'Capital segurado não penhorável', desc: 'Protege o valor da sua empresa ou participações societárias sob uma estrutura projetada para proteger seu patrimônio.' },
      { icon: ICONS.Exclusividad, title: 'Sem período de carência', desc: 'A cobertura começa desde o início. Uma solução pensada para agir quando o negócio precisa, sem esperas desnecessárias.' },
      { icon: ICONS.Juridico, title: 'Fundo rentável em USD', desc: 'Além de proteger, o capital vai para um fundo rentável em dólares, combinando proteção e planejamento.' },
      { icon: ICONS.Innovacion, title: 'Design personalizado e confidencial', desc: 'Cada caso é único. Analisamos sua estrutura e objetivos para projetar uma proposta sob medida, em um processo privado e profissional.' },
    ],
    servicios: {
      h2: 'Serviços',
      subtitle: 'Soluções de Proteção Patrimonial',
      coverageH3: 'Respaldo Exclusivo',
      coveragePoints: [
        '**Abordagem estratégica e preventiva:** não reagimos ao risco; antecipamo-lo e desenhamos uma estrutura patrimonial.',
        '**Design sob medida:** a proposta é montada com base na sua estrutura societária, objetivos e nível de exposição real.',
        '**Confidencialidade e serviço premium:** avaliação privada, comunicação aberta e acompanhamento profissional.',
        '**Clareza no processo:** diagnóstico + proposta em 2 reuniões, e implementação junto à seguradora para execução sólida.',
      ],
    },
    services: [
      { icon: ICONS.Empresa, title: 'Proprietários de empresas e sociedades', desc: 'Projetamos esquemas de proteção baseados em um **capital segurado não penhorável**, sem período de carência, que pode representar o valor total da empresa ou de suas participações societárias. A solução se adapta à estrutura societária e pode incluir sócios, diretores ou pessoas-chave.' },
      { icon: ICONS.Rentabilidad, title: 'Proprietários de comércios', desc: 'Para negócios onde a operação depende diretamente do proprietário, projetamos uma estrutura de proteção orientada à **continuidade operacional:** previsibilidade diante de imprevistos, proteção do valor construído e um esquema claro para não improvisar quando o comércio precisa de estabilidade.' },
      { icon: ICONS.Contrato, title: 'Profissionais independentes', desc: 'Estruturamos uma proteção patrimonial estratégica com foco no **planejamento de aposentadoria**: um esquema em USD que constrói um **fundo de aposentadoria**.' },
    ],
    faq: { h2: 'Perguntas Frequentes' },
    contacto: {
      h2: 'Contato',
      subtitle: 'Agende uma Consulta Confidencial',
      formH3: 'Formulário de Contato',
      meetingH3: 'Agende sua Reunião',
      meetingBody: 'Estamos prontos para assessorá-lo de forma personalizada!',
      meetingCta: 'Agende agora',
      infoH3: 'Informações de Contato',
      labels: { location: 'Localização', email: 'Email', phone: 'Telefone', hours: 'Horário', hoursValue: 'Segunda a Sexta: 8:00 às 20:00 | Sábados: 8:00 às 12:00' },
    },
    cta: {
      h2: 'Pronto para proteger seu patrimônio?',
      body: 'Agende sua consulta exclusiva com nossos especialistas e descubra como podemos ajudá-lo com uma proposta clara, confidencial e sob medida.',
      button: 'Agende sua consulta',
    },
  },

  en: {
    nosotros: {
      h2: 'About Us',
      body: [
        'At ASEGURATE, we are specialists in **strategic asset protection** for business owners, partnerships, shops, and independent professionals.',
        'We design protection structures intended to anticipate risks, organize business continuity, and safeguard the value of what has been built.',
        'We work with an **exclusive and confidential** approach, combining personalized analysis, legal soundness, and clear execution: diagnosis, proposal, and definition.',
      ],
      beneficiosH2: 'Benefits —',
      misionH3: 'Our mission',
      misionBody: [
        'Our mission is to guarantee the assets of those who build businesses—**owners, partners, merchants, and independent professionals**—by anticipating risks with solid, confidential, and sustainable structures.',
        'We support those who lead and sustain their activities in making strategic decisions to guarantee **continuity, patrimonial order, and long-term vision**, with a clear and tailored process.',
      ],
    },
    features: [
      { icon: ICONS.Seguridad, title: 'Strategic Protection', desc: 'Solutions designed to protect your business assets with maximum legal security.' },
      { icon: ICONS.Exclusividad, title: 'Exclusivity', desc: 'Personalized and confidential service for a select group of clients.' },
      { icon: ICONS.Juridico, title: 'Legal Strength', desc: 'Backed by robust legal frameworks that guarantee the intangibility of your assets.' },
      { icon: ICONS.Innovacion, title: 'Long-term Vision', desc: 'Protection strategies designed for the future of your company.' },
    ],
    benefits: [
      { icon: ICONS.Seguridad, title: 'Non-seizable insured capital', desc: 'Safeguards the value of your company or corporate shares under a structure designed to protect your assets.' },
      { icon: ICONS.Exclusividad, title: 'No waiting period', desc: 'Coverage begins right from the start. A solution designed to act when the business needs it, without unnecessary delays.' },
      { icon: ICONS.Juridico, title: 'Profitable fund in USD', desc: 'In addition to protecting, the capital goes to a profitable fund in dollars, combining backing and planning.' },
      { icon: ICONS.Innovacion, title: 'Personalized and confidential design', desc: 'Every case is unique. We analyze your structure and objectives to design a tailored proposal, in a private and professional process.' },
    ],
    servicios: {
      h2: 'Services',
      subtitle: 'Asset Protection Solutions',
      coverageH3: 'Exclusive Backing',
      coveragePoints: [
        '**Strategic and preventive approach:** we do not react to risk; we anticipate it and design an asset structure.',
        '**Custom design:** the proposal is built based on your corporate structure, objectives, and actual exposure level.',
        '**Confidentiality and premium service:** private evaluation, open communication, and professional support.',
        '**Clear process:** diagnosis + proposal in 2 meetings, and implementation working alongside the insurer for solid execution.',
      ],
    },
    services: [
      { icon: ICONS.Empresa, title: 'Business and corporate owners', desc: 'We design protection schemes based on **non-seizable insured capital**, with no waiting period, which can represent the total value of the company or its corporate shares. The solution adapts to the corporate structure and can include partners, directors, or key personnel.' },
      { icon: ICONS.Rentabilidad, title: 'Shop owners', desc: 'For businesses where operation directly depends on the owner, we design a protection structure oriented towards **operational continuity:** predictability in the face of unforeseen events, protection of the built value, and a clear scheme to avoid improvising when the business needs stability.' },
      { icon: ICONS.Contrato, title: 'Independent professionals', desc: 'We structure strategic asset protection focused on **retirement planning**: a scheme in USD that builds a **retirement fund**.' },
    ],
    faq: { h2: 'Frequently Asked Questions' },
    contacto: {
      h2: 'Contact',
      subtitle: 'Schedule a Confidential Consultation',
      formH3: 'Contact Form',
      meetingH3: 'Schedule your Meeting',
      meetingBody: 'We are ready to provide you with personalized advice!',
      meetingCta: 'Schedule now',
      infoH3: 'Contact Information',
      labels: { location: 'Location', email: 'Email', phone: 'Phone', hours: 'Hours', hoursValue: 'Monday to Friday: 8:00 AM to 8:00 PM | Saturdays: 8:00 AM to 12:00 PM' },
    },
    cta: {
      h2: 'Ready to protect your assets?',
      body: 'Schedule your exclusive consultation with our specialists and discover how we can help you with a clear, confidential, and tailored proposal.',
      button: 'Schedule your consultation',
    },
  },
}
const contactDetails = (labels: { location: string; email: string; phone: string; hours: string; hoursValue: string }) => [
  { icon: <MapPinIcon />, label: labels.location, value: 'Av. Franklin Delano Roosevelt 61, Punta del Este, Departamento de Maldonado, Uruguay' },
  { icon: <MailIcon />, label: labels.email, value: 'contacto@somosasegurate.com' },
  { icon: <PhoneIcon />, label: labels.phone, value: '+598 93 300 617' },
  { icon: null, label: labels.hours, value: labels.hoursValue },
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
          {/* Intro */}
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-6 text-[#C6A23A]">{t.nosotros.h2}</h2>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              {t.nosotros.body.map((p, i) => (
                <RichText key={i} text={p} className="text-lg leading-relaxed text-white/80" />
              ))}
            </div>
          </div>

          {/* Beneficios heading */}
          {/* <h3 className="font-bold text-2xl text-white mb-8">{t.nosotros.beneficiosH2}</h3> */}

          {/* Feature cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {t.benefits.map((f) => (
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
            <div className="flex flex-col gap-4">
              {t.nosotros.misionBody.map((p, i) => (
                <RichText key={i} text={p} className="text-lg leading-relaxed max-w-2xl mx-auto text-white/80" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section id="servicios" className="py-20" style={{ backgroundColor: '#273050' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-4 text-[#C6A23A]">{t.servicios.h2}</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {t.services.map((s, i) => (
              <div
                key={s.title}
                className="w-full sm:w-[calc(50%-1rem)] rounded-[14px] p-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div
                  className="w-14 h-14 rounded-[10px] flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(198,162,58,0.15)' }}
                >
                  <img src={s.icon} alt="" className="w-7 h-7" style={{ filter: GOLD_FILTER }} />
                </div>
                <h3 className="font-semibold text-2xl mb-3 text-white">{s.title}</h3>
                <RichText key={i} text={s.desc} className="text-lg leading-relaxed text-white/75" />
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
              {t.servicios.coveragePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#C6A23A] shrink-0" />
                  <RichText text={point} className="text-lg leading-relaxed text-white/80" />
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
