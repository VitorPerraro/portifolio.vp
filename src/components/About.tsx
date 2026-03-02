'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const { t } = useLanguage()
  return (
    <section
      id="about"
      className="relative px-4 py-24 md:px-8 lg:px-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p variants={item} className="font-syne text-2xl font-thin tracking-tighter text-[var(--fg)] md:text-3xl">
          {t.about.tagline1}
        </motion.p>
        <motion.p variants={item} className="mt-2 font-syne text-2xl font-thin tracking-tighter text-electric md:text-3xl">
          {t.about.tagline2}
        </motion.p>
      </motion.div>
    </section>
  )
}
