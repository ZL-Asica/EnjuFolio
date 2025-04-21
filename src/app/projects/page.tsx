import type { Metadata } from 'next'
import ContentCards from '@/components/ContentCards'

export const metadata: Metadata = {
  title: 'Projects | Elara\'s Portfolio',
  description: 'Explore Elara Liu\'s projects, showcasing her skills and creativity in various domains.',
  keywords: 'projects, elara, portfolio, Zhuoran',
  authors: { name: 'Elara Liu', url: 'https://zla.app' },
  openGraph: {
    type: 'article',
    title: 'Projects | Elara\'s Portfolio',
    description: 'Explore Elara Liu\'s projects, showcasing her skills and creativity in various domains.',
    tags: 'projects, elara, portfolio, Zhuoran',
    url: `https://zla.app/projects`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | Elara's Portfolio`,
    description: 'Explore Elara Liu\'s projects, showcasing her skills and creativity in various domains.',
  },
  alternates: { canonical: `https://zla.app/projects` },
}

export default async function ProjectPage() {
  return (
    <ContentCards page="projects" />
  )
}
