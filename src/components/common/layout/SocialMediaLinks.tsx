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
import { EnjuConfig } from '@/enju.config'
import { showRss } from '@/lib/configHelper'

const socialData: SocialData = {
  github: {
    url: EnjuConfig.socialLinks.github,
    Icon: FaGithub,
    label: 'GitHub',
  },
  linkedin: {
    url: EnjuConfig.socialLinks.linkedin,
    Icon: FaLinkedin,
    label: 'LinkedIn',
  },
  instagram: {
    url: EnjuConfig.socialLinks.instagram,
    Icon: FaInstagram,
    label: 'Instagram',
  },
  orcid: {
    url: `https://orcid.org/${EnjuConfig.socialLinks.orcid}`,
    Icon: FaOrcid,
    label: 'ORCID',
  },
  telegram: {
    url: EnjuConfig.socialLinks.telegram,
    Icon: FaTelegram,
    label: 'Telegram',
  },
  bluesky: {
    url: EnjuConfig.socialLinks.bluesky,
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
  const { href: emailUrl } = useObfuscatedEmail(EnjuConfig.socialLinks.email ?? '')

  const showEmail = socialData.email.url === null && emailUrl !== null

  return (
    <div
      className={`mx-4 mb-5 flex flex-wrap justify-center gap-y-4 space-x-4 ${className}`}
    >
      {Object.entries(socialData)
        .filter(([key, { url }]) => {
          if (key === 'email') {
            return showEmail
          }
          if (key === 'rss') {
            return showRss
          }
          return (url !== undefined && url !== null && typeof url === 'string' && url.length > 2)
        })
        .map(([key, { url, Icon, label }]) => {
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
            </Link>
          )
        })}
    </div>
  )
}

export default SocialMediaLinks
