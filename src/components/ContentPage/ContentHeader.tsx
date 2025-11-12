import { formatDate } from '@zl-asica/react/utils'
import { LayoutList } from 'lucide-react'
import { LuBookOpen, LuFile } from 'react-icons/lu'
import { FormatedAuthors, IconLinks } from '@/components/common'
import ContentTags from './ContentTags'

interface ContentHeaderProps {
  frontmatter: FileMeta
}

const ContentHeader = ({ frontmatter }: ContentHeaderProps) => {
  return (
    <section role="banner" className="text-center mb-12">
      <h1 id="page-title" className="text-4xl font-serif font-bold leading-tight">
        {frontmatter.title}
      </h1>
      {(frontmatter.authors?.length ?? 0) > 0 && (
        <p
          className="mt-2 mx-auto max-w-prose text-center text-secondary-600 dark:text-secondary-400 wrap-break-word"
          aria-label="Authors"
        >
          <FormatedAuthors authors={frontmatter.authors} />
        </p>
      )}

      {(frontmatter.advisors?.length ?? 0) > 0 && (
        <p
          className="mt-1 mx-auto max-w-prose text-center text-secondary-600 dark:text-secondary-400 wrap-break-word"
          aria-label="Advisors"
        >
          <span className="italic mr-1 whitespace-nowrap">Advised by:</span>
          {frontmatter.advisors!.join(', ')}
        </p>
      )}
      <p className="mt-3 text-accent-600 dark:text-accent-400 flex items-center justify-center flex-col sm:flex-row space-x-2">
        {frontmatter.venue !== undefined && (
          <span className="flex items-center" aria-label="Venue">
            <LuFile className="w-5 h-5 mr-1" />
            {frontmatter.venue}
          </span>
        )}
        <span className="flex items-center" aria-label="Date with year and month">
          <LuBookOpen className="w-5 h-5 mr-1" />
          <time dateTime={frontmatter.date}>{formatDate(frontmatter.date, 'MMM, YYYY')}</time>
        </span>
      </p>
      <IconLinks meta={frontmatter} className="mt-4 justify-center" />
      {frontmatter.category !== undefined && (
        <p className="flex items-center justify-center space-x-2 mt-2 text-secondary-600 dark:text-secondary-400" aria-label="Category">
          <LayoutList className="w-5 h-5 mr-1" />
          Category:
          {' '}
          {frontmatter.category}
        </p>
      )}
      <ContentTags keywords={frontmatter.keywords} />
    </section>
  )
}

export default ContentHeader
