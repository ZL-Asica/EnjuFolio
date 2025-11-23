import type { Metadata } from 'next'
import type { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types'
import { EnjuConfig } from '@/enju.config'
import { MetaAuthorName, siteBaseUrl } from '@/lib/configHelper'
import { generateImageUrl } from '@/utils'

interface MetadataInput {
  title: string
  keywords?: string[]
  description?: string
  urlPath?: string
  ogType?: OpenGraphType
  image?: string
}

export const buildMetadata = ({
  title,
  description = EnjuConfig.description,
  keywords = [],
  urlPath = '/',
  ogType = 'website',
  image,
}: MetadataInput): Metadata => {
  const fullUrl = `${siteBaseUrl}${urlPath}`
  const imageUrl = generateImageUrl(siteBaseUrl, image)

  const generalKeywords = [
    MetaAuthorName,
    EnjuConfig.author.split(' ')[0],
    'Portfolio',
    'Academic',
    ...keywords, // Unpack keywords
  ]

  const basicMetadata: Metadata = {
    title,
    description,
    applicationName: 'Enju Folio',
    generator: 'Next.js with Enju Folio (https://github.com/ZL-Asica/EnjuFolio)',
    keywords: generalKeywords,
    openGraph: {
      type: ogType,
      title,
      description,
      url: fullUrl,
      tags: generalKeywords,
      siteName: EnjuConfig.title,
      locale: 'en_US',
    },
    twitter: {
      card: imageUrl !== undefined ? 'summary_large_image' : 'summary',
      title,
      description,
    },
    creator: 'ZL-Asica',
    publisher: MetaAuthorName,
    robots: { index: true, follow: true },
    authors: [{ name: MetaAuthorName, url: siteBaseUrl }],
    alternates: { canonical: fullUrl },
  }

  if (imageUrl !== undefined) {
    basicMetadata.openGraph!.images = [
      {
        url: imageUrl,
        alt: title,
      },
    ]
    basicMetadata.twitter!.images = [imageUrl]
  }

  return basicMetadata
}
