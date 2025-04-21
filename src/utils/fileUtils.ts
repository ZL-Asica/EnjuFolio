'use server'

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

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
      const mod = await import(`@/contents/${fileDir}/${slug}.mdx`) as { frontmatter: FileMeta }
      const md = mod.frontmatter

      return {
        title: md.title,
        authors: md.authors ?? ['Zhuoran Liu'],
        advisors: md.advisors,
        venue: md.venue,
        year: String(md.year ?? new Date().getFullYear()),
        date: md.date,
        abstract: md.abstract,
        redirect: md.redirect,
        doi: md.doi,
        pdfUrl: md.pdfUrl,
        url: md.url,
        github: md.github,
        slug: encodeURIComponent(slug),
      }
    }),
  )

  return metas
}
