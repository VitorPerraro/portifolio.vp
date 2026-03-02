import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import GrainOverlay from '@/components/GrainOverlay'
import ParticleScene from '@/components/ParticleScene'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vitor Perraro Rosa | Full Stack Developer',
  description: 'Portfólio de Vitor Perraro Rosa. Desenvolvedor Full Stack e especialista Front-end. Disponível para oportunidades como Desenvolvedor Júnior.',
  keywords: 'desenvolvedor, full stack, front-end, React, Next.js, portfólio',
  authors: [{ name: 'Vitor Perraro Rosa' }],
}

export const viewport = { width: 'device-width', initialScale: 1 }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',t==='light'?false:t==='dark'||(!t&&d));})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)] antialiased">
        <Providers>
          <ParticleScene />
          <GrainOverlay />
          {children}
        </Providers>
      </body>
    </html>
  )
}
