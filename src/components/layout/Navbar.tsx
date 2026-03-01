'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'

const SECTION_IDS = ['inicio', 'nosotros', 'servicios', 'faq', 'contacto']

const navLinksEs = [
  { label: 'Inicio', href: '/#inicio', section: 'inicio' },
  { label: 'Nosotros', href: '/#nosotros', section: 'nosotros' },
  { label: 'Servicios', href: '/#servicios', section: 'servicios' },
  { label: 'Preguntas Frecuentes', href: '/#faq', section: 'faq' },
  { label: 'Contacto', href: '/#contacto', section: 'contacto' },
]

const navLinksPt = [
  { label: 'Início', href: '/#inicio', section: 'inicio' },
  { label: 'Sobre nós', href: '/#nosotros', section: 'nosotros' },
  { label: 'Serviços', href: '/#servicios', section: 'servicios' },
  { label: 'Perguntas Frequentes', href: '/#faq', section: 'faq' },
  { label: 'Contato', href: '/#contacto', section: 'contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('inicio')
  const { lang, toggle } = useLanguage()
  const pathname = usePathname()

  const isHome = pathname === '/'
  const isClientes = pathname === '/clientes-extranjeros'
  const navLinks = lang === 'es' ? navLinksEs : navLinksPt
  const clientesLabel = lang === 'es' ? 'Clientes Extranjeros' : 'Clientes Estrangeiros'

  // Active section via IntersectionObserver — home page only
  useEffect(() => {
    if (!isHome) return

    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        // Trigger zone: middle 10% of viewport
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [isHome])

  const isActive = (section: string) => isHome && activeSection === section

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
      style={{ backgroundColor: 'rgba(4,12,31,0.96)', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo — white variant */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/brand/logo/Asegurate_Horizontal_Blanco.svg"
            alt="Asegúrate"
            className="h-9"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={link.href}
              className={`px-3.5 py-2 rounded-[10px] text-sm transition-colors whitespace-nowrap ${
                isActive(link.section)
                  ? 'font-semibold'
                  : 'font-medium text-white/70'
              }`}
              style={
                isActive(link.section)
                  ? { backgroundColor: 'rgba(198,162,58,0.15)', color: '#C6A23A' }
                  : undefined
              }
              onMouseEnter={(e) => {
                if (!isActive(link.section)) {
                  e.currentTarget.style.backgroundColor = 'rgba(198,162,58,0.10)'
                  e.currentTarget.style.color = '#C6A23A'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.section)) {
                  e.currentTarget.style.backgroundColor = ''
                  e.currentTarget.style.color = ''
                }
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Clientes Extranjeros */}
          <Link
            href="/clientes-extranjeros"
            className="px-3.5 py-2 rounded-[10px] text-sm font-semibold transition-colors whitespace-nowrap ml-1"
            style={
              isClientes
                ? { backgroundColor: 'rgba(198,162,58,0.20)', color: '#C6A23A' }
                : { backgroundColor: 'rgba(198,162,58,0.12)', color: '#C6A23A' }
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(198,162,58,0.25)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isClientes
                ? 'rgba(198,162,58,0.20)'
                : 'rgba(198,162,58,0.12)'
            }}
          >
            {clientesLabel}
          </Link>

          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label={lang === 'es' ? 'Mudar para Português' : 'Cambiar a Español'}
            title={lang === 'es' ? 'Mudar para Português' : 'Cambiar a Español'}
            className="flex items-center gap-1.5 px-3 py-2 rounded-[10px] text-sm font-semibold transition-colors ml-1 border"
            style={{ color: 'rgba(255,255,255,0.70)', borderColor: 'rgba(255,255,255,0.15)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(198,162,58,0.12)'
              e.currentTarget.style.color = '#C6A23A'
              e.currentTarget.style.borderColor = 'rgba(198,162,58,0.40)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = ''
              e.currentTarget.style.color = 'rgba(255,255,255,0.70)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="uppercase tracking-wide">{lang === 'es' ? 'PT' : 'ES'}</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'rgba(255,255,255,0.85)' }} />
          <span className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'rgba(255,255,255,0.85)' }} />
          <span className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'rgba(255,255,255,0.85)' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t px-6 py-4 flex flex-col gap-1"
          style={{ backgroundColor: '#040C1F', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-[10px] text-sm transition-colors ${
                isActive(link.section) ? 'font-semibold' : 'font-medium text-white/70'
              }`}
              style={
                isActive(link.section)
                  ? { backgroundColor: 'rgba(198,162,58,0.15)', color: '#C6A23A' }
                  : undefined
              }
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/clientes-extranjeros"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 rounded-[10px] text-sm font-semibold transition-colors"
            style={
              isClientes
                ? { backgroundColor: 'rgba(198,162,58,0.20)', color: '#C6A23A' }
                : { color: '#C6A23A' }
            }
          >
            {clientesLabel}
          </Link>
          <div className="border-t mt-2 pt-3 px-1" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <button
              onClick={() => { toggle(); setMenuOpen(false) }}
              className="flex items-center gap-2 px-3 py-2 rounded-[10px] text-sm font-semibold border transition-colors"
              style={{ color: 'rgba(255,255,255,0.70)', borderColor: 'rgba(255,255,255,0.15)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {lang === 'es' ? 'Mudar para Português' : 'Cambiar a Español'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
