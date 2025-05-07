import type { Metadata } from 'next'
import { BackToTop, Footer, Header, ScrollPositionBar } from '@/components/common/layout'
import { buildMetadata } from '@/lib'
import { Analytics } from '@vercel/analytics/next'

import { IBM_Plex_Serif, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-roboto',
  display: 'swap',
  preload: true,
})

const IBMPlexSerif = IBM_Plex_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-serif',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({
  title: 'Zhuoran (Elara) Liu | Academic Portfolio',
  description: 'Zhuoran (Elara) Liu’s academic portfolio featuring research in HCI and Large Language Model, technical projects, and CV.',
  urlPath: '/',
  ogType: 'website',
  image: '/images/profile.webp',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Elara's Portfolio - RSS Feed" />
      <body
        className={`${inter.variable} ${IBMPlexSerif.variable} ${jetBrainsMono.variable} font-sans flex max-h-full min-h-screen flex-col antialiased`}
      >
        <ScrollPositionBar />
        <BackToTop />
        <Header />
        <main className="grow mt-20 px-4 sm:px-6 motion-safe:animate-mask-reveal">
          {children}
        </main>
        <Footer />
        <Analytics mode="production" />
      </body>
    </html>
  )
}
