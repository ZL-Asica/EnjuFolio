'use server'

import { promises as fs } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { EnjuConfig } from '@/enju.config'
import { readAllFileMeta } from '@/utils'
import { CVPageDescription, HomePageDescription, ProjectsPageDescription, ResearchPageDescription } from './pages-description'

// ===== helpers =====
const CONTENT_ROOT = path.join(process.cwd(), 'src', 'contents')

const cleanFrontmatter = (raw: string): string =>
  raw
    .trim()
    // Get rid of frontmatter
    .replace(/^---[\s\S]*?---\s*/u, '')
    // Downgrade level 2 headings to avoid competing with outer document hierarchy
    .replace(/\n## /g, '\n### ')

const readRawContent = async (
  type: PageType,
  slug: string,
): Promise<string | null> => {
  try {
    const filePath = path.join(CONTENT_ROOT, type, `${slug}.mdx`)
    const raw = await fs.readFile(filePath, 'utf8')
    return cleanFrontmatter(raw)
  }
  catch {
    return null
  }
}

// ===== sections =====

const buildSectionForType = async (
  type: PageType,
  siteUrl: string,
): Promise<{ md: string, llms: string }> => {
  const metas = (await readAllFileMeta(type))

  // newest first
  metas.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  const header
    = type === 'research' ? '## Research' : '## Technical Projects'
  const mdLines: string[] = [header, '']
  const llmsBlocks: string[] = []

  for (const meta of metas) {
    const url = `${siteUrl}/${type}/${meta.slug}`
    const abstract = (meta.abstract ?? '')
      .replace(/\s+/g, ' ')
      .trim()
    const venue
      = meta.venue != null && meta.venue !== ''
        ? ` — ${meta.venue}`
        : ''
    const date = meta.date ?? ''

    mdLines.push(
      `- [${meta.title}](${url}): ${abstract} (${date}${venue && `,${venue}`})`,
    )

    llmsBlocks.push(`---\n${url}\n---\n`)

    const redirected
      = meta.redirect != null && meta.redirect.trim() !== ''

    if (redirected) {
      llmsBlocks.push(
        `# ${meta.title} (Redirect)\n\nThis entry redirects to ${meta.redirect}.`,
      )
      continue
    }

    const content = await readRawContent(type, meta.slug)

    if (content == null) {
      llmsBlocks.push(
        `# ${meta.title}\n\nContent not available in source files; see ${url} for the rendered version.\n`,
      )
    }
    else {
      llmsBlocks.push(`# ${meta.title}\n\n${content}\n`)
    }
  }

  return {
    md: mdLines.join('\n'),
    llms: llmsBlocks.join('\n'),
  }
}

const buildStaticSection = (siteUrl: string, subTitle: string): {
  md: string
  llms: string
} => {
  const mdLines = [
    '## Static pages',
    '',
    `- [Home](${siteUrl}/): ${HomePageDescription}`,
    `- [Research](${siteUrl}/research): ${ResearchPageDescription}`,
    `- [Projects](${siteUrl}/projects): ${ProjectsPageDescription}`,
    `- [CV](${siteUrl}/cv): ${CVPageDescription}`,
  ]

  const llmsBlocks: string[] = []

  const staticEntries = [
    {
      path: `${siteUrl}/`,
      title: 'Home',
      desc: HomePageDescription,
    },
    {
      path: `${siteUrl}/cv`,
      title: `CV | ${subTitle}`,
      desc: CVPageDescription,
    },
    {
      path: `${siteUrl}/research`,
      title: `Research | ${subTitle}`,
      desc: ResearchPageDescription,
    },
    {
      path: `${siteUrl}/projects`,
      title: `Projects | ${subTitle}`,
      desc: ProjectsPageDescription,
    },
  ]

  for (const entry of staticEntries) {
    llmsBlocks.push(
      [
        '---',
        entry.path,
        '---',
        '',
        `# ${entry.title}`,
        '',
        entry.desc,
      ].join('\n'),
    )
  }

  return { md: mdLines.join('\n'), llms: llmsBlocks.join('\n\n') }
}

// ===== main =====

const generateEnjuLLMsTXTs = async (): Promise<void> => {
  const {
    siteUrl,
    title,
    subTitle,
    description,
    author,
    homePage,
    metaInfo,
  } = EnjuConfig

  const affiliationName
    = metaInfo.affiliation == null
      ? ''
      : typeof metaInfo.affiliation === 'string'
        ? metaInfo.affiliation
        : metaInfo.affiliation.join(', ')

  const llmGuidelines = metaInfo.llmsTxtGuidelines !== undefined
    ? `${metaInfo.llmsTxtGuidelines.trim()}`
    : ''

  const headerMd = [
    `# ${title} (${siteUrl})`,
    '',
    description,
    '',
    `This is the academic portfolio of **${author}**${homePage.pronouns !== undefined ? ` ${homePage.pronouns.trim()}` : ''}, currently ${homePage.position}${affiliationName && ` at ${affiliationName}`}.`,
    '',
    'The site is built with EnjuFolio (Next.js-based) developed by [ZL Asica](https://github.com/ZL-Asica).',
    'It organizes work into research projects, technical systems, and a CV.',
    '',
    llmGuidelines,
    '',
  ].join('\n')

  let markdownContent = `${headerMd}\n`

  const llmsParts: string[] = [llmGuidelines]

  // Static pages
  const staticSection = buildStaticSection(siteUrl, subTitle)
  markdownContent += `${staticSection.md}\n`
  llmsParts.push(staticSection.llms)

  // Research section
  const researchSection = await buildSectionForType(
    'research',
    siteUrl,
  )
  markdownContent += `\n${researchSection.md}\n`
  llmsParts.push(researchSection.llms)

  // Projects section
  const projectsSection = await buildSectionForType(
    'projects',
    siteUrl,
  )
  markdownContent += `\n${projectsSection.md}\n`
  llmsParts.push(projectsSection.llms)

  // Write into public
  try {
    const outputDir = path.join(process.cwd(), 'public')
    await fs.mkdir(outputDir, { recursive: true })
    await fs.writeFile(
      path.join(outputDir, 'llms.txt'),
      markdownContent,
      'utf8',
    )
    await fs.writeFile(
      path.join(outputDir, 'llms-full.txt'),
      llmsParts.join('\n\n'),
      'utf8',
    )
    // eslint-disable-next-line no-console
    console.info('llms.txt & llms-full.txt generated in /public 🎉')
  }
  catch (err) {
    console.error(
      'Failed to write LLMs files:',
      err instanceof Error ? err.message : err,
    )
  }
}

export default generateEnjuLLMsTXTs
