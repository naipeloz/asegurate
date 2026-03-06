'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const faqs = {
  es: [
    {
      question: '¿Por qué Asegurate?',
      answer: 'Pioneros en Uruguay en combinar respaldo empresarial y crecimiento patrimonial en dólares, con el respaldo de tres décadas de trayectoria.',
    },
    {
      question: '¿A quién está dirigido este respaldo?',
      answer: 'A dueños de empresas, sociedades, profesionales independientes y comerciantes que quieren respaldar el valor de su actividad y transformar sus ingresos actuales en un fondo sólido en dólares para el futuro.',
    },
    {
      question: '¿Qué pasaría con tu empresa si mañana vos no estuvieras?',
      answer: 'Asegurate garantiza el valor económico de tu actividad para que tu patrimonio y tu familia no queden expuestos ante imprevistos.',
    },
    // {
    //   question: '¿Qué tipo de respaldo ofrecemos?',
    //   answer: 'Ofrecemos un capital asegurado que brinda protección económica ante lesiones, interrupciones de la actividad y permite planificar el retiro jubilatorio.',
    // },
    {
      question: '¿El capital está disponible desde el inicio?',
      answer: 'Sí. El capital asegurado está disponible desde el inicio y es un capital asegurado no embargable.',
    },
    {
      question: '¿Estás convirtiendo el éxito de hoy en tranquilidad futura?',
      answer: 'Muchos empresarios facturan bien, pero pocos transforman esos ingresos en un respaldo sólido en dólares. Asegurate te permite  respaldar el valor de tu actividad mientras construís patrimonio real para tu retiro. Si querés saber cómo aplicarlo a tu empresa, coordinemos una reunión personalizada.',
    },
    // {
    //   question: '¿El capital es embargable?',
    //   answer: 'No. El capital asegurado es no embargable, ofreciendo mayor seguridad patrimonial.',
    // },
  ],
  pt: [
    {
      question: 'Por que Asegurate?',
      answer: 'Pioneiros no Uruguai em combinar respaldo empresarial e crescimento patrimonial em dólares, com o respaldo de três décadas de trajetória.',
    },
    {
      question: 'A quem se destina este respaldo?',
      answer: 'A donos de empresas, sociedades, profissionais independentes e comerciantes que desejam respaldar o valor de sua atividade e transformar seus rendimentos atuais em um fundo sólido em dólares para o futuro.',
    },
    {
      question: 'O que aconteceria com a sua empresa se você não estivesse aqui amanhã?',
      answer: 'A Asegurate garante o valor econômico da sua atividade para que o seu patrimônio e a sua família não fiquem expostos diante de imprevistos.',
    },
    // {
    //   question: 'Que tipo de respaldo oferecemos?',
    //   answer: 'Oferecemos um capital segurado que proporciona proteção financeira contra lesões, interrupções da atividade e permite planejar a aposentadoria.',
    // },
    {
      question: 'O capital está disponível desde o início?',
      answer: 'Sim. O capital segurado está disponível desde o início e é um capital segurado impenhorável.',
    },
    {
      question: 'Você está transformando o sucesso de hoje em tranquilidade futura?',
      answer: 'Muitos empresários faturam bem, mas poucos transformam esses rendimentos em um respaldo sólido em dólares. A Aseguráte permite respaldar o valor de sua atividade enquanto você constrói um patrimônio real para sua aposentadoria. Se quiser saber como aplicá-lo à sua empresa, vamos agendar uma reunião personalizada.',
    },
    // {
    //   question: 'O capital é penhorável?',
    //   answer: 'Não. O capital segurado é impenhorável, oferecendo maior segurança patrimonial.',
    // },
  ],
  en: [
    {
      question: 'Why Asegurate?',
      answer: 'Pioneers in Uruguay in combining business backing and wealth growth in dollars, backed by three decades of experience.',
    },
    {
      question: 'Who is this backing for?',
      answer: 'For business owners, partnerships, independent professionals, and merchants who want to back the value of their activity and transform their current income into a solid dollar fund for the future.',
    },
    {
      question: 'What would happen to your company if you were not here tomorrow?',
      answer: 'Asegurate guarantees the economic value of your activity so that your assets and your family are not exposed to unforeseen events.',
    },
    // {
    //   question: 'What kind of backing do we offer?',
    //   answer: 'We offer an insured capital that provides financial protection against injuries, activity interruptions, and allows for retirement planning.',
    // },
    {
      question: 'Is the capital available from the beginning?',
      answer: 'Yes. The insured capital is available from the beginning and is a non-seizable insured capital.',
    },
    {
      question: 'Are you turning today’s success into future peace of mind?',
      answer: 'Many business owners have good revenue, but few transform that income into solid backing in dollars. Aseguráte allows you to back the value of your activity while building real wealth for your retirement. If you want to know how to apply it to your company, let’s schedule a personalized meeting.',
    },
    // {
    //   question: 'Is the capital seizable?',
    //   answer: 'No. The insured capital is non-seizable, offering greater asset security.',
    // },
  ],
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { lang } = useLanguage()
  const items = faqs[lang]

  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="rounded-[14px] overflow-hidden transition-colors"
            style={{
              backgroundColor: 'rgba(255,255,255,0.07)',
              border: `1px solid ${isOpen ? '#C6A23A' : 'rgba(255,255,255,0.12)'}`,
            }}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-medium text-base pr-4 text-white">
                {faq.question}
              </span>
              <span
                className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                style={{ color: isOpen ? '#C6A23A' : 'rgba(255,255,255,0.55)' }}
              >
                <ChevronDown />
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
