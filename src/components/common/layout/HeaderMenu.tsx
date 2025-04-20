'use client'

import type { ReactElement } from 'react'
import { useTheme } from '@zl-asica/react'
import { Binoculars, FileUser, FolderKanban, Moon, Sun, UserRoundSearch } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

interface MenuItem {
  href: string
  label: string
  icon: ReactElement
}

interface HeaderMenuProps {
  isMobile: boolean
  ulClassName?: string
  onClickHandler?: () => void
}

const HeaderMenu = ({ isMobile, ulClassName, onClickHandler }: HeaderMenuProps) => {
  const currentPath = usePathname()
  const { isDarkTheme, toggleTheme } = useTheme('elara-theme-color', 7)

  const menuItems: MenuItem[] = [
    { href: '/research', label: 'Research', icon: <Binoculars /> },
    { href: '/projects', label: 'Projects', icon: <FolderKanban /> },
    { href: '/resume', label: 'Resume', icon: <FileUser /> },
    { href: '/contact', label: 'Contact', icon: <UserRoundSearch /> },
  ]

  return (
    <ul className={`gap-4 ${ulClassName}`}>
      {menuItems.map(item => (
        <Fragment key={item.href}>
          <li className="group relative flex w-full items-center justify-center rounded-lg hover:bg-gray-light">
            <Link
              href={item.href}
              title={item.label}
              className={`relative flex w-full items-center gap-4 px-4 py-3 text-lg font-medium no-underline transition-all-300 group-hover:text-primary
                ${item.href !== '/' && currentPath.startsWith(item.href) ? 'text-primary' : ''}
                `}
              onClick={onClickHandler}
              aria-label={item.label}
            >
              <span
                className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-125"
                aria-hidden
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          </li>

          {/* Mobile - Divider */}
          {isMobile && (
            <li className="w-full" aria-hidden>
              <div className="h-[1px] w-full bg-gradient-to-r from-gray-light via-primary-300 to-gray-light" />
            </li>
          )}
        </Fragment>
      ))}

      {/* Theme Switch */}
      <li className={`${isMobile ? 'mt-4 flex w-full justify-around' : 'flex justify-center gap-4'}`}>
        <button
          type="button"
          className="text-hover-primary transition-all-300 group flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Toggle Theme"
          onClick={() => {
            toggleTheme()
            onClickHandler && onClickHandler()
          }}
        >
          <span className="flex h-6 w-6 items-center justify-center transition-all-300 group-hover:scale-125 ">
            {isDarkTheme ? <Sun className="h-full w-full" /> : <Moon className="h-full w-full" />}
          </span>
        </button>
      </li>
    </ul>
  )
}

export default HeaderMenu
