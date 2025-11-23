import type { CreativeWork, Person, WebSite, WithContext } from 'schema-dts'
import process from 'node:process'
import { EnjuConfig } from '@/enju.config'
import { authorPicture, familyName, givenName, MetaAuthorName, siteBaseUrl } from '@/lib/configHelper'
import { generateImageUrl } from '@/utils'

const actualSiteBaseUrl = process.env.NODE_ENV === 'production'
  ? EnjuConfig.siteUrl
  : 'http://localhost:3000'

const authorPersonalDescription = EnjuConfig.metaInfo.personalDescription

const authorAdditionalNames = EnjuConfig.metaInfo.alsoKnownAs !== undefined
  ? EnjuConfig.metaInfo.alsoKnownAs
  : typeof EnjuConfig.otherNames === 'string'
    ? EnjuConfig.otherNames
    : EnjuConfig.otherNames !== undefined
      ? EnjuConfig.otherNames.filter(name => name !== MetaAuthorName)
      : undefined

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
  'alternateName': authorAdditionalNames,
  'additionalName': authorAdditionalNames,
  'familyName': familyName,
  'givenName': givenName,
  'url': siteBaseUrl,
  'image': authorPicture,
  'affiliation': EnjuConfig.metaInfo.affiliation,
  'alumniOf': EnjuConfig.metaInfo.alumniOf,
  'jobTitle': EnjuConfig.homePage.position,
  'description': authorPersonalDescription ?? undefined,
  'knowsAbout': EnjuConfig.metaInfo.knowsAbout ?? EnjuConfig.metaInfo.skills,
  'skills': EnjuConfig.metaInfo.skills ?? EnjuConfig.metaInfo.knowsAbout,
  'sameAs': EnjuConfig.metaInfo.sameAs,
}

const buildJsonLdBase = ({
  title = EnjuConfig.title,
  description = EnjuConfig.description,
  keywords = [],
  urlPath = '/',
  image,
}: JsonLdBase) => {
  const fullUrl = `${actualSiteBaseUrl}${urlPath}`

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
    image: generateImageUrl(actualSiteBaseUrl, image),
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
