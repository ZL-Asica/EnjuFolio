import ContentPage from '@/components/ContentPage'
import { readFilesPaths } from '@/utils/fileUtils'

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

  return (
    <ContentPage page="projects" slug={slug} />
  )
}

export async function generateStaticParams() {
  const paths = await readFilesPaths('projects')
  return paths.map((slug: string) => ({ slug }))
}

export const dynamicParams = false
