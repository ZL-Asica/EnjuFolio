import type { Metadata } from 'next'
import ContentCard from '@/components/ContentCard'
import { readAllFileMeta } from '@/utils'
import { Fragment } from 'react'

export const metadata: Metadata = {
  title: 'Projects | Elara\'s Portfolio',
  description: 'Explore Elara Liu\'s projects, showcasing her skills and creativity in various domains.',
  keywords: 'projects, elara, portfolio, Zhuoran',
  authors: { name: 'Elara Liu', url: 'https://zla.app' },
  openGraph: {
    type: 'article',
    title: 'Projects | Elara\'s Portfolio',
    description: 'Explore Elara Liu\'s projects, showcasing her skills and creativity in various domains.',
    tags: 'projects, elara, portfolio, Zhuoran',
    url: `https://zla.app/projects`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | Elara's Portfolio`,
    description: 'Explore Elara Liu\'s projects, showcasing her skills and creativity in various domains.',
  },
  alternates: { canonical: `https://zla.app/projects` },
}

export default async function ProjectPage() {
  const summaries = (await readAllFileMeta('projects')).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold mb-8">
        Projects
      </h1>
      <ul className="space-y-6">
        {summaries.map((item, idx) => {
          const prevYear = idx > 0
            ? new Date(summaries[idx - 1].date).getFullYear()
            : null
          const thisYear = new Date(item.date).getFullYear()
          const showYearHeader = thisYear !== prevYear

          return (
            <Fragment key={item.slug}>
              {showYearHeader && (
                <li className="mt-8">
                  <span className="text-2xl font-semibold text-primary-300 dark:text-primary-dark-200">
                    {thisYear}
                  </span>
                </li>
              )}
              <li>
                <ContentCard meta={item} page="projects" />
              </li>
            </Fragment>
          )
        })}
      </ul>
    </div>
  )
}
