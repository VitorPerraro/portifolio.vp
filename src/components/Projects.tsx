'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'

const heroImage = '/assets/Screenshot_8.png'

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const spring = { stiffness: 300, damping: 20 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), spring)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), spring)

  const handleMove = (e: React.PointerEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const px = (e.clientX - cx) / rect.width
    const py = (e.clientY - cy) / rect.height
    x.set(px)
    y.set(py)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const [heroHover, setHeroHover] = useState(false)
  // URLs for the highlighted project (projeto destaque)
  const githubUrl = 'https://github.com/VitorPerraro/Denincore-godrive-backup'
  const deployUrl = 'https://denincore-godrive-backup.vercel.app/'

  return (
    <section id="projects" className="relative px-4 py-24 md:px-8 lg:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-syne text-3xl font-thin tracking-tighter text-[var(--fg)] md:text-4xl"
      >
        {t.projects.title}
      </motion.h2>

      {/* Hero Project */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
        onMouseEnter={() => setHeroHover(true)}
        onMouseLeave={() => setHeroHover(false)}
      >
        <a
          href={deployUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir projeto destaque"
          className="relative block aspect-[21/9] w-full overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-electric/0 via-electric/0 to-electric/20"
            animate={{
              background: heroHover
                ? 'linear-gradient(to bottom, rgba(255,0,0,0.15), rgba(255,0,0,0.25), rgba(255,0,0,0.3))'
                : 'linear-gradient(to bottom, transparent, transparent, rgba(255,0,0,0.1))',
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Screenshot do projeto destaque"
              fill
              priority
              className="object-cover opacity-80 contrast-125 grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 flex flex-wrap gap-2 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroHover ? 1 : 0, y: heroHover ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {t.projects.heroProject.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-electric/50 bg-electric/10 px-3 py-1 text-xs font-medium text-electric"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </a>
        <div className="border-t border-white/10 p-6">
          <h3 className="font-syne text-xl font-thin tracking-tighter text-[var(--fg)]">
            {t.projects.heroProject.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--fg)]/70">
            {t.projects.heroProject.description}
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-electric transition-colors hover:underline"
            >
              {t.projects.heroProject.github}
            </a>
            <a
              href={deployUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-electric transition-colors hover:underline"
            >
              {t.projects.heroProject.deploy}
            </a>
          </div>
        </div>
      </motion.div>

      {/* Grid 5 projects */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.slice(0, 6).map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <TiltCard>
              <div className="glass-card border-gradient-red h-full overflow-hidden rounded-xl p-0 transition-shadow hover:shadow-red-glow">
                <div className="relative aspect-video w-full overflow-hidden bg-[var(--fg)]/10">
                  {project.image && project.deploy ? (
                    <a href={project.deploy} target="_blank" rel="noreferrer" className="absolute inset-0 block">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                    </a>
                  ) : project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                    </>
                  ) : null}
                </div>
                <div className="p-4">
                  <h4 className="font-syne text-lg font-thin tracking-tighter text-[var(--fg)]">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-sm text-[var(--fg)]/70">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-electric/40 bg-electric/5 px-2 py-0.5 text-xs text-electric"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-electric hover:underline"
                      >
                        {t.projects.github}
                      </a>
                    )}
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-electric hover:underline"
                      >
                        {t.projects.deploy}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
