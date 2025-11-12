import { Fragment } from 'react'
import { readAllFileMeta } from '@/utils'
import AnimatedListItem from './AnimatedListItem'
import CardContent from './CardContent'

interface ContentCardsProps {
  PageType: PageType
}

const ContentCards = async ({ PageType }: ContentCardsProps) => {
  const summaries = await readAllFileMeta(PageType)

  const title = PageType.charAt(0).toUpperCase() + PageType.slice(1)
  const description
    = PageType === 'research'
      ? 'Selected research projects and works-in-progress, ordered by year.'
      : 'Selected technical projects and works-in-progress, ordered by year.'

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight mb-2">
          {title}
        </h1>
        <p className="text-base sm:text-lg font-medium text-secondary-500">
          {description}
        </p>
      </header>

      <ul className="space-y-6">
        {summaries.map((item, idx) => {
          const prevYear = idx > 0 ? new Date(summaries[idx - 1].date).getFullYear() : null
          const thisYear = new Date(item.date).getFullYear()
          const showYearHeader = thisYear !== prevYear

          // Use a "global" index for staggering
          // header + card don't share the same delay
          const baseIndex = idx * 2

          return (
            <Fragment key={item.slug}>
              {showYearHeader && (
                <AnimatedListItem
                  index={baseIndex}
                  className="mt-10 mb-2"
                >
                  <h2 className="text-base font-semibold tracking-[0.2em] uppercase text-secondary-500">
                    {thisYear}
                  </h2>
                </AnimatedListItem>
              )}

              <AnimatedListItem
                index={baseIndex + (showYearHeader ? 1 : 0)}
              >
                <CardContent meta={item} pageType={PageType} />
              </AnimatedListItem>
            </Fragment>
          )
        })}
      </ul>
    </main>
  )
}

export default ContentCards
