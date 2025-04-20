import type { Element } from 'mdx/types'
import ContentPage from '@/components/ContentPage'
import { readFilesPaths } from '@/utils/fileUtils'
import { redirect } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { frontmatter } = (await import(
    `@/contents/projects/${slug}.mdx`
  )) as { frontmatter: FileMeta }

  return {
    title: `${frontmatter.title} | Elara's Portfolio`,
    description: frontmatter.abstract,
    keywords: frontmatter.keywords,
    authors: frontmatter.authors,
    openGraph: {
      type: 'article',
      title: `${frontmatter.title} | Elara's Portfolio`,
      description: frontmatter.abstract,
      tags: frontmatter.keywords,
      url: `https://zla.app/projects/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${frontmatter.title} | Elara's Portfolio`,
      description: frontmatter.abstract,
    },
    alternates: { canonical: `https://zla.app/projects/${slug}` },
  }
}

export default async function ProjectContentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // eslint-disable-next-line ts/no-unsafe-assignment
  const { default: Content, frontmatter } = (await import(
    `@/contents/projects/${slug}.mdx`
  )) as { default: Element, frontmatter: FileMeta }

  if (frontmatter.redirect !== undefined && frontmatter.redirect !== '') {
    // Redirect to the new URL
    redirect(frontmatter.redirect)
  }

  return (
  // eslint-disable-next-line ts/no-unsafe-assignment
    <ContentPage Content={Content} frontmatter={frontmatter} />
  )
}

export function generateStaticParams() {
  return readFilesPaths('projects').map(slug => ({ slug }))
}

export const dynamicParams = false
