import { ExternalLink, FileText, Github, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

interface LinkItem {
  href: string
  label: string
  icon: React.ReactNode
  text: string
}

interface CardLinksProps {
  meta: FileMeta
  classNames?: string
}

const CardLinks = ({ meta, classNames }: CardLinksProps) => {
  const { doi, pdfUrl, url, github } = meta

  const links = [
    doi !== undefined && {
      href: `https://doi.org/${doi}`,
      label: 'DOI link',
      icon: <LinkIcon className="w-5 h-5 mr-1" />,
      text: doi,
    },
    pdfUrl !== undefined && {
      href: pdfUrl,
      label: 'PDF download',
      icon: <FileText className="w-5 h-5 mr-1" />,
      text: 'PDF',
    },
    url !== undefined && {
      href: url,
      label: 'External link',
      icon: <ExternalLink className="w-5 h-5 mr-1" />,
      text: 'Link',
    },
    github !== undefined && {
      href: github,
      label: 'GitHub link',
      icon: <Github className="w-5 h-5 mr-1" />,
      text: 'Code',
    },
  ].filter(Boolean) as LinkItem[]

  if (links.length === 0) {
    return null
  }

  return (
    <div
      className={`mt-2 flex flex-wrap gap-2 sm:space-x-4 items-center text-accent-500 dark:text-accent-300 ${classNames}`}
      role="group"
      aria-label="External resource links"
    >
      {links.map(({ href, label, icon, text }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex items-center text-sm text-hover-secondary transition-all-300 hover:opacity-80"
        >
          {icon}
          {' '}
          {text}
        </Link>
      ))}
    </div>
  )
}

export default CardLinks
