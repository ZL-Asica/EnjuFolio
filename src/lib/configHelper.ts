import { uniqueArray } from '@zl-asica/react/utils'
import { EnjuConfig } from '@/enju.config'
import { generateImageUrl } from '@/utils'

export const siteBaseUrl = EnjuConfig.siteUrl.replace(/\/$/, '')

export const authorPictureBase = generateImageUrl(siteBaseUrl, EnjuConfig.homePage.picture ?? '/images/profile.webp') as string

export const authorPicture = generateImageUrl(siteBaseUrl, authorPictureBase ?? '/images/profile.webp')

export const authorAllNames = uniqueArray([EnjuConfig.author, ...(EnjuConfig.otherNames ?? [])])

/**
 * Get the author name
 *
 * Fallback priorities:
 * 1. metaInfo.name
 * 2. author
 *
 * @returns The author name
 */
export const MetaAuthorName = EnjuConfig.metaInfo.name ?? EnjuConfig.author

/**
 * Get the family name
 *
 * Fallback priorities:
 * 1. metaInfo.familyName
 * 2. homePage.name.split(' ')[homePage.name.split(' ').length - 1]
 * 3. author.split(' ')[author.split(' ').length - 1]
 */
export const familyName = EnjuConfig.metaInfo.familyName ?? EnjuConfig.homePage.name.split(' ')[EnjuConfig.homePage.name.split(' ').length - 1] ?? EnjuConfig.author.split(' ')[EnjuConfig.author.split(' ').length - 1]

/**
 * Get the given name
 *
 * Fallback priorities:
 * 1. metaInfo.givenName
 * 2. homePage.name.split(' ')[0]
 * 3. author.split(' ')[0]
 */
export const givenName = EnjuConfig.metaInfo.givenName ?? EnjuConfig.homePage.name.split(' ')[0] ?? EnjuConfig.author.split(' ')[0]

const rssConfig = EnjuConfig.socialLinks.rss
export const showRss = rssConfig === true
  || ((rssConfig !== null && rssConfig !== undefined)
    ? typeof rssConfig === 'object'
    && Object.keys(rssConfig).length > 0
    && (rssConfig.news || rssConfig.research || rssConfig.projects)
    : false)
