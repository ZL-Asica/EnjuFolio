import Link from 'next/link'
import SocialMediaLinks from './SocialMediaLinks'

const Footer = () => {
  return (
    <footer className="mb-1 mt-10 w-full">
      <SocialMediaLinks />
      <div className="mx-auto max-w-7xl px-4 py-4 text-center">
        <p className="text-foreground-dark">
          {`© ${new Date().getFullYear()} `}
          <Link
            href="https://www.zla.app/"
            target="_blank"
            aria-label="Elara Liu's portfolio"
            rel="noopener noreferrer"
            className="text-hover-primary underline-interactive"
          >
            Elara Liu
          </Link>
          {' '}
          | All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
