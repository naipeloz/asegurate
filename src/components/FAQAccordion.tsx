'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '¿Qué tipo de empresas pueden asegurarse?',
    answer:
      'Asegúrate trabaja exclusivamente con comercios, empresas y sociedades de todo tipo. Ya sea que tenga una pequeña empresa, una sociedad anónima o un holding empresarial, podemos ofrecerle soluciones personalizadas para proteger su patrimonio.',
  },
  {
    question: '¿Cuál es el monto máximo asegurado?',
    answer:
      'Aseguramos capitales de hasta USD 1.200.000 con garantía de no embargo. Este límite está diseñado para cubrir las necesidades de la mayoría de nuestros clientes empresariales.',
  },
  {
    question: '¿Qué significa "capital no embargable"?',
    answer:
      'Un capital no embargable es aquel que, por ley o estructura jurídica, no puede ser incautado ni utilizado para satisfacer deudas de terceros. Nuestros seguros están estructurados para garantizar esta protección legal de sus activos.',
  },
  {
    question: '¿En qué zonas operan?',
    answer:
      'Brindamos atención personalizada principalmente en Punta del Este y zonas aledañas del Este uruguayo. Sin embargo, también atendemos clientes de todo Uruguay y del extranjero de forma remota o con visitas coordinadas.',
  },
  {
    question: '¿Cómo es el proceso de contratación?',
    answer:
      'El proceso comienza con una consulta confidencial donde evaluamos sus necesidades. Luego presentamos una propuesta personalizada y, una vez aprobada, gestionamos toda la documentación necesaria con absoluta discreción.',
  },
]

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="bg-white border rounded-[14px] overflow-hidden transition-colors"
            style={{ borderColor: isOpen ? '#C6A23A' : '#e5e7eb' }}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {/* Brand text: #040C1F for question */}
              <span className="font-medium text-base pr-4" style={{ color: '#040C1F' }}>
                {faq.question}
              </span>
              <span
                className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                style={{ color: isOpen ? '#C6A23A' : '#303E60' }}
              >
                <ChevronDown />
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                {/* Brand text: #303E60 for answer body */}
                <p className="text-base leading-relaxed" style={{ color: '#303E60' }}>
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
