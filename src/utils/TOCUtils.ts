import { readFileContent } from './fileUtils'

export const generateHierarchicalSlug = (
  level: keyof typeof headingLevels,
  headingLevels: Record<string, number>,
): string => {
  headingLevels[level] += 1

  // resetLowerLevels logic
  const levels = Object.keys(headingLevels)
  const startIndex = levels.indexOf(level) + 1
  for (const key of levels.slice(startIndex)) {
    headingLevels[key] = 0
  }

  return Object.values(headingLevels)
    .slice(0, startIndex)
    .join('-')
}

export const slugPrefix = (slug: string, level: number): string => {
  const parts = slug.split('-')
  if (level === 6) {
    return `${parts
      .slice(-2)
      .map(part => String.fromCharCode(96 + Number.parseInt(part, 10)))
      .join('.')} `
  }
  return `${parts.slice(0, level - 1).join('.')} `
}

export const generateTOC = async (
  pageType: PageType,
  slug: string,
): Promise<TocItems[]> => {
  const content = await readFileContent(slug, pageType)

  const headingRegex = /^(#{2,6})\s+(\S.*)$/gm
  const toc: TocItems[] = []
  const headingLevels = { h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 }

  let match: RegExpExecArray | null
  while (true) {
    match = headingRegex.exec(content)
    if (match === null) {
      break
    }
    const [, hashes, rawTitle] = match
    const level = `h${hashes.length}` as keyof typeof headingLevels

    // Remove markdown formatting from title and trim whitespace
    const title = rawTitle.replace(/[*`]/g, '').trim()
    const slug = generateHierarchicalSlug(level, headingLevels)

    toc.push({ slug, title, level: Number.parseInt(level.slice(1), 10) })
  }

  return toc
}
