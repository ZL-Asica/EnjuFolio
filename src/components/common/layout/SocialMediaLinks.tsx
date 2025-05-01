'use client'

import { useObfuscatedEmail } from '@zl-asica/react'
import Link from 'next/link'
import {
  FaBluesky,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaOrcid,
  FaRss,
  FaTelegram,
} from 'react-icons/fa6'

const socialData: SocialData = {
  github_username: {
    url: 'https://github.com/ZL-Asica',
    Icon: FaGithub,
    label: 'GitHub',
  },
  linkedin_username: {
    url: 'https://www.linkedin.com/in/elara-liu',
    Icon: FaLinkedin,
    label: 'LinkedIn',
  },
  instagram_id: {
    url: 'https://www.instagram.com/zl_asica',
    Icon: FaInstagram,
    label: 'Instagram',
  },
  orcid_id: {
    url: 'https://orcid.org/0009-0008-7221-2324',
    Icon: FaOrcid,
    label: 'ORCID',
  },
  telegram_username: {
    url: 'https://t.me/zl_asica',
    Icon: FaTelegram,
    label: 'Telegram',
  },
  bluesky_username: {
    url: 'https://bsky.app/profile/zla.app',
    Icon: FaBluesky,
    label: 'Bluesky',
  },
  email: {
    url: null,
    Icon: FaEnvelope,
    label: 'Email',
  },
  rss: {
    url: '/feed.xml',
    Icon: FaRss,
    label: 'RSS Feed',
  },
}

interface SocialMediaLinksProps {
  className?: string
  iconSize?: number
}

const SocialMediaLinks = ({
  className = '',
  iconSize = 32,
}: SocialMediaLinksProps) => {
  const { href: emailUrl } = useObfuscatedEmail('elara.liu@u.northwestern.edu')

  return (
    <div
      className={`mx-4 mb-5 flex flex-wrap justify-center gap-y-4 space-x-4 ${className}`}
    >
      {Object.entries(socialData).map(([key, { url, Icon, label }]) => {
        const finalUrl = key === 'email' ? emailUrl : url

        return (
          <Link
            key={key}
            href={finalUrl ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            prefetch={false}
            className="group relative inline-block"
          >
            <span className="sr-only">{label}</span>
            <Icon
              size={iconSize}
              className="text-hover-primary transition-all-700 group-hover:scale-150"
              aria-hidden="true"
            />
            {' '}

          </Link>
        )
      })}
    </div>
  )
}

export default SocialMediaLinks
