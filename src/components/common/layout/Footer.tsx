import { authorPreferredName } from '@/lib/constants'
import Link from 'next/link'
import SocialMediaLinks from './SocialMediaLinks'

const Footer = () => {
  return (
    <footer className="mb-2 mt-10 w-full">
      <div className="mx-auto max-w-7xl px-4 py-4 text-center space-y-2 text-base">
        <SocialMediaLinks />
        <p className="text-gray-dark">
          {`© ${new Date().getFullYear()} ${authorPreferredName} | All rights reserved.`}
        </p>
        <p className="text-gray-dark">
          {/* Please leave this theme credit intact. Really appreciate it! */}
          Themed by
          {' '}
          <Link
            href="https://github.com/ZL-Asica/EnjuFolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hover-primary underline-interactive"
          >
            EnjuFolio
          </Link>
          {' '}
          · Crafted by
          {' '}
          <Link
            href="https://zla.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hover-primary underline-interactive"
          >
            ZL Asica
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
