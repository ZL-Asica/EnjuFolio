'use client'

import { useTheme } from '@zl-asica/react'
import clsx from 'clsx'
import { Binoculars, FileUser, FolderKanban, House, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

interface MenuItem {
  href: string
  label: string
  icon: React.ReactElement
}

interface HeaderMenuProps {
  isMobile: boolean
  className?: string
  onClickHandler?: () => void
}

const HeaderMenu = ({ isMobile, className, onClickHandler }: HeaderMenuProps) => {
  const currentPath = usePathname()
  const { isDarkTheme, toggleTheme } = useTheme('enju-theme-color', 7)

  const menuItems: MenuItem[] = [
    { href: '/', label: 'Home', icon: <House aria-hidden="true" /> },
    { href: '/research', label: 'Research', icon: <Binoculars aria-hidden="true" /> },
    { href: '/projects', label: 'Projects', icon: <FolderKanban aria-hidden="true" /> },
    { href: '/cv', label: 'CV', icon: <FileUser aria-hidden="true" /> },
  ]

  return (
    <ul className={clsx('gap-4', className)}>
      {menuItems.map((item) => {
        const isActive
          = item.href === '/'
            ? currentPath === '/'
            : currentPath === item.href || currentPath.startsWith(`${item.href}/`)

        return (
          <Fragment key={item.href}>
            <li className="group relative flex w-full items-center justify-center rounded-lg hover:bg-gray-light">
              <Link
                href={item.href}
                title={item.label}
                className={`relative flex w-full items-center gap-4 px-4 py-3 text-lg font-medium no-underline transition-all-300 group-hover:scale-110 group-hover:text-primary
                  ${isActive ? 'text-primary' : 'text-foreground/90'}
                  ${isMobile ? 'text-xl font-semibold' : 'text-lg'}
                `}
                onClick={onClickHandler}
                aria-current={isActive ? 'page' : undefined}
              >
                <span
                  className={`inline-block transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:text-primary
                  ${isActive ? 'text-primary' : 'text-foreground/90'}
                `}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            </li>

            {/* Mobile - Divider */}
            {isMobile && (
              <li className="w-full" aria-hidden="true">
                <div className="h-px w-full rounded-full bg-linear-to-r from-gray-light via-primary-300 to-gray-light" />
              </li>
            )}
          </Fragment>
        )
      })}

      {/* Theme Switch */}
      <li className={`${isMobile ? 'mt-4 flex w-full justify-around' : 'flex justify-center gap-4'}`}>
        <button
          type="button"
          className="text-hover-primary transition-all-300 group flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md hover:cursor-pointer"
          aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
          aria-pressed={isDarkTheme}
          onClick={() => {
            toggleTheme()
            onClickHandler?.()
          }}
        >
          <span className="flex h-6 w-6 items-center justify-center transition-all-300 group-hover:scale-110">
            {isDarkTheme ? <Sun className="h-full w-full" aria-hidden="true" /> : <Moon className="h-full w-full" aria-hidden="true" />}
          </span>
        </button>
      </li>
    </ul>
  )
}

export default HeaderMenu
