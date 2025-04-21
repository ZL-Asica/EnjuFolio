import { DividerLine } from '@/components/parser'
import { getMDXContent } from '@/utils/mdx-loader'
import { redirect } from 'next/navigation'
import ContentHeader from './ContentHeader'

interface ContentPageProps {
  page: string
  slug: string
}

const ContentPage = async ({ page, slug }: ContentPageProps) => {
  // eslint-disable-next-line ts/no-unsafe-assignment
  const { Content, frontmatter } = await getMDXContent(page, slug)

  if (frontmatter.redirect !== undefined && frontmatter.redirect !== '') {
    redirect(frontmatter.redirect)
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 motion-safe:animate-blur-in-glow">
      <ContentHeader frontmatter={frontmatter} />
      {frontmatter.abstract && (
        <section aria-labelledby="abstract-heading" className="mb-12">
          <h2 id="abstract-heading" className="text-2xl font-semibold text-primary-400 dark:text-primary-300">
            Abstract
          </h2>
          <p className="mt-2 text-gray-800 dark:text-gray-200">{frontmatter.abstract}</p>
        </section>
      )}
      <DividerLine />
      <article>
        <Content />
      </article>
    </div>
  )
}

export default ContentPage
