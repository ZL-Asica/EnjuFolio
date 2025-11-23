'use server'

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { EnjuConfig } from '@/enju.config'
import { getMDXContent } from './mdx-loader'

const baseDir = path.join(process.cwd(), 'src', 'contents')

export const readFilesPaths = async (fileDir: string): Promise<string[]> => {
  const actualPath = path.join(baseDir, fileDir)

  let files: string[] = []
  try {
    // Read all files in the directory
    // Filter out non-file items and only keep .mdx files
    files = fs.readdirSync(actualPath).filter((file) => {
      const filePath = path.join(actualPath, file)
      const isFile = fs.statSync(filePath).isFile()
      return isFile && file.endsWith('.mdx')
    },
    ).map(file => encodeURIComponent(file.replace(/\.mdx$/, '')))

    if (files.length === 0) {
      console.warn(`No files found in directory ${actualPath}`)
      return []
    }
  }
  catch (error_) {
    console.error(`Error reading directory ${actualPath}:`, error_)
    return []
  }

  return files
}

export const readAllFileMeta = async (
  fileDir: string,
): Promise<FileMeta[]> => {
  const slugs = await readFilesPaths(fileDir)

  const metas = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter: md } = await getMDXContent(fileDir, slug)

      return {
        title: md.title,
        authors: md.authors ?? [EnjuConfig.author],
        advisors: md.advisors,
        venue: md.venue,
        status: md.status,
        role: md.role,
        category: md.category,
        date: md.date ?? new Date().toISOString(),
        abstract: md.abstract,
        redirect: md.redirect,
        doi: md.doi,
        pdf: md.pdf,
        url: md.url,
        github: md.github,
        slug: encodeURIComponent(slug),
      }
    }),
  )

  return metas.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export const readFileContent = async (
  slug: string,
  pageType?: PageType,
): Promise<string> => {
  const fileRelativePath = pageType ? path.join(pageType, `${slug}.mdx`) : `${slug}.mdx`

  const actualPath = path.join(baseDir, fileRelativePath)

  let content = ''
  try {
    // Read the file content
    content = fs.readFileSync(actualPath, 'utf-8')
  }
  catch (error_) {
    console.error(`Error reading file ${actualPath}:`, error_)
    return ''
  }

  // Drop frontmatter if exists
  const frontmatterRegex = /---\n[\s\S]+?---\n/
  const match = content.match(frontmatterRegex)
  if (match) {
    content = content.replace(match[0], '')
  }

  return content.trim()
}
