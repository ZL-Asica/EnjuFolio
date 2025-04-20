import type { Metadata } from 'next'
import ContentCard from '@/components/ContentCard'
import { readAllFileMeta } from '@/utils'
import { Fragment } from 'react'

export const metadata: Metadata = {
  title: 'Research | Elara\'s Portfolio',
  description: 'Explore Elara Liu\'s research, showcasing her skills and creativity in various domains.',
  keywords: 'research, elara, portfolio, Zhuoran',
  authors: { name: 'Elara Liu', url: 'https://zla.app' },
  openGraph: {
    type: 'article',
    title: 'Research | Elara\'s Portfolio',
    description: 'Explore Elara Liu\'s research, showcasing her skills and creativity in various domains.',
    tags: 'research, elara, portfolio, Zhuoran',
    url: `https://zla.app/research`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Research | Elara's Portfolio`,
    description: 'Explore Elara Liu\'s research, showcasing her skills and creativity in various domains.',
  },
  alternates: { canonical: `https://zla.app/research` },
}

export default async function ResearchPage() {
  const summaries = (await readAllFileMeta('research')).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold mb-8">
        Research
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
                <ContentCard meta={item} page="research" />
              </li>
            </Fragment>
          )
        })}
      </ul>
    </div>
  )
}
