'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { useLanguage } from '@/context/LanguageContext'

const navLinks = [
  { id: 'about', key: 'about' as const },
  { id: 'projects', key: 'projects' as const },
  { id: 'skills', key: 'skills' as const },
  { id: 'contact', key: 'contact' as const },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="glass-card mx-4 mt-4 rounded-xl px-4 py-3 md:mx-6 md:px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center justify-center rounded-full bg-transparent p-0 text-[var(--fg)] transition-colors hover:text-electric md:text-2xl"
            aria-label="Logo VPR"
          >
            <img src="/assets/1765562802450.png" alt="VPR" className="h-8 w-8 rounded-full object-cover" />
            <span className="sr-only">VPR</span>
          </button>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  onClick={() => scrollTo(link.id)}
                  label={t.nav[link.key]}
                />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm text-[var(--fg)] transition-colors hover:bg-white/10 hover:text-electric"
              aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <span className={lang === 'pt' ? 'font-medium text-electric' : 'opacity-60'}>PT</span>
              <span className="opacity-40">|</span>
              <span className={lang === 'en' ? 'font-medium text-electric' : 'opacity-60'}>EN</span>
            </button>

            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-[var(--fg)] transition-colors hover:bg-white/10 hover:text-electric"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden rounded p-2 text-[var(--fg)] hover:bg-white/10"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col gap-2 overflow-hidden pt-4 md:hidden"
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="w-full py-2 text-left text-[var(--fg)] hover:text-electric"
                  >
                    {t.nav[link.key]}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

function NavLink({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="group relative py-2 text-sm font-medium text-[var(--fg)] transition-colors hover:text-electric"
    >
      {label}
      <span
        className="absolute bottom-0 left-1/2 h-px w-0 bg-electric transition-all duration-300 group-hover:left-0 group-hover:w-full"
        aria-hidden
      />
    </button>
  )
}
