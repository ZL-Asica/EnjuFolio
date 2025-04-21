import type { Element } from 'mdx/types'

export const getMDXContent = async (page: string, slug: string): Promise<{
  Content: Element
  frontmatter: FileMeta
}> => {
  // eslint-disable-next-line ts/no-unsafe-assignment
  const { default: Content, frontmatter } = (await import(`@/contents/${page}/${slug}.mdx`)) as {
    default: Element
    frontmatter: FileMeta
  }

  // eslint-disable-next-line ts/no-unsafe-assignment
  return { Content, frontmatter }
}
