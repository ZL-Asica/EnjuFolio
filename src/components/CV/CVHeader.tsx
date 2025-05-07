import { authorFullName } from '@/lib/constants'
import { Download } from 'lucide-react'
import Link from 'next/link'

const CVHeader = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
      <div>
        <h1 className="text-4xl font-serif font-bold">{authorFullName}</h1>
        <p className="mt-1 text-primary-400 dark:text-primary-300">
          MSCS, Northwestern University
        </p>
      </div>
      <Link
        href="https://drive.google.com/file/d/1VKoOIOG33EzrZ1zqiE6a5SaIyphygqSa/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 sm:mt-0 inline-flex items-center text-secondary dark:text-secondary-dark text-hover-secondary"
        aria-label="Download CV PDF"
      >
        <Download className="w-6 h-6 mr-2" />
        Download CV
      </Link>
    </section>
  )
}

export default CVHeader
