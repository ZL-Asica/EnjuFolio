import type { CreativeWork, Person, WebSite, WithContext } from 'schema-dts'
import { EnjuConfig } from '@/enju.config'
import { authorPicture, familyName, givenName, MetaAuthorName, siteBaseUrl } from '@/lib/configHelper'
import { generateImageUrl } from '@/utils'

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
  'name': MetaAuthorName,
  'additionalName': EnjuConfig.metaInfo.alsoKnownAs !== undefined
    ? EnjuConfig.metaInfo.alsoKnownAs
    : EnjuConfig.author !== MetaAuthorName
      ? EnjuConfig.author
      : undefined,
  'description': EnjuConfig.description,
  'affiliation': EnjuConfig.metaInfo.affiliation,
  'alumniOf': EnjuConfig.metaInfo.alumniOf,
  'familyName': familyName,
  'givenName': givenName,
  'image': authorPicture,
  'sameAs': EnjuConfig.metaInfo.sameAs,
  'url': siteBaseUrl,
}

const buildJsonLdBase = ({
  title = EnjuConfig.title,
  description = EnjuConfig.description,
  keywords = [],
  urlPath = '/',
  image,
}: JsonLdBase) => {
  const fullUrl = `${siteBaseUrl}${urlPath}`

  const generalKeywords = [
    MetaAuthorName,
    EnjuConfig.author.split(' ')[0],
    'portfolio',
    'academic',
    ...keywords, // Unpack keywords
  ]

  return {
    name: title,
    url: fullUrl,
    description,
    keywords: generalKeywords,
    editor: MetaAuthorName,
    publisher: MetaAuthorName,
    image: generateImageUrl(siteBaseUrl, image),
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
