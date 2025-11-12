import { LayoutList } from 'lucide-react'
import { LuBookOpen, LuFile } from 'react-icons/lu'
import { IconLinks } from '@/components/common'
import { formatAuthors, formatDateMonth } from '@/utils'
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
      {frontmatter.authors?.length > 0 && (
        <p className="mt-2 text-secondary-600 dark:text-secondary-400 flex items-center justify-center" aria-label="Authors">
          {formatAuthors(frontmatter.authors)}
        </p>
      )}
      {frontmatter.advisors !== undefined && frontmatter.advisors?.length > 0 && (
        <p className="mt-2 text-secondary-600 dark:text-secondary-400 flex items-center justify-center" aria-label="Advisors">
          <span className="italic mr-1">Advised by:</span>
          {frontmatter.advisors.join(', ')}
        </p>
      )}
      <p className="mt-3 text-accent-600 dark:text-accent-400 flex items-center justify-center space-x-2">
        {frontmatter.venue !== undefined && (
          <span className="flex items-center" aria-label="Venue">
            <LuFile className="w-5 h-5 mr-1" />
            {frontmatter.venue}
          </span>
        )}
        <span className="flex items-center" aria-label="Date with year and month">
          <LuBookOpen className="w-5 h-5 mr-1" />
          <time dateTime={frontmatter.date}>{formatDateMonth(frontmatter.date)}</time>
        </span>
      </p>
      <IconLinks meta={frontmatter} classNames="mt-4 justify-center text-secondary-600 dark:text-secondary-400" />
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
