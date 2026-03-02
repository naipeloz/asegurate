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
    title: 'Construiste tu patrimonio.\nAhora protégelo estratégicamente.',
    body: [
      'Somos la primera empresa en Uruguay especializada en blindaje empresarial a través de estructuras aseguradas.',
    ],
  },
  {
    badge: 'Blindaje Empresarial',
    title: 'La protección que tu empresa necesita.',
    body: [
      'En Uruguay muchos empresarios construyen patrimonio pero pocos lo protegen estratégicamente. Asegurate nace para cambiar eso.',
    ],
  },
  {
    badge: 'Comercios',
    title: 'Años de esfuerzo merecen protección real.',
    body: [
      'Sabemos que detrás de cada comercio hay años de esfuerzo. Que un imprevisto no ponga en riesgo todo lo que construiste.',
      'Nosotros nos ocupamos de eso.',
    ],
  },
  {
    badge: 'Respaldo',
    title: 'La confianza se construye con trayectoria.',
    body: [
      'Por eso trabajamos con una compañía con más de 30 años en Uruguay.',
    ],
  },
]

// ─── Portuguese slides ───────────────────────────────────────────────────────
const slidesPt: Slide[] = [
  {
    badge: 'Empresas e sociedades',
    title: 'Você construiu seu patrimônio.\nAgora proteja-o estrategicamente.',
    body: [
      'Somos a primeira empresa no Uruguai especializada em blindagem empresarial através de estruturas seguradas.',
    ],
  },
  {
    badge: 'Blindagem Empresarial',
    title: 'A proteção que sua empresa precisa.',
    body: [
      'No Uruguai, muitos empresários constroem patrimônio, mas poucos o protegem estrategicamente. A Asegurate nasce para mudar isso.',
    ],
  },
  {
    badge: 'Comércios',
    title: 'Anos de esforço merecem proteção real.',
    body: [
      'Sabemos que por trás de cada comércio há anos de esforço. Que um imprevisto não coloque em risco tudo o que você construiu.',
      'Nós cuidamos disso.',
    ],
  },
  {
    badge: 'Respaldo',
    title: 'A confiança se constrói com trajetória.',
    body: [
      'Por isso trabalhamos com uma empresa com mais de 30 anos no Uruguai.',
    ],
  },
]

// ─── English slides ──────────────────────────────────────────────────────────
const slidesEn: Slide[] = [
  {
    badge: 'Companies & Corporations',
    title: 'You built your wealth.\nNow protect it strategically.',
    body: [
      'We are the first company in Uruguay specializing in corporate protection through insured structures.',
    ],
  },
  {
    badge: 'Corporate Protection',
    title: 'The protection your company needs.',
    body: [
      'In Uruguay, many entrepreneurs build wealth but few protect it strategically. Asegurate was created to change that.',
    ],
  },
  {
    badge: 'Businesses',
    title: 'Years of effort deserve real protection.',
    body: [
      'We know that behind every business there are years of hard work. Don\'t let the unexpected put everything at risk.',
      'We take care of that.',
    ],
  },
  {
    badge: 'Track Record',
    title: 'Trust is built through experience.',
    body: [
      'That\'s why we work with a company with over 30 years in Uruguay.',
    ],
  },
]

// Hero background image (Figma placeholder — replace with /public asset for production)
const imgHero = 'https://www.figma.com/api/mcp/asset/9a5cb372-991d-4cf2-b88f-8021998ebd83'

const CALENDLY_URL = 'https://calendly.com/asegurate'

const discoverLabels = { es: 'Descubrí más', pt: 'Descubra mais', en: 'Discover more' }
const ctaLabels     = { es: 'Agenda tu consulta', pt: 'Agende sua consulta', en: 'Schedule a consultation' }
const ctaContact    = { es: 'Contáctanos', pt: 'Contate-nos', en: 'Contact us' }

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
      className="relative w-full overflow-hidden"
      style={{ height: 'calc(100vh - 5rem)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Background image */}
      <img
        src={imgHero}
        alt="Punta del Este"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay — deep navy */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(4,12,31,0.94) 0%, rgba(4,12,31,0.70) 50%, rgba(4,12,31,0.12) 100%)',
        }}
      />

      {/* Slide content */}
      <div
        key={animKey}
        className="hero-slide-enter relative h-full flex items-center"
      >
        <div className="w-full max-w-[1280px] mx-auto px-8 lg:px-16">
          <div className="max-w-[620px]">
            {/* Badge */}
            <span
              className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border"
              style={{
                backgroundColor: 'rgba(198,162,58,0.18)',
                borderColor: 'rgba(198,162,58,0.45)',
                color: '#f0d98a',
              }}
            >
              {slide.badge}
            </span>

            {/* Title */}
            <h1 className="text-white font-bold text-3xl lg:text-5xl leading-tight mb-5 whitespace-pre-line">
              {slide.title}
            </h1>

            {/* Body paragraphs */}
            <div className="flex flex-col gap-3 mb-8">
              {slide.body.map((p, i) => (
                <p key={i} className="text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>
                  {p}
                </p>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
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
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2">
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
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 group"
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
