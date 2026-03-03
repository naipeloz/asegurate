'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const faqs = {
  es: [
    {
      question: '¿A quién está dirigido este respaldo?',
      answer: 'Está pensado para deportistas profesionales que desean proteger su carrera, cubrir imprevistos y planificar su futuro económico.',
    },
    {
      question: '¿Qué tipo de respaldo ofrece?',
      answer: 'Ofrece un capital asegurado que brinda protección económica ante lesiones, interrupciones de la actividad y permite planificar el retiro jubilatorio.',
    },
    {
      question: '¿El deportista puede seguir compitiendo normalmente?',
      answer: 'Sí. El respaldo acompaña la carrera deportiva sin interferir en la actividad ni en el rendimiento.',
    },
    {
      question: '¿El capital está disponible desde el inicio?',
      answer: 'Sí. La cobertura es sin período de carencia, brindando protección desde el primer momento.',
    },
    {
      question: '¿El capital es embargable?',
      answer: 'No. El capital asegurado es no embargable, ofreciendo mayor seguridad patrimonial.',
    },
    {
      question: '¿Se adapta a cada disciplina deportiva?',
      answer: 'Sí. Las soluciones son personalizadas según el deporte, nivel de competencia y etapa de la carrera.',
    },
    {
      question: '¿Sirve también para el retiro del deportista?',
      answer: 'Sí. Permite planificar un retiro jubilatorio una vez finalizada la carrera deportiva.',
    },
  ],
  pt: [
    {
      question: 'A quem se destina este respaldo?',
      answer: 'É pensado para atletas profissionais que desejam proteger sua carreira, cobrir imprevistos e planejar seu futuro financeiro.',
    },
    {
      question: 'Que tipo de respaldo oferece?',
      answer: 'Oferece um capital segurado que proporciona proteção financeira contra lesões, interrupções da atividade e permite planejar a aposentadoria.',
    },
    {
      question: 'O atleta pode continuar competindo normalmente?',
      answer: 'Sim. O respaldo acompanha a carreira esportiva sem interferir na atividade ou no desempenho.',
    },
    {
      question: 'O capital está disponível desde o início?',
      answer: 'Sim. A cobertura é sem período de carência, oferecendo proteção desde o primeiro momento.',
    },
    {
      question: 'O capital é penhorável?',
      answer: 'Não. O capital segurado é impenhorável, oferecendo maior segurança patrimonial.',
    },
    {
      question: 'Adapta-se a cada disciplina esportiva?',
      answer: 'Sim. As soluções são personalizadas de acordo com o esporte, nível de competição e fase da carreira.',
    },
    {
      question: 'Serve também para a aposentadoria do atleta?',
      answer: 'Sim. Permite planejar uma aposentadoria após o término da carreira esportiva.',
    },
  ],
  en: [
    {
      question: 'Who is this backing for?',
      answer: 'It is designed for professional athletes who want to protect their career, cover unforeseen events, and plan their financial future.',
    },
    {
      question: 'What kind of backing does it offer?',
      answer: 'It offers an insured capital that provides financial protection against injuries, activity interruptions, and allows for retirement planning.',
    },
    {
      question: 'Can the athlete continue competing normally?',
      answer: 'Yes. The backing accompanies the sports career without interfering with the activity or performance.',
    },
    {
      question: 'Is the capital available from the beginning?',
      answer: 'Yes. The coverage has no waiting period, providing protection from the very first moment.',
    },
    {
      question: 'Is the capital seizable?',
      answer: 'No. The insured capital is non-seizable, offering greater asset security.',
    },
    {
      question: 'Does it adapt to each sports discipline?',
      answer: 'Yes. The solutions are personalized according to the sport, level of competition, and stage of the career.',
    },
    {
      question: 'Does it also serve for the athlete\'s retirement?',
      answer: 'Yes. It allows planning for retirement once the sports career is over.',
    },
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
