'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

function RippleButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600)
  }

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl border border-electric bg-electric/10 px-8 py-4 font-medium text-electric transition-colors hover:bg-electric/20"
    >
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="absolute h-4 w-4 rounded-full bg-electric/40"
          style={{ left: r.x, top: r.y, x: '-50%', y: '-50%' }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 15, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
      {children}
    </motion.a>
  )
}

export default function Contact() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="relative px-4 py-24 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="font-syne text-2xl font-thin tracking-tighter text-[var(--fg)] md:text-3xl">
          {t.contact.headline}
        </p>
        <p className="mt-2 text-[var(--fg)]/80">{t.contact.cta}</p>
        <div className="mt-10">
          <RippleButton href={`mailto:${t.contact.email}`}>
            {t.contact.button}
          </RippleButton>
        </div>
        <p className="mt-8 text-sm text-[var(--fg)]/50">© {new Date().getFullYear()} Vitor Perraro Rosa</p>
      </motion.div>
    </footer>
  )
}
