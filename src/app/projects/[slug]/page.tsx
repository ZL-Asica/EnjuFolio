import ContentPage from '@/components/ContentPage'
import { EnjuConfig } from '@/enju.config'
import { buildMetadata } from '@/lib'
import { readFilesPaths } from '@/utils/fileUtils'
import { SingleResearchProjectPageDescription } from '@/utils/pages-description'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { frontmatter } = (await import(
    `@/contents/projects/${slug}.mdx`,
  )) as { frontmatter: FileMeta }

  const pageTitle = frontmatter.title

  return buildMetadata({
    title: `${pageTitle} | ${EnjuConfig.subTitle}`,
    description: SingleResearchProjectPageDescription(pageTitle, 'projects', frontmatter.abstract),
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
    <ContentPage pageType="projects" slug={slug} />
  )
}

export async function generateStaticParams() {
  const paths = await readFilesPaths('projects')
  return paths.map((slug: string) => ({ slug }))
}

export const dynamicParams = false
