import { Fragment } from 'react'
import { readAllFileMeta } from '@/utils'
import CardContent from './CardContent'

interface ContentCardsProps {
  PageType: PageType
}

const ContentCards = async ({ PageType }: ContentCardsProps) => {
  const summaries = await readAllFileMeta(PageType)

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold mb-2">
        {PageType.charAt(0).toUpperCase() + PageType.slice(1)}
      </h1>
      <p className="text-base font-medium text-secondary-500">
        {PageType === 'research'
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
                  <h2 className="text-base font-semibold tracking-[0.2em] uppercase text-secondary-500">
                    {thisYear}
                  </h2>
                </li>
              )}
              <li>
                <CardContent meta={item} pageType={PageType} />
              </li>
            </Fragment>
          )
        })}
      </ul>
    </main>
  )
}

export default ContentCards
