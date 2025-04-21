import type { Metadata } from 'next'
import ContentCards from '@/components/ContentCards'

export const metadata: Metadata = {
  title: 'Research | Elara\'s Portfolio',
  description: 'Explore Elara Liu\'s research, showcasing her skills and creativity in various domains.',
  keywords: 'research, elara, portfolio, Zhuoran',
  authors: { name: 'Elara Liu', url: 'https://zla.app' },
  openGraph: {
    type: 'article',
    title: 'Research | Elara\'s Portfolio',
    description: 'Explore Elara Liu\'s research, showcasing her skills and creativity in various domains.',
    tags: 'research, elara, portfolio, Zhuoran',
    url: `https://zla.app/research`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Research | Elara's Portfolio`,
    description: 'Explore Elara Liu\'s research, showcasing her skills and creativity in various domains.',
  },
  alternates: { canonical: `https://zla.app/research` },
}

export default async function ResearchPage() {
  return (
    <ContentCards page="research" />
  )
}
