import type { MetadataRoute } from 'next'
import { siteBaseUrl } from '@/lib/constants'

async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/_next/static/css',
        '/_next/image',
        '/_next/static/media',
        '/_next/static/chunks',
      ],
      disallow: '/_next',
    },
    sitemap: `${siteBaseUrl}/sitemap.xml`,
  }
}

export default robots
