import type { MetadataRoute } from 'next'

async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  }
}

export default robots
