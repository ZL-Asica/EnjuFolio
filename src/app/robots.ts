import type { MetadataRoute } from 'next'
import { siteBaseUrl } from '@/lib/configHelper'

const ALLOWED_STATIC_PATHS = [
  '/', // Homepage
  '/_next/static/css',
  '/_next/image',
  '/_next/static/media',
  '/_next/static/chunks',
]

const DISALLOWED_PATHS = [
  '/_next', // Avoid _next directory, except for static assets
  '/*?', // Block all URLs with query parameters
  '/*?*', // Fallback for any other query parameters
]

const SITEMAP_URL = `${siteBaseUrl}/sitemap.xml`

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ALLOWED_STATIC_PATHS,
      disallow: DISALLOWED_PATHS,
    },
    sitemap: SITEMAP_URL,
  }
}
