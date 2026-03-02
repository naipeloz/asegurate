'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const faqs = {
  es: [
    {
      question: '¿Qué tipo de empresas pueden asegurarse?',
      answer: 'Asegúrate trabaja exclusivamente con comercios, empresas y sociedades de todo tipo. Ya sea que tenga una pequeña empresa, una sociedad anónima o un holding empresarial, podemos ofrecerle soluciones personalizadas para proteger su patrimonio.',
    },
    {
      question: '¿Cuál es el monto máximo asegurado?',
      answer: 'Aseguramos capitales de hasta USD 1.200.000 con garantía de no embargo. Este límite está diseñado para cubrir las necesidades de la mayoría de nuestros clientes empresariales.',
    },
    {
      question: '¿Qué significa "capital no embargable"?',
      answer: 'Un capital no embargable es aquel que, por ley o estructura jurídica, no puede ser incautado ni utilizado para satisfacer deudas de terceros. Nuestros seguros están estructurados para garantizar esta protección legal de sus activos.',
    },
    {
      question: '¿En qué zonas operan?',
      answer: 'Brindamos atención personalizada principalmente en Punta del Este y zonas aledañas del Este uruguayo. Sin embargo, también atendemos clientes de todo Uruguay y del extranjero de forma remota o con visitas coordinadas.',
    },
    {
      question: '¿Cómo es el proceso de contratación?',
      answer: 'El proceso comienza con una consulta confidencial donde evaluamos sus necesidades. Luego presentamos una propuesta personalizada y, una vez aprobada, gestionamos toda la documentación necesaria con absoluta discreción.',
    },
  ],
  pt: [
    {
      question: 'Que tipo de empresas podem ser seguradas?',
      answer: 'A Asegurate trabalha exclusivamente com comércios, empresas e sociedades de todos os tipos. Seja uma pequena empresa, uma sociedade anônima ou um holding empresarial, podemos oferecer soluções personalizadas para proteger seu patrimônio.',
    },
    {
      question: 'Qual é o valor máximo segurado?',
      answer: 'Asseguramos capitais de até USD 1.200.000 com garantia de não penhora. Este limite foi desenvolvido para atender às necessidades da maioria dos nossos clientes empresariais.',
    },
    {
      question: 'O que significa "capital não penhorável"?',
      answer: 'Um capital não penhorável é aquele que, por lei ou estrutura jurídica, não pode ser apreendido nem utilizado para satisfazer dívidas de terceiros. Nossos seguros estão estruturados para garantir essa proteção legal dos seus ativos.',
    },
    {
      question: 'Em quais regiões vocês operam?',
      answer: 'Prestamos atendimento personalizado principalmente em Punta del Este e regiões vizinhas do leste uruguaio. No entanto, também atendemos clientes de todo o Uruguai e do exterior de forma remota ou com visitas coordenadas.',
    },
    {
      question: 'Como é o processo de contratação?',
      answer: 'O processo começa com uma consulta confidencial onde avaliamos suas necessidades. Em seguida, apresentamos uma proposta personalizada e, uma vez aprovada, gerenciamos toda a documentação necessária com absoluta discrição.',
    },
  ],
  en: [
    {
      question: 'What types of companies can be insured?',
      answer: 'Asegúrate works exclusively with businesses, companies and corporations of all types. Whether you have a small business, a corporation or a business holding, we can offer personalized solutions to protect your assets.',
    },
    {
      question: 'What is the maximum insured amount?',
      answer: 'We insure capital up to USD 1,200,000 with a non-seizure guarantee. This limit is designed to meet the needs of most of our corporate clients.',
    },
    {
      question: 'What does "non-seizable capital" mean?',
      answer: 'Non-seizable capital is one that, by law or legal structure, cannot be seized or used to satisfy third-party debts. Our insurance policies are structured to guarantee this legal protection of your assets.',
    },
    {
      question: 'Where do you operate?',
      answer: 'We provide personalized service primarily in Punta del Este and surrounding areas in eastern Uruguay. However, we also serve clients throughout Uruguay and abroad remotely or with coordinated visits.',
    },
    {
      question: 'What is the contracting process?',
      answer: 'The process begins with a confidential consultation where we evaluate your needs. We then present a personalized proposal and, once approved, we handle all necessary documentation with complete discretion.',
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
