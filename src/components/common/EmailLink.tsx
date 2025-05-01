'use client'

import { useObfuscatedEmail } from '@zl-asica/react'
import Link from 'next/link'

interface EmailLinkProps {
  emailAddress: string
  className?: string
  children?: React.ReactNode
}

const EmailLink = ({ emailAddress, className, children }: EmailLinkProps) => {
  const { href, text } = useObfuscatedEmail(emailAddress)

  if (text === null) {
    return (
      <span className="ml-1 inline-block w-[10ch] h-[1em] animate-pulse bg-gray-300 rounded-sm" />
    )
  }

  return (
    <Link
      href={href ?? '#'}
      className={`ml-1 underline-interactive text-hover-primary ${className}`}
      title={text ?? ''}
    >
      {children !== undefined ? children : text}
    </Link>
  )
}

export default EmailLink
