import ContentPage from '@/components/ContentPage'
import { EnjuConfig } from '@/enju.config'
import { buildMetadata } from '@/lib'
import { showRss } from '@/lib/configHelper'
import { generateRssFeed } from '@/utils'
import { readFilesPaths } from '@/utils/fileUtils'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { frontmatter } = (await import(
    `@/contents/research/${slug}.mdx`,
  )) as { frontmatter: FileMeta }

  return buildMetadata({
    title: `${frontmatter.title} | ${EnjuConfig.subTitle}`,
    description: frontmatter.abstract,
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
    <ContentPage page="research" slug={slug} />
  )
}

export async function generateStaticParams() {
  if (showRss) {
    await generateRssFeed()
  }
  const paths = await readFilesPaths('research')
  return paths.map(slug => ({ slug }))
}

export const dynamicParams = false
