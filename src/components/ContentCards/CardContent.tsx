import Link from 'next/link'
import { IconLinks } from '@/components/common'
import CardMeta from './CardMeta'

interface CardContentProps {
  meta: FileMeta
  page: PageType
}

const CardContent = ({ meta, page }: CardContentProps) => {
  const { title, slug, redirect } = meta
  const link = redirect !== undefined && redirect !== '' ? redirect : `/${page}/${slug}`
  const isExternal = link.startsWith('http')

  return (
    <article className="border-l-4 pl-4 border-primary-300 dark:border-primary-200 motion-safe:animate-mask-reveal space-y-3 sm:space-y-2">
      <h3 className="text-lg sm:text-xl font-semibold">
        <Link
          href={link}
          className="underline-interactive"
          aria-label={`Read more: ${title}${isExternal ? ' (opens in a new tab)' : ''}`}
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {title}
        </Link>
      </h3>
      <CardMeta meta={meta} />
      <p className="text-[14px] sm:text-sm leading-relaxed sm:leading-snug text-foreground">
        {meta.abstract}
      </p>
      <IconLinks meta={meta} />
    </article>
  )
}

export default CardContent
