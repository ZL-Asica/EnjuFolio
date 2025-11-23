import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'
import { EnjuConfig } from '@/enju.config'
import { buildArticleJsonLd } from '@/lib'
import { generateTOC } from '@/utils'
import { getMDXContent } from '@/utils/mdx-loader'
import { SingleResearchProjectPageDescription } from '@/utils/pages-description'
import ContentHeader from './ContentHeader'

const TOC = dynamic(async () => import('@/components/common/TOC'))

interface ContentPageProps {
  pageType: PageType
  slug: string
}

const ContentPage = async ({ pageType, slug }: ContentPageProps) => {
  const { Content, frontmatter } = await getMDXContent(pageType, slug)

  if (frontmatter.redirect !== undefined && frontmatter.redirect !== '') {
    redirect(frontmatter.redirect)
  }

  const toc = await generateTOC(pageType, slug)

  const pageTitle = frontmatter.title || 'Untitled'

  const jsonLd = buildArticleJsonLd({
    title: `${pageTitle} | ${EnjuConfig.subTitle}`,
    description: SingleResearchProjectPageDescription(pageTitle, pageType, frontmatter.abstract),
    keywords: frontmatter.keywords,
    urlPath: `/${pageType}/${slug}`,
    image: frontmatter.thumbnail,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto py-12 px-4 motion-safe:animate-fade-in-soft">
        <ContentHeader frontmatter={frontmatter} />
        {frontmatter.abstract && (
          <section aria-labelledby="abstract-heading" className="mb-12">
            <h2 id="abstract-heading" className="text-2xl font-semibold text-primary-400 dark:text-primary-300">
              Abstract
            </h2>
            <p className="my-5 text-base leading-[1.9] tracking-normal text-foreground">
              {frontmatter.abstract}
            </p>
          </section>
        )}
        <article className="page-content">
          <Content />
        </article>
      </main>
      {/* Only display TOC if there are more than 3 items */}
      {toc.length > 3 && <TOC items={toc} />}
    </>
  )
}

export default ContentPage
