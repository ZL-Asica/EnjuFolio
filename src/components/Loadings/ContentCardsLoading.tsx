const ContentCardsLoading = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-pulse">
      {/* Page Title */}
      <div className="h-10 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mb-10" />

      <ul className="space-y-10">
        {/* Fake year headers + cards */}
        {Array.from({ length: 3 }).map((_, sectionIdx) => (
          <li key={`section-${sectionIdx}`} className="space-y-6">
            {/* Year Header */}
            <div className="h-8 w-24 bg-primary-200 dark:bg-primary-dark-300 rounded" />

            {/* Cards per year */}
            {Array.from({ length: 2 }).map((_, cardIdx) => (
              <div
                key={`card-${sectionIdx}-${cardIdx}`}
                className="border-l-4 pl-4 border-primary-300 dark:border-primary-200 space-y-3"
              >
                {/* Title */}
                <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />

                {/* Meta info (authors, venue, date) */}
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-600 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-600 rounded" />

                {/* Abstract */}
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, lineIdx) => (
                    <div
                      key={`abstract-line-${lineIdx}`}
                      className={`h-4 ${lineIdx === 2 ? 'w-4/5' : 'w-full'} bg-gray-200 dark:bg-gray-600 rounded`}
                    />
                  ))}
                </div>

                {/* Action links (DOI, PDF, etc.) */}
                <div className="mt-2 flex gap-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={`btn-${i}`}
                      className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded"
                    />
                  ))}
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentCardsLoading
