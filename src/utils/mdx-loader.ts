import type { MDXProps } from 'mdx/types'
import type { ComponentType } from 'react'

type MDXComponent = ComponentType<MDXProps>

interface MDXModule {
  default: MDXComponent
  frontmatter: FileMeta
}

export async function getMDXContent(
  page: string,
  slug?: string,
): Promise<{ Content: MDXComponent, frontmatter: FileMeta }> {
  const {
    default: Content,
    frontmatter,
  } = (await import(`@/contents/${page}${slug !== undefined ? `/${slug}.mdx` : ''}`)) as MDXModule

  return { Content, frontmatter }
}
