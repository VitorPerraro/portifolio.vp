'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true)
      const t = setTimeout(() => setGlitch(false), 200)
      return () => clearTimeout(t)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.2 },
          },
        }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          className="relative mb-6"
        >
          <h1
            className={`font-syne text-4xl font-thin tracking-tighter text-[var(--fg)] md:text-6xl lg:text-7xl ${glitch ? 'glitch' : ''}`}
          >
            {t.hero.name}
          </h1>
          {glitch && (
            <span
              className="glitch-bg absolute left-1/2 top-0 -translate-x-1/2 font-syne text-4xl font-thin tracking-tighter text-electric md:text-6xl lg:text-7xl"
              aria-hidden
            >
              {t.hero.name}
            </span>
          )}
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-12 text-sm tracking-wide text-[var(--fg)]/80 md:text-base"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="relative"
        >
          <div className="border-gradient-red relative overflow-hidden rounded-2xl p-1 shadow-2xl shadow-black/30">
            <div className="relative h-48 w-48 overflow-hidden rounded-xl bg-[var(--fg)]/10 md:h-56 md:w-56">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-electric/5 to-transparent">
                <img src="/assets/1765562802450.png" alt="VPR" className="h-full w-full object-cover" />
              </div>
              <motion.div
                className="absolute left-0 right-0 h-1 bg-electric/80"
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                style={{ boxShadow: '0 0 20px #FF0000' }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
