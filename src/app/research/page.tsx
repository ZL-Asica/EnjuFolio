import type { Metadata } from 'next'
import ContentCards from '@/components/ContentCards'
import { buildMetadata, buildWebsiteJsonLd } from '@/lib'

export const metadata: Metadata = buildMetadata({
  title: 'Research | Elara\'s Portfolio',
  description: 'Explore Zhuoran (Elara) Liu’s academic research projects, showcasing her skills and creativity in various domains.',
  keywords: ['research'],
  urlPath: '/research',
  ogType: 'website',
})

export default async function ResearchPage() {
  const jsonld = buildWebsiteJsonLd({
    title: 'Research | Elara\'s Portfolio',
    description: 'A showcase of Zhuoran (Elara) Liu’s past and ongoing research work.',
    keywords: ['research'],
    urlPath: '/research',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
      <ContentCards page="research" />
    </>
  )
}
