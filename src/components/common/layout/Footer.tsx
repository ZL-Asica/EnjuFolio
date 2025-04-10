import Link from 'next/link'

const getYearDisplay = (): string => {
  const startYear = 2025
  const currentYear = new Date().getFullYear()

  if (startYear < currentYear) {
    return `${startYear} - ${currentYear}`
  }
  return String(currentYear)
}

const Footer = () => {
  return (
    <footer className="mb-1 mt-10 w-full">
      <div className="mx-auto max-w-7xl px-4 py-4 text-center">
        <p className="text-foreground-dark">
          {`© ${getYearDisplay()} `}
          <Link
            href="https://www.zla.app"
            target="_blank"
            aria-label="Elara Liu's portfolio"
            rel="noopener noreferrer"
            className="text-hover-primary underline-interactive"
          >
            Elara Liu
          </Link>
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
