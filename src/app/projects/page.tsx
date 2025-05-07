import type { Metadata } from 'next'
import ContentCards from '@/components/ContentCards'
import { buildMetadata, buildWebsiteJsonLd } from '@/lib'

export const metadata: Metadata = buildMetadata({
  title: 'Projects | Elara\'s Portfolio',
  description: 'Discover Zhuoran (Elara) Liu’s personal technical projects, design systems, and experiments.',
  keywords: ['project'],
  urlPath: '/projects',
  ogType: 'website',
})

export default async function ProjectPage() {
  const jsonld = buildWebsiteJsonLd({
    title: 'Projects | Elara\'s Portfolio',
    description: 'Collection of personal and open-source projects by Zhuoran (Elara) Liu.',
    keywords: ['project'],
    urlPath: '/projects',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
      <ContentCards page="projects" />
    </>
  )
}
