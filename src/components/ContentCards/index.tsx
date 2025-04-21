import { readAllFileMeta } from '@/utils'
import { Fragment } from 'react'
import CardContent from './CardContent'

interface ContentCardsProps {
  page: string
}

const ContentCards = async ({ page }: ContentCardsProps) => {
  const summaries = await readAllFileMeta(page)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold mb-8">
        {page.charAt(0).toUpperCase() + page.slice(1)}
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
                <CardContent meta={item} page={page} />
              </li>
            </Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default ContentCards
