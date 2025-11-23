import ContentPage from '@/components/ContentPage'
import { EnjuConfig } from '@/enju.config'
import { buildMetadata } from '@/lib'
import { showRss } from '@/lib/configHelper'
import { generateLLMsTxt, generateRssFeed } from '@/utils'
import { readFilesPaths } from '@/utils/fileUtils'
import { SingleResearchProjectPageDescription } from '@/utils/pages-description'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { frontmatter } = (await import(
    `@/contents/research/${slug}.mdx`,
  )) as { frontmatter: FileMeta }

  const pageTitle = frontmatter.title

  return buildMetadata({
    title: `${pageTitle} | ${EnjuConfig.subTitle}`,
    description: SingleResearchProjectPageDescription(pageTitle, 'research', frontmatter.abstract),
    keywords: ['research', ...(frontmatter.keywords || [])],
    urlPath: `/research/${slug}`,
    ogType: 'article',
    image: frontmatter.thumbnail,
  })
}

export default async function ResearchContentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <ContentPage pageType="research" slug={slug} />
  )
}

export async function generateStaticParams() {
  if (showRss) {
    await generateRssFeed()
  }
  if (!EnjuConfig.disableLlmstxt) {
    await generateLLMsTxt()
  }
  const paths = await readFilesPaths('research')
  return paths.map(slug => ({ slug }))
}

export const dynamicParams = false
