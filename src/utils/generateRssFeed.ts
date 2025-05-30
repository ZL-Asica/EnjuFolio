'use server'

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

import RSS from 'rss'
import { EnjuConfig } from '@/enju.config'
import { siteBaseUrl } from '@/lib/configHelper'
import { readAllFileMeta } from './fileUtils'

const generateRssFeed = async (): Promise<void> => {
  const feedOptions: RSS.FeedOptions = {
    title: EnjuConfig.title,
    description: EnjuConfig.description,
    feed_url: `${siteBaseUrl}/feed.xml`,
    site_url: siteBaseUrl,
    language: 'en',
    copyright: `All rights reserved ${new Date().getFullYear()} by ${EnjuConfig.author}`,
    pubDate: new Date(),
    generator: 'Next.js + RSS for Node provided by ZL Asica',
  }

  let feed: RSS
  try {
    feed = new RSS(feedOptions)

    // Add type to every file
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

    for (const file of allFiles) {
      feed.item({
        title: file.title,
        description: file.abstract,
        url: `${siteBaseUrl}/${file.type}/${file.slug}`,
        date: file.date,
        author: 'Zhuoran (Elara) Liu',
        categories: file.keywords,
      })
    }
  }
  catch (error) {
    if (error instanceof Error) {
      console.error('Error creating RSS feed:', error.message)
    }
    else {
      console.error('Unexpected error:', error)
    }
    return
  }

  try {
    const outputPath = path.join(process.cwd(), 'public', 'feed.xml')
    fs.writeFileSync(outputPath, feed.xml({ indent: true }), 'utf8')
    // eslint-disable-next-line no-console
    console.info('\nRSS feed generated at /feed.xml 🎉')
  }
  catch (writeError) {
    if (writeError instanceof Error) {
      console.error('Error writing RSS feed file:', writeError.message)
    }
    else {
      console.error('Unexpected error while writing file:', writeError)
    }
  }
}

export default generateRssFeed
