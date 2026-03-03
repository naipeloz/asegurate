'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const faqs = {
  es: [
    {
      question: '¿A quién está dirigido este respaldo?',
      answer: 'Este respaldo está dirigido a empresarios, comerciantes y socios que desarrollan o constituyen empresas en Uruguay y desean incorporar estructura patrimonial sobre el valor económico de su inversión. También trabajamos en conjunto con consultoras, estudios contables y jurídicos que asesoran inversores extranjeros que se instalan en el país.',
    },
    {
      question: '¿Qué tipo de respaldo ofrece?',
      answer: 'Ofrece un capital asegurado que brinda protección económica ante lesiones, interrupciones de la actividad y permite planificar el retiro jubilatorio.',
    },
    {
      question: '¿El capital está disponible desde el inicio?',
      answer: 'Sí. La cobertura es sin período de carencia, brindando protección desde el primer momento.',
    },
    {
      question: '¿El capital es embargable?',
      answer: 'No. El capital asegurado es no embargable, ofreciendo mayor seguridad patrimonial.',
    },
  ],
  pt: [
    {
      question: 'A quem se destina este respaldo?',
      answer: 'Este respaldo destina-se a empresários, comerciantes e sócios que desenvolvem ou constituem empresas no Uruguai e desejam incorporar uma estrutura patrimonial sobre o valor econômico do seu investimento. Também trabalhamos em conjunto com consultorias, escritórios de contabilidade e advocacia que assessoram investidores estrangeiros que se instalam no país.',
    },
    {
      question: 'Que tipo de respaldo oferece?',
      answer: 'Oferece um capital segurado que proporciona proteção financeira contra lesões, interrupções da atividade e permite planejar a aposentadoria.',
    },
    {
      question: 'O capital está disponível desde o início?',
      answer: 'Sim. A cobertura é sem período de carência, oferecendo proteção desde o primeiro momento.',
    },
    {
      question: 'O capital é penhorável?',
      answer: 'Não. O capital segurado é impenhorável, oferecendo maior segurança patrimonial.',
    },
  ],
  en: [
    {
      question: 'Who is this backing for?',
      answer: 'This backing is aimed at entrepreneurs, merchants, and partners who develop or establish companies in Uruguay and wish to incorporate an asset structure over the economic value of their investment. We also work together with consulting, accounting, and legal firms that advise foreign investors settling in the country.',
    },
    {
      question: 'What kind of backing does it offer?',
      answer: 'It offers an insured capital that provides financial protection against injuries, activity interruptions, and allows for retirement planning.',
    },
    {
      question: 'Is the capital available from the beginning?',
      answer: 'Yes. The coverage has no waiting period, providing protection from the very first moment.',
    },
    {
      question: 'Is the capital seizable?',
      answer: 'No. The insured capital is non-seizable, offering greater asset security.',
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
