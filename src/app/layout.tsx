import type { Metadata } from 'next'
import { BackToTop, Footer, Header, ScrollPositionBar } from '@/components/common/layout'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-roboto',
  display: 'swap',
  preload: true,
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elara Liu | Portfolio',
  description: 'Elara Liu\'s portfolio website',
  // ! Remember to remove this line when deploying
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} font-sans flex max-h-full min-h-screen flex-col antialiased`}
      >
        <ScrollPositionBar />
        <BackToTop />
        <Header />
        <main className="grow mt-20 motion-safe:animate-fade-in-down">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
