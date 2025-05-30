import Link from 'next/link'
import { IconLinks } from '@/components/common'
import CardMeta from './CardMeta'

interface CardContentProps {
  meta: FileMeta
  page: string
}

const CardContent = ({ meta, page }: CardContentProps) => {
  const { title, slug, redirect } = meta
  const link = redirect !== undefined && redirect !== ''
    ? redirect
    : `/${page}/${slug}`
  const isExternal = link.startsWith('http')

  return (
    <li className="border-l-4 pl-4 border-primary-300 motion-safe:animate-mask-reveal dark:border-primary-200 space-y-4 sm:space-y-2">
      <h2 className="text-lg sm:text-xl font-semibold">
        <Link
          href={link}
          className="underline-interactive"
          aria-label={`Read more: ${title}`}
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {title}
        </Link>
      </h2>
      <CardMeta meta={meta} />
      <p className="text-sm leading-relaxed sm:leading-snug">{meta.abstract}</p>
      <IconLinks meta={meta} />
    </li>
  )
}

export default CardContent
