import type { Metadata } from 'next'
import { BackToTop, Footer, Header, ScrollPositionBar } from '@/components/common/layout'
import { IBM_Plex_Serif, Inter, JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'sonner'

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

export const metadata: Metadata = {
  title: 'Zhuoran (Elara) Liu | Portfolio',
  description: 'Elara Liu\'s portfolio website',
  keywords: 'portfolio, elara, zhuoran, Liu',
  creator: 'Elara Liu',
  publisher: 'Elara Liu',
  authors: { name: 'Elara Liu', url: 'https://zla.app' },
  alternates: { canonical: 'https://zla.app' },
  // ! Remember to remove this line when deploying
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    title: 'Zhuoran (Elara) Liu | Portfolio',
    description: 'Elara Liu\'s portfolio website',
    url: 'https://zla.app',
    siteName: 'Zhuoran (Elara) Liu | Portfolio',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zhuoran (Elara) Liu | Portfolio',
    description: 'Elara Liu\'s portfolio website',
  },
  other: {},
}

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
        <Toaster position="top-center" richColors />
        <main className="grow mt-20 px-4 sm:px-6 motion-safe:animate-mask-reveal">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
