'use client'

import { createContext, useContext, useState } from 'react'
import { content, type Content } from '@/content/translations'

type Lang = 'pt' | 'en'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: Content
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt')

  const setLang = (l: Lang) => {
    setLangState(l)
  }

  const t = content[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

const defaultLang: Lang = 'pt'
const defaultT = content[defaultLang]

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) return { lang: defaultLang, setLang: () => {}, t: defaultT }
  return ctx
}
