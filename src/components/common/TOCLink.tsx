'use client'

import { slugPrefix } from '@/utils'

interface TOCLinkProps {
  item: TocItems
  activeSlug: string
  handleLinkClick: (slug: string) => void
}

const TOCLink = ({ item, activeSlug, handleLinkClick }: TOCLinkProps) => {
  const isActive = activeSlug === item.slug
  const titleSlug = slugPrefix(item.slug, item.level)

  return (
    <li
      key={item.slug}
      className={`list-none py-1 text-base transition-all ${
        isActive ? 'font-bold text-primary' : 'text-gray-dark'
      } `}
      style={{ marginLeft: `${(item.level - 2) * 0.7}em` }}
    >
      <a
        href={`#${item.slug}`}
        onClick={(event_) => {
          event_.preventDefault()
          handleLinkClick(item.slug)
        }}
        className="block break-words no-underline transition-all text-hover-primary"
      >
        {`${titleSlug}${item.title}`}
      </a>
    </li>
  )
}

export default TOCLink
