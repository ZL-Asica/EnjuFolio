import React from 'react'

interface SmoothScrollLinkProps {
  href: string
  title?: string
  children: React.ReactNode
  className?: string
  onClick?: (event_: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const SmoothScrollLink = ({ href, title, children, className, onClick }: SmoothScrollLinkProps) => {
  const handleClick = (event_: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event_.preventDefault()
    const targetId = href.replace('#', '') // Get the target ID
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 20, // Adjusted for the fixed header
        behavior: 'smooth',
      })
    }
    onClick && onClick(event_)
  }

  return (
    <a
      href={href}
      title={title}
      onClick={handleClick}
      className={className}
      aria-label={title}
    >
      {children}
    </a>
  )
}

export default SmoothScrollLink
