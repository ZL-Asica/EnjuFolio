import type { Metadata } from 'next'
import type { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types'
import { authorFullName, authorPreferredName, baseDescroption, SITE_NAME, siteBaseUrl } from '@/lib/constants'
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
  description = baseDescroption,
  keywords = [],
  urlPath = '/',
  ogType = 'website',
  image,
}: MetadataInput): Metadata => {
  const fullUrl = `${siteBaseUrl}${urlPath}`
  const imageUrl = generateImageUrl(siteBaseUrl, image)

  const basicMetadata: Metadata = {
    title,
    description,
    applicationName: 'Enju Folio',
    generator: 'Next.js with Enju Folio',
    keywords: [
      authorFullName,
      authorPreferredName.split(' ')[0],
      'Portfolio',
      'Academic',
      ...keywords, // Unpack keywords
    ],
    openGraph: {
      type: ogType,
      title,
      description,
      url: fullUrl,
      tags: ['Portfolio', 'Academic', ...keywords],
      siteName: SITE_NAME,
      locale: 'en_US',
    },
    twitter: {
      card: imageUrl !== undefined ? 'summary_large_image' : 'summary',
      title,
      description,
    },
    creator: 'ZL-Asica',
    publisher: authorFullName,
    robots: { index: true, follow: true },
    authors: [{ name: authorFullName, url: siteBaseUrl }],
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
