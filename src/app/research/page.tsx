import type { Metadata } from 'next'
import ContentCards from '@/components/ContentCards'
import { EnjuConfig } from '@/enju.config'
import { buildMetadata, buildWebsiteJsonLd } from '@/lib'
import { ResearchPageDescription } from '@/utils/pages-description'

export const metadata: Metadata = buildMetadata({
  title: `Research | ${EnjuConfig.subTitle}`,
  description: ResearchPageDescription,
  keywords: ['research'],
  urlPath: '/research',
  ogType: 'website',
})

export default async function ResearchPage() {
  const jsonld = buildWebsiteJsonLd({
    title: `Research | ${EnjuConfig.subTitle}`,
    description: ResearchPageDescription,
    keywords: ['research'],
    urlPath: '/research',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
      <ContentCards PageType="research" />
    </>
  )
}
