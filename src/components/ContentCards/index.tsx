import { Fragment } from 'react'
import { readAllFileMeta } from '@/utils'
import CardContent from './CardContent'

interface ContentCardsProps {
  page: PageType
}

const ContentCards = async ({ page }: ContentCardsProps) => {
  const summaries = await readAllFileMeta(page)

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold mb-2">
        {page.charAt(0).toUpperCase() + page.slice(1)}
      </h1>
      <p className="text-base font-medium text-secondary-500">
        {page === 'research'
          ? `Selected research projects and works-in-progress, ordered by year.`
          : 'Selected technical projects and works-in-progress, ordered by year.'}
      </p>
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
                <li className="mt-10 mb-2">
                  <span className="text-base font-semibold tracking-[0.2em] uppercase text-secondary-500">
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
    </main>
  )
}

export default ContentCards
