// Remove trailing slash
export const siteBaseUrl = 'https://zla.app'.replace(/\/$/, '')
export const authorPreferredName = 'Elara Liu'
export const authorFullName = 'Zhuoran (Elara) Liu'
export const SITE_NAME = `${authorFullName} | Academic Portfolio`
export const baseDescroption = 'Zhuoran (Elara) Liu’s academic portfolio featuring research in HCI and Large Language Model, technical projects, and CV.'

export const buildImageUrl = (image?: string): string | undefined => {
  // Double check image URL
  let imageUrl = image
  if (image !== undefined && !image.startsWith('http')) {
    imageUrl = `${siteBaseUrl}${image}`
  }
  return imageUrl
}
