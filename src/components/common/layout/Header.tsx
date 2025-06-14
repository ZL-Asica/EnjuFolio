'use client'

import { useClickOutside, useHideOnScrollDown, useToggle } from '@zl-asica/react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { LuMenu } from 'react-icons/lu'
import { EnjuConfig } from '@/enju.config'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  const [isOpen, toggleOpen] = useToggle()
  const menuReference = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const isHeaderVisible = useHideOnScrollDown(headerRef)

  useClickOutside(menuReference, () => {
    if (isOpen) {
      toggleOpen()
    }
  })

  // Avoid scrolling when the menu is open (mobile)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-xl bg-background/60 shadow-md transition-transform-300
        ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      {/* Navigation Menu */}
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 bg-background">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Navigate to Home Page"
          className="transition-all-300 text-hover-primary text-2xl font-bold text-foreground no-underline"
        >
          <p>{EnjuConfig.siteShortName}</p>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="transition-transform-300 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-foretext-foreground text-2xl bg-foreground text-background shadow-md hover:scale-110 md:hidden"
          onClick={toggleOpen}
          aria-label="Toggle menu"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls="mobile-menu"
        >
          {!isOpen && <LuMenu strokeWidth={2.5} />}
        </button>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          ref={menuReference}
          className={`transition-all-300 fixed right-0 top-0 z-50 h-screen w-1/2 min-w-52 max-w-64 backdrop-blur-xl bg-background/70 shadow-2xl md:hidden
            ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}
        >
          <HeaderMenu
            isMobile
            ulClassName="flex flex-col items-start gap-4 p-6"
            onClickHandler={toggleOpen}
          />
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 h-screen w-screen bg-black/70 transition-opacity-300 md:hidden"
            onClick={(event_) => {
              event_.preventDefault()
              event_.stopPropagation()
              toggleOpen()
            }}
            aria-hidden
          />
        )}

        {/* Desktop Menu */}
        <HeaderMenu
          isMobile={false}
          ulClassName="hidden md:flex md:gap-6"
        />
      </nav>
    </header>
  )
}

export default Header
