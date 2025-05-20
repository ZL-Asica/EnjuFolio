import type { Metadata } from 'next'
import ContentCards from '@/components/ContentCards'
import { EnjuConfig } from '@/enju.config'
import { buildMetadata, buildWebsiteJsonLd } from '@/lib'
import { MetaAuthorName } from '@/lib/configHelper'

export const metadata: Metadata = buildMetadata({
  title: `Research | ${EnjuConfig.subTitle}`,
  description: `Explore ${MetaAuthorName}’s academic research projects, showcasing her skills and creativity in various domains.`,
  keywords: ['research'],
  urlPath: '/research',
  ogType: 'website',
})

export default async function ResearchPage() {
  const jsonld = buildWebsiteJsonLd({
    title: `Research | ${EnjuConfig.subTitle}`,
    description: `A showcase of ${MetaAuthorName}’s past and ongoing research work.`,
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
