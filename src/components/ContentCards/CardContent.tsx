import Link from 'next/link'
import { IconLinks } from '@/components/common'
import CardMeta from './CardMeta'

interface CardContentProps {
  meta: FileMeta
  pageType: PageType
}

const CardContent = ({ meta, pageType }: CardContentProps) => {
  const { title, slug, redirect, abstract } = meta
  const link = (redirect !== undefined && redirect !== '') ? redirect : `/${pageType}/${slug}`
  const isExternal = link.startsWith('http')

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-xl border border-border/60
        bg-background/70
        shadow-sm
        transition-all-300
        hover:-translate-y-0.5 hover:shadow-md
        motion-reduce:transform-none
      "
    >
      {/* Accent bar on the left */}
      <div
        className="
          pointer-events-none
          absolute left-0 top-0 h-full w-1
          bg-linear-to-b from-accent-300 via-accent-400 to-accent-200
          dark:from-accent-200 dark:via-accent-300 dark:to-accent-100
        "
        aria-hidden="true"
      />

      <div className="flex flex-col gap-3 sm:gap-2 p-4 sm:p-5 pl-5 sm:pl-6">
        {/* Main clickable area */}
        <Link
          href={link}
          className="
            block rounded-lg
            focus:outline-none
            focus-visible:ring-2 focus-visible:ring-primary-400
            focus-visible:ring-offset-2 focus-visible:ring-offset-background
          "
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          aria-label={
            isExternal
              ? `Read more: ${title} (opens in a new tab)`
              : `Read more: ${title}`
          }
        >
          <h3
            className="
              text-lg sm:text-xl font-semibold
              text-foreground
              transition-colors-300 group-hover:text-primary
            "
          >
            {title}
          </h3>

          <CardMeta meta={meta} />

          {abstract && (
            <p className="mt-2 text-[14px] sm:text-sm leading-relaxed sm:leading-snug text-foreground line-clamp-3">
              {abstract}
            </p>
          )}
        </Link>

        {/* Links row */}
        <IconLinks meta={meta} />
      </div>
    </article>
  )
}

export default CardContent
