import ContentPage from '@/components/ContentPage'
import { buildMetadata } from '@/lib'
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

  return buildMetadata({
    title: `${frontmatter.title} | Elara's Portfolio`,
    description: frontmatter.abstract,
    keywords: ['project', ...(frontmatter.keywords || [])],
    urlPath: `/projects/${slug}`,
    ogType: 'article',
    image: frontmatter.thumbnail,
  })
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
