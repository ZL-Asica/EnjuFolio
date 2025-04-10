'use client'

import { useTOCLogic } from '@/hooks'
import { useIsTop } from '@zl-asica/react'
import { List } from 'lucide-react'

import TOCLink from './TOCLink'

interface TOCProps {
  items: TocItems[]
}

const TOC = ({ items }: TOCProps) => {
  const { activeSlug, isOpen, toggleOpen, handleLinkClick, tocReference } = useTOCLogic()
  const isVisible = !useIsTop(100)

  return (
    <div
      className={`${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'} duration-200 ease-in-out`}
    >
      <button
        type="button"
        hidden={!isVisible}
        onClick={toggleOpen}
        aria-label={isOpen ? 'Close Table of Contents' : 'Open Table of Contents'}
        className={`fixed bottom-28 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-300 p-3 text-white shadow-lg transition-transform md:right-16 lg:right-20 xl:hidden ${
          isOpen ? 'translate-y-2' : 'hover:scale-110'
        }`}
      >
        <List size={24} strokeWidth={3} />
      </button>
      <menu
        ref={tocReference}
        hidden={!isVisible}
        className={`fixed bottom-40 top-auto z-40 max-h-[60vh] w-auto max-w-56 overflow-auto rounded-lg bg-foreground-light p-3 shadow-md transition-all xl:bottom-auto xl:top-36 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } right-8 xl:right-[calc((100vw-1400px)/2+10px)] xl:block xl:translate-x-0 ${!isOpen && 'hidden xl:block'} scrollbar-custom text-wrap break-words`}
      >
        <h2 className="mb-4 text-lg font-semibold text-primary-300">
          Table of Contents
        </h2>
        <ul className="m-0 list-none p-0">
          {items.map(item => (
            <TOCLink
              key={item.slug}
              item={item}
              activeSlug={activeSlug}
              handleLinkClick={handleLinkClick}
            />
          ))}
        </ul>
      </menu>
    </div>
  )
}

export default TOC
