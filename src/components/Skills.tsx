'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()
  const skills = t.skills.items
  const duplicated = [...skills, ...skills]

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 px-4 text-center font-syne text-3xl font-thin tracking-tighter text-[var(--fg)] md:px-8 md:text-4xl"
      >
        {t.skills.title}
      </motion.h2>

      {/* Cyber Security highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-16 flex justify-center px-4"
      >
        <div className="flex items-center gap-3 rounded-2xl border border-electric/50 bg-electric/5 px-6 py-4 shadow-red-glow">
          <motion.span
            animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-electric/20"
          >
            <svg
              className="h-6 w-6 text-electric"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </motion.span>
          <span className="font-syne text-lg font-thin tracking-tighter text-electric">
            {t.skills.cyberSecurity}
          </span>
        </div>
      </motion.div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {duplicated.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="font-syne text-2xl font-thin tracking-tighter text-[var(--fg)]/70 md:text-3xl"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
