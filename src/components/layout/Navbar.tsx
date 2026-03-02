'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage, Lang } from '@/context/LanguageContext'

const SECTION_IDS = ['inicio', 'nosotros', 'servicios', 'faq', 'contacto']

// Menu order: Inicio / Nosotros / Servicios / Clientes Extranjeros / Preguntas Frecuentes / Contacto
const navLinksEs = [
  { label: 'Inicio', href: '/#inicio', section: 'inicio' },
  { label: 'Nosotros', href: '/#nosotros', section: 'nosotros' },
  { label: 'Servicios', href: '/#servicios', section: 'servicios' },
  { label: 'Clientes Extranjeros', href: '/clientes-extranjeros', section: '__clientes__' },
  { label: 'Preguntas Frecuentes', href: '/#faq', section: 'faq' },
  { label: 'Contacto', href: '/#contacto', section: 'contacto' },
]

const navLinksPt = [
  { label: 'Início', href: '/#inicio', section: 'inicio' },
  { label: 'Sobre nós', href: '/#nosotros', section: 'nosotros' },
  { label: 'Serviços', href: '/#servicios', section: 'servicios' },
  { label: 'Clientes Estrangeiros', href: '/clientes-extranjeros', section: '__clientes__' },
  { label: 'Perguntas Frequentes', href: '/#faq', section: 'faq' },
  { label: 'Contato', href: '/#contacto', section: 'contacto' },
]

const navLinksEn = [
  { label: 'Home', href: '/#inicio', section: 'inicio' },
  { label: 'About Us', href: '/#nosotros', section: 'nosotros' },
  { label: 'Services', href: '/#servicios', section: 'servicios' },
  { label: 'Foreign Clients', href: '/clientes-extranjeros', section: '__clientes__' },
  { label: 'FAQ', href: '/#faq', section: 'faq' },
  { label: 'Contact', href: '/#contacto', section: 'contacto' },
]

const LANG_LABELS: Record<Lang, string> = { es: 'ES', pt: 'PT', en: 'EN' }
const ALL_LANGS: Lang[] = ['es', 'pt', 'en']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('inicio')
  const { lang, setLang } = useLanguage()
  const pathname = usePathname()

  const isHome = pathname === '/'
  const isClientes = pathname === '/clientes-extranjeros'
  const navLinks = lang === 'es' ? navLinksEs : lang === 'pt' ? navLinksPt : navLinksEn

  // Active section via IntersectionObserver — home page only
  useEffect(() => {
    if (!isHome) return
    const observers: IntersectionObserver[] = []
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [isHome])

  const isLinkActive = (section: string) => {
    if (section === '__clientes__') return isClientes
    return isHome && activeSection === section
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
      style={{ backgroundColor: 'rgba(4,12,31,0.96)', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo — white variant, enlarged */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/brand/logo/Asegurate_Horizontal_Blanco.svg"
            alt="Asegúrate"
            className="h-18"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active = isLinkActive(link.section)
            const isPage = link.href.startsWith('/') && !link.href.startsWith('/#')
            const sharedClass = `px-3 py-2 rounded-[10px] text-sm font-medium transition-colors whitespace-nowrap`

            const activeStyle = { backgroundColor: 'rgba(198,162,58,0.18)', color: '#C6A23A' }
            const defaultStyle = { color: '#C6A23A' }

            const handlers = {
              onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!active) {
                  e.currentTarget.style.backgroundColor = 'rgba(198,162,58,0.10)'
                }
              },
              onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!active) e.currentTarget.style.backgroundColor = ''
              },
            }

            return isPage ? (
              <Link
                key={link.section}
                href={link.href}
                className={`${sharedClass} ${active ? 'font-semibold' : ''}`}
                style={active ? activeStyle : defaultStyle}
                onMouseEnter={handlers.onMouseEnter}
                onMouseLeave={handlers.onMouseLeave}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.section}
                href={link.href}
                className={`${sharedClass} ${active ? 'font-semibold' : ''}`}
                style={active ? activeStyle : defaultStyle}
                onMouseEnter={handlers.onMouseEnter}
                onMouseLeave={handlers.onMouseLeave}
              >
                {link.label}
              </a>
            )
          })}

          {/* Language switcher — 3 compact chips */}
          <div
            className="flex gap-0.5 ml-3 p-1 rounded-[8px]"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
          >
            {ALL_LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-2.5 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wide transition-colors"
                style={
                  lang === l
                    ? { backgroundColor: '#C6A23A', color: '#040C1F' }
                    : { color: 'rgba(255,255,255,0.50)' }
                }
                onMouseEnter={(e) => {
                  if (lang !== l) e.currentTarget.style.color = '#C6A23A'
                }}
                onMouseLeave={(e) => {
                  if (lang !== l) e.currentTarget.style.color = 'rgba(255,255,255,0.50)'
                }}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
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
          {navLinks.map((link) => {
            const active = isLinkActive(link.section)
            const isPage = link.href.startsWith('/') && !link.href.startsWith('/#')
            const sharedClass = `px-4 py-3 rounded-[10px] text-sm transition-colors ${active ? 'font-semibold' : 'font-medium'}`
            const style = active
              ? { backgroundColor: 'rgba(198,162,58,0.18)', color: '#C6A23A' }
              : { color: '#C6A23A' }

            return isPage ? (
              <Link key={link.section} href={link.href} onClick={() => setMenuOpen(false)} className={sharedClass} style={style}>
                {link.label}
              </Link>
            ) : (
              <a key={link.section} href={link.href} onClick={() => setMenuOpen(false)} className={sharedClass} style={style}>
                {link.label}
              </a>
            )
          })}

          {/* Mobile language switcher */}
          <div className="border-t mt-2 pt-3 px-1 flex gap-2" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            {ALL_LANGS.map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMenuOpen(false) }}
                className="px-4 py-2 rounded-[8px] text-sm font-bold uppercase tracking-wide transition-colors border"
                style={
                  lang === l
                    ? { backgroundColor: '#C6A23A', color: '#040C1F', borderColor: '#C6A23A' }
                    : { color: 'rgba(255,255,255,0.60)', borderColor: 'rgba(255,255,255,0.15)' }
                }
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
