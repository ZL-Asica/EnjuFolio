import type { MetadataRoute } from 'next'

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
    sitemap: 'https://zla.app/sitemap.xml',
  }
}

export default robots
