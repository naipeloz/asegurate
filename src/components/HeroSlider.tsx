'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const AUTOPLAY_MS = 6000

interface Slide {
  badge: string
  title: string
  body: string[]
}

// ─── Spanish slides ──────────────────────────────────────────────────────────
const slidesEs: Slide[] = [
  {
    badge: 'Empresas y sociedades',
    title: 'En Uruguay muchos empresarios construyen patrimonio pero pocos lo respaldan estratégicamente.\n Asegurate nace para cambiar eso.',
    body: [
      'Somos la primera empresa en Uruguay especializada en blindaje empresarial a través de estructuras aseguradas.',
    ],
  },
  {
    badge: 'Comercios',
    title: 'Sabemos que detrás de cada comercio hay años de esfuerzo. Que un imprevisto no ponga en riesgo todo lo que construiste. ',
    body: [
      'Nosotros nos ocupamos de eso.',
    ],
  },
  {
    badge: 'Trabajadores independientes',
    title: 'Trabajas por tu cuenta.\n Tu respaldo también tiene que depender de vos. ',
    body: [
      'Ser independiente no significa estar solo. Respaldá tu actividad y garantizá tu retiro jubilatorio.	',
    ],
  },
  {
    badge: 'Respaldo',
    title: 'La confianza se construye con trayectoria.',
    body: [
      'Tu futuro, respaldado por 30 años de experiencia.',
    ],
  },
]

// ─── Portuguese slides ───────────────────────────────────────────────────────
const slidesPt: Slide[] = [
  {
    badge: 'Empresas e sociedades',
    title: 'No Uruguai, muitos empresários constroem patrimônio, mas poucos o protegem estrategicamente.\nA Asegurate nasce para mudar isso.',
    body: [
      'Somos a primeira empresa no Uruguai especializada em blindagem empresarial através de estruturas seguradas.',
    ],
  },
  {
    badge: 'Comércios',
    title: 'Sabemos que por trás de cada comércio há anos de esforço. Que um imprevisto não coloque em risco tudo o que você construiu. ',
    body: [
      'Nós cuidamos disso.',
    ],
  },
  {
    badge: 'Trabalhadores independentes',
    title: 'Você trabalha por conta própria.\nSeu respaldo também tem que depender de você. ',
    body: [
      'Ser independente não significa estar sozinho. Respalde sua atividade e garanta sua aposentadoria.',
    ],
  },
  {
    badge: 'Respaldo',
    title: 'A confiança é construída com trajetória.',
    body: [
      'Seu futuro, respaldado por 30 anos de experiência.',
    ],
  },
]

// ─── English slides ──────────────────────────────────────────────────────────
const slidesEn: Slide[] = [
  {
    badge: 'Companies and corporations',
    title: 'In Uruguay, many entrepreneurs build wealth but few protect it strategically.\nAsegurate is born to change that.',
    body: [
      'We are the first company in Uruguay specializing in corporate protection through insured structures.',
    ],
  },
  {
    badge: 'Businesses',
    title: 'We know that behind every business there are years of effort. Don\'t let an unforeseen event put everything you\'ve built at risk. ',
    body: [
      'We take care of that.',
    ],
  },
  {
    badge: 'Independent workers',
    title: 'You work for yourself.\nYour backup also has to depend on you. ',
    body: [
      'Being independent doesn\'t mean being alone. Back your activity and guarantee your retirement.',
    ],
  },
  {
    badge: 'Backing',
    title: 'Trust is built with a track record.',
    body: [
      'Your future, backed by 30 years of experience.',
    ],
  },
]



const CALENDLY_URL = 'https://calendly.com/somosasegurate'

const discoverLabels = { es: 'Descubrí más', pt: 'Descubra mais', en: 'Discover more' }
const ctaLabels = { es: 'Agendá tu consulta', pt: 'Agende sua consulta', en: 'Schedule a consultation' }
const ctaContact = { es: 'Contactanos', pt: 'Contate-nos', en: 'Contact us' }

// ─── Icons ───────────────────────────────────────────────────────────────────
function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function HeroSlider() {
  const { lang } = useLanguage()
  const slides = lang === 'es' ? slidesEs : lang === 'pt' ? slidesPt : slidesEn

  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback(
    (idx: number) => {
      if (timerRef.current) clearTimeout(timerRef.current)
      setCurrent((idx + slides.length) % slides.length)
      setAnimKey((k) => k + 1)
    },
    [slides.length]
  )

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(goNext, AUTOPLAY_MS)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, paused, goNext])

  // Reset to first slide when language changes
  useEffect(() => {
    setCurrent(0)
    setAnimKey((k) => k + 1)
  }, [lang])

  const slide = slides[current]

  return (
    <div
      className="relative w-full overflow-hidden bg-[#040C1F]"
      style={{ height: 'calc(100vh - 5rem)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Slide content */}
      <div
        key={animKey}
        className="hero-slide-enter relative h-full flex md:items-center justify-center text-center"
      >
        <div className="w-full max-w-[1600px] mx-auto px-8 lg:px-16 flex flex-col items-center">
          <div className="w-full flex flex-col items-center pt-2 md:pt-8 md:pt-0">
            {/* Logo */}
            <img
              src="/brand/logo/Asegurate_Horizontal_Tagline.svg"
              alt="Asegurate"
              className="h-18 md:h-38 md:h-56 mb-2 md:mb-6 sm:block"
            />

            {/* Fixed-height container to prevent layout shift */}
            <div className="flex flex-col items-center h-[320px] md:h-[280px] w-[280px] md:w-full mb-8">
              {/* Badge (always at top) */}
              <div className="shrink-0 mb-2 mdmb-6">
                <span
                  className="inline-flex items-center gap-2 text-md font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm border"
                  style={{
                    backgroundColor: 'rgba(198,162,58,0.18)',
                    borderColor: 'rgba(198,162,58,0.45)',
                    color: '#f0d98a',
                  }}
                >
                  {current === 0 && <img src="/brand/icons/Empresa.svg" alt="" className="w-4 h-4" style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(21%) saturate(996%) hue-rotate(345deg) brightness(97%) contrast(92%)' }} />}
                  {current === 1 && <img src="/brand/icons/Comercio.svg" alt="" className="w-4 h-4" style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(21%) saturate(996%) hue-rotate(345deg) brightness(97%) contrast(92%)' }} />}
                  {current === 2 && <img src="/brand/icons/Innovacion.svg" alt="" className="w-4 h-4" style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(21%) saturate(996%) hue-rotate(345deg) brightness(97%) contrast(92%)' }} />}
                  {current === 3 && <img src="/brand/icons/Seguridad.svg" alt="" className="w-4 h-4" style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(21%) saturate(996%) hue-rotate(345deg) brightness(97%) contrast(92%)' }} />}
                  {slide.badge}
                </span>
              </div>

              {/* Title & Body Container (centered in remaining space) */}
              <div className="flex-1 flex flex-col justify-center items-center w-full">
                {/* Title */}
                <h1 className="text-white font-bold text-md md:text-2xl lg:text-5xl text-xl leading-tight mb-5 whitespace-pre-line text-center w-full">
                  {slide.title}
                </h1>

                {/* Body paragraphs */}
                <div className="flex flex-col gap-3 items-center w-full">
                  {slide.body.map((p, i) => (
                    <p key={i} className="text-base text-xs md:text-lg lg:text-lg leading-relaxed max-w-[1000px] text-center" style={{ color: 'rgba(255,255,255,0.80)' }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-[-30px] md:mt-4 justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold text-sm lg:text-base px-5 py-3.5 rounded-[10px] shadow-lg transition-colors"
                style={{ backgroundColor: '#C6A23A', color: '#040C1F' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#816828')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C6A23A')}
              >
                <CalendarIcon />
                {ctaLabels[lang]}
              </a>
              <a
                href="/#contacto"
                className="font-semibold text-sm lg:text-base text-white border-2 border-white/60 px-5 py-3.5 rounded-[10px] hover:bg-white/10 transition-colors"
              >
                {ctaContact[lang]}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={goPrev}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/35 transition-colors flex items-center justify-center border border-white/30"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={goNext}
        aria-label="Siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/35 transition-colors flex items-center justify-center border border-white/30"
      >
        <ChevronRight />
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-7' : 'w-2 hover:bg-white/70'}`}
            style={{ backgroundColor: i === current ? '#C6A23A' : 'rgba(255,255,255,0.45)' }}
          />
        ))}
      </div>

      {/* "Descubrí más" scroll indicator */}
      <button
        onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-2 md:bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 group"
        aria-label={discoverLabels[lang]}
      >
        <span
          className="text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          {discoverLabels[lang]}
        </span>
        <span className="animate-bounce" style={{ color: 'rgba(255,255,255,0.55)' }}>
          <ChevronDown />
        </span>
      </button>
    </div>
  )
}
