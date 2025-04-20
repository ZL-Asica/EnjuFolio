import type { Element } from 'mdx/types'
import { DividerLine } from '@/components/parser'
import { formatDateMonth } from '@/utils'
import { BookOpen, ExternalLink, FileIcon, FileText, Link as LinkIcon, Tag } from 'lucide-react'
import Link from 'next/link'

interface ContentPageProps {
  Content: Element
  frontmatter: FileMeta
}

const ContentPage = ({ Content, frontmatter }: ContentPageProps) => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 motion-safe:animate-blur-in-glow">
      {/* Page Header */}
      <header role="banner" className="text-center mb-12">
        <h1 id="page-title" className="text-4xl font-serif font-bold leading-tight">
          {frontmatter.title}
        </h1>

        {/* Authors */}
        {frontmatter.authors?.length > 0 && (
          <p className="mt-2 text-secondary-600 dark:text-secondary-400 flex items-center justify-center" aria-label="Authors">
            {frontmatter.authors.join(', ')}
          </p>
        )}

        {/* Advisor(s) */}
        {frontmatter.advisors !== undefined && frontmatter.advisors?.length > 0 && (
          <p className="mt-2 text-secondary-600 dark:text-secondary-400 flex items-center justify-center" aria-label="Advisors">
            <span className="italic mr-1">Advised by:</span>
            {frontmatter.advisors.join(', ')}
          </p>
        )}

        {/* Venue and Year */}
        <p className="mt-1 text-accent-600 dark:text-accent-400 flex items-center justify-center space-x-2">
          {frontmatter.venue !== undefined && (
            <span className="flex items-center" aria-label="Venue">
              <FileIcon className="w-5 h-5 mr-1" />
              {frontmatter.venue}
            </span>
          )}
          <span className="flex items-center" aria-label="Date with year and month">
            <BookOpen className="w-5 h-5 mr-1" />
            {formatDateMonth(frontmatter.date)}
          </span>
        </p>

        {/* DOI, PDF link, and External URL */}
        {(frontmatter.doi !== undefined || frontmatter.pdfUrl !== undefined || frontmatter.url !== undefined) && (
          <p className="mt-4 flex flex-wrap justify-center gap-6 text-secondary-600 dark:text-secondary-400">
            {frontmatter.doi !== undefined && (
              <Link
                href={`https://doi.org/${frontmatter.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center underline-interactive text-hover-secondary"
              >
                <LinkIcon className="w-5 h-5 mr-1" />
                DOI:
                {' '}
                {frontmatter.doi}
              </Link>
            )}
            {frontmatter.pdfUrl !== undefined && (
              <Link
                href={frontmatter.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center underline-interactive text-hover-secondary"
              >
                <FileText className="w-5 h-5 mr-1" />
                PDF
              </Link>
            )}
            {frontmatter.url !== undefined && (
              <Link
                href={frontmatter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center underline-interactive text-hover-secondary"
              >
                <ExternalLink className="w-5 h-5 mr-1" />
                Link
              </Link>
            )}
          </p>
        )}

        {/* Keywords/Tags */}
        {frontmatter.keywords !== undefined && frontmatter.keywords?.length > 0 && (
          <p className="mt-6 text-sm text-gray-700 dark:text-gray-300" aria-label="Keywords">
            <span className="flex items-center justify-center mb-2">
              <Tag className="w-5 h-5 mr-1 text-accent-600 dark:text-accent-400" />
              Keywords:
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {frontmatter.keywords.map(kw => (
                <kbd
                  key={kw}
                  className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                >
                  {kw}
                </kbd>
              ))}
            </div>
          </p>
        )}
      </header>

      {/* Abstract */}
      {frontmatter.abstract && (
        <section aria-labelledby="abstract-heading" className="mb-12">
          <h2 id="abstract-heading" className="text-2xl font-semibold text-primary-600 dark:text-primary-400">
            Abstract
          </h2>
          <p className="mt-2 text-gray-800 dark:text-gray-200">{frontmatter.abstract}</p>
        </section>
      )}

      <DividerLine />

      {/* Main Content */}
      <section>
        <Content />
      </section>
    </div>
  )
}

export default ContentPage
