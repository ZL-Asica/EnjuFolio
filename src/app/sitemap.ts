import type { MetadataRoute } from 'next'
import { siteBaseUrl } from '@/lib/configHelper'
import { readAllFileMeta } from '@/utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const updateDate = new Date()

  // Load all articles. Add type to every file
  const projects = (await readAllFileMeta('projects')).map((file) => {
    return {
      ...file,
      type: 'projects',
    }
  })

  const research = (await readAllFileMeta('research')).map((file) => {
    return {
      ...file,
      type: 'research',
    }
  })

  const allFiles = [...projects, ...research].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const makeSitemapItem = (
    url: string,
    options?: Partial<MetadataRoute.Sitemap[number]>,
  ): MetadataRoute.Sitemap[number] => ({
    url,
    lastModified: updateDate,
    changeFrequency: 'monthly',
    priority: 0.8,
    ...options,
  })

  // Generate sitemap entries for each post
  const articlesUrls = allFiles.map(article =>
    makeSitemapItem(`${siteBaseUrl}/${article.type}/${article.slug}`, {
      changeFrequency: 'weekly',
      priority: 0.5,
    }),
  )

  const staticPages = [
    { path: '/', priority: 1 },
    { path: '/cv', priority: 0.8 },
    { path: '/posts', priority: 0.6 },
    { path: '/friends', priority: 0.4 },
  ]

  const staticSitemap = staticPages.map(({ path, priority }) =>
    makeSitemapItem(`${siteBaseUrl}${path}`, { priority }),
  )

  return [...staticSitemap, ...articlesUrls]
}
