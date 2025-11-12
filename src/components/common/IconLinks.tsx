import { isBlank } from '@zl-asica/react/utils'
import Link from 'next/link'
import { LuExternalLink, LuFileText, LuGithub } from 'react-icons/lu'
import { SiDoi } from 'react-icons/si'

interface LinkItem {
  href: string
  label: string
  icon: React.ReactNode
  text: string
}

interface CardLinksProps {
  meta: FileMeta
  className?: string
}

const CardLinks = ({ meta, className }: CardLinksProps) => {
  const { doi, pdf, url, github } = meta

  const links = [
    !isBlank(doi) && {
      href: `https://doi.org/${doi}`,
      label: 'DOI link',
      icon: <SiDoi className="h-4 w-4" aria-hidden />,
      text: doi,
    },
    !isBlank(pdf) && {
      href: pdf,
      label: 'PDF download',
      icon: <LuFileText className="h-4 w-4" aria-hidden />,
      text: 'PDF',
    },
    !isBlank(url) && {
      href: url,
      label: 'External link',
      icon: <LuExternalLink className="h-4 w-4" aria-hidden />,
      text: 'Link',
    },
    !isBlank(github) && {
      href: github,
      label: 'GitHub link',
      icon: <LuGithub className="h-4 w-4" aria-hidden />,
      text: 'Code',
    },
  ].filter(Boolean) as LinkItem[]

  if (links.length === 0) {
    return null
  }

  return (
    <div
      className={`
        mt-3 flex flex-wrap items-center gap-2
        text-xs sm:text-[13px]
        text-primary-700 dark:text-primary-200
        ${className ?? ''}
      `}
      aria-label="External resource links"
    >
      {links.map(({ href, label, icon, text }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-1
            rounded-full border border-primary-200/70 dark:border-primary-500/40
            bg-primary-50/60 dark:bg-primary-500/10
            px-3 py-1
            font-medium
            transition-all-300
            hover:bg-primary-100 dark:hover:bg-primary-500/20
            hover:-translate-y-px
          "
        >
          {icon}
          <span className="truncate max-w-40" title={label === 'DOI link' ? text : undefined}>
            {text}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default CardLinks
