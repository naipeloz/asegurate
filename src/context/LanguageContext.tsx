'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'es' | 'pt'

interface LanguageContextValue {
  lang: Lang
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'es',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  // Persist preference in localStorage
  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored === 'es' || stored === 'pt') setLang(stored)
  }, [])

  const toggle = () => {
    setLang((prev) => {
      const next: Lang = prev === 'es' ? 'pt' : 'es'
      localStorage.setItem('lang', next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
