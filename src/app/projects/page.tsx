import type { Metadata } from 'next'
import ContentCards from '@/components/ContentCards'
import { EnjuConfig } from '@/enju.config'
import { buildMetadata, buildWebsiteJsonLd } from '@/lib'
import { MetaAuthorName } from '@/lib/configHelper'

export const metadata: Metadata = buildMetadata({
  title: `Projects | ${EnjuConfig.subTitle}`,
  description: `Discover ${MetaAuthorName}’s personal technical projects, design systems, and experiments.`,
  keywords: ['project'],
  urlPath: '/projects',
  ogType: 'website',
})

export default async function ProjectPage() {
  const jsonld = buildWebsiteJsonLd({
    title: `Projects | ${EnjuConfig.subTitle}`,
    description: `Collection of personal and open-source projects by ${MetaAuthorName}.`,
    keywords: ['project'],
    urlPath: '/projects',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
      <ContentCards PageType="projects" />
    </>
  )
}
