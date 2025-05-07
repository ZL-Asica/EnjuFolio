import type { CreativeWork, Person, WebSite, WithContext } from 'schema-dts'
import { authorFullName, authorPreferredName, baseDescroption, buildImageUrl, SITE_NAME, siteBaseUrl } from '@/lib/constants'

interface JsonLdBase {
  title: string
  description?: string
  keywords?: string[]
  urlPath?: string
  image?: string
}

export const personJsonLd: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': authorFullName,
  'additionalName': authorPreferredName,
  'description': baseDescroption,
  'affiliation': 'Northwestern University',
  'alumniOf': 'University of California, Irvine',
  'familyName': authorFullName.split(' ')[authorFullName.split(' ').length - 1],
  'givenName': authorFullName.split(' ')[0],
  'image': `${siteBaseUrl}/images/profile.webp`,
  'sameAs': [
    'https://github.com/ZL-Asica/',
    'https://www.linkedin.com/in/elara-liu/',
    'https://zla.pub/',
  ],
  'url': siteBaseUrl,
}

const buildJsonLdBase = ({
  title = SITE_NAME,
  description = baseDescroption,
  keywords = [],
  urlPath = '/',
  image,
}: JsonLdBase) => {
  const fullUrl = `${siteBaseUrl}${urlPath}`

  return {
    name: title,
    url: fullUrl,
    description,
    keywords: ['portfolio', 'academic', ...keywords],
    editor: authorFullName,
    publisher: authorFullName,
    image: buildImageUrl(image),
    author: personJsonLd,
  }
}

export const buildWebsiteJsonLd = (baseData: JsonLdBase): WithContext<WebSite> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    ...buildJsonLdBase(baseData),
    'isBasedOn': 'https://github.com/ZL-Asica/EnjuFolio',
    'license': 'https://github.com/ZL-Asica/EnjuFolio/blob/main/LICENSE',
  }
}

export const buildArticleJsonLd = (baseData: JsonLdBase): WithContext<CreativeWork> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    ...buildJsonLdBase(baseData),
  }
}
