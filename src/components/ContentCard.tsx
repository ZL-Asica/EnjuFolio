import { formatDateMonth } from '@/utils'
import { ExternalLink, FileText, Github, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

interface ContentCardProps {
  meta: FileMeta
  page: string
}

const ContentCard = ({ meta, page }: ContentCardProps) => {
  const { title, authors, venue, date, abstract, slug, doi, pdfUrl, url, github, redirect } = meta

  return (
    <li className="border-l-4 pl-4 border-primary-300 motion-safe:animate-mask-reveal dark:border-primary-200 space-y-4 sm:space-y-2">
      <h2 className="text-lg sm:text-xl font-semibold">
        <Link
          href={(redirect !== undefined && redirect !== '')
            ? redirect
            : `/${page}/${slug}`}
          className="underline-interactive"
          aria-label="Read more"
          target={(redirect !== undefined && redirect !== '') ? '_blank' : '_self'}
        >
          {title}
        </Link>
      </h2>

      <p className="text-xs sm:text-sm text-secondary-400 mb-1">
        {Array.isArray(authors) && authors.join(', ')}
        {venue !== undefined && (
          <>
            {' — '}
            <span className="italic">{venue}</span>
          </>
        )}
        {' '}
        <time dateTime={date}>
          (
          {formatDateMonth(date, true)}
          )
        </time>
      </p>

      {/* Advisors */}
      {meta.advisors !== undefined && meta.advisors.length > 0 && (
        <p className="text-xs sm:text-sm text-secondary-400 mb-1">
          <span className="italic">Advised by:</span>
          {' '}
          {meta.advisors.join(', ')}
        </p>
      )}

      {/* Abstract */}
      <p className="text-sm leading-relaxed sm:leading-snug">
        {abstract}
      </p>

      {(doi !== undefined || pdfUrl !== undefined || url !== undefined || github !== undefined) && (
        <div className="mt-2 flex flex-wrap gap-2 sm:space-x-4 items-center">
          {/* DOI link */}
          {doi !== undefined && (
            <Link
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DOI link"
              className="flex items-center text-sm text-accent-500 text-hover-secondary transition-all-300 hover:opacity-80 dark:text-accent-300"
            >
              <LinkIcon className="w-5 h-5 mr-1" />
              {' '}
              {doi}
            </Link>
          )}

          {/* PDF link */}
          {pdfUrl !== undefined && (
            <Link
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PDF download"
              className="flex items-center text-sm text-accent-500 text-hover-secondary transition-all-300 hover:opacity-80 dark:text-accent-300"
            >
              <FileText className="w-5 h-5 mr-1" />
              {' '}
              PDF
            </Link>
          )}

          {/* External link */}
          {url !== undefined && (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="External link"
              className="flex items-center text-sm text-accent-500 text-hover-secondary transition-all-300 hover:opacity-80 dark:text-accent-300"
            >
              <ExternalLink className="w-5 h-5 mr-1" />
              {' '}
              Link
            </Link>
          )}

          {/* GitHub link */}
          {github !== undefined && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub link"
              className="flex items-center text-sm text-accent-500 text-hover-secondary transition-all-300 hover:opacity-80 dark:text-accent-300"
            >
              <Github className="w-5 h-5 mr-1" />
              {' '}
              Code
            </Link>
          )}
        </div>
      )}
    </li>
  )
}

export default ContentCard
