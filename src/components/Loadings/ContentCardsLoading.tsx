const ContentCardsLoading = () => {
  const sections = Array.from({ length: 3 })
  const cardsPerSection = 2

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Header skeleton */}
      <header className="mb-8 animate-pulse">
        <div className="h-8 w-1/3 rounded bg-gray-200/80 dark:bg-gray-700/70" />
        <div className="mt-3 h-4 w-2/3 rounded bg-gray-200/70 dark:bg-gray-700/60" />
      </header>

      <ul className="space-y-6">
        {sections.map((_, sectionIdx) => (
          <li key={`section-${sectionIdx}`} className="space-y-4 animate-pulse">
            {/* Year header skeleton */}
            <div className="mt-6 mb-1 h-3 w-16 rounded-full bg-gray-200/80 dark:bg-gray-700/70" />

            {/* Card skeletons */}
            {Array.from({ length: cardsPerSection }).map((__, cardIdx) => (
              <div
                key={`card-${sectionIdx}-${cardIdx}`}
                className="
                  relative overflow-hidden
                  rounded-xl border border-border/60
                  bg-background/70
                  shadow-sm
                "
              >
                {/* Left accent bar */}
                <div
                  className="
                    pointer-events-none
                    absolute left-0 top-0 h-full w-1
                    bg-linear-to-b from-accent-200 via-accent-300 to-accent-100
                    dark:from-accent-200 dark:via-accent-300 dark:to-accent-100
                  "
                  aria-hidden="true"
                />

                <div className="p-4 sm:p-5 pl-5 sm:pl-6 space-y-3">
                  {/* Title */}
                  <div className="h-5 w-3/4 rounded bg-gray-200/80 dark:bg-gray-700/70" />

                  {/* Meta (authors / venue / year) */}
                  <div className="h-3 w-2/3 rounded bg-gray-200/70 dark:bg-gray-700/60" />
                  <div className="h-3 w-1/2 rounded bg-gray-200/60 dark:bg-gray-700/50" />

                  {/* Abstract lines */}
                  <div className="mt-2 space-y-2">
                    <div className="h-3 w-full rounded bg-gray-200/70 dark:bg-gray-700/60" />
                    <div className="h-3 w-11/12 rounded bg-gray-200/70 dark:bg-gray-700/60" />
                    <div className="h-3 w-4/5 rounded bg-gray-200/70 dark:bg-gray-700/60" />
                  </div>

                  {/* Links row (DOI, PDF, Code…) */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((___, i) => (
                      <div
                        key={`pill-${sectionIdx}-${cardIdx}-${i}`}
                        className="
                          h-6 w-20
                          rounded-full bg-gray-200/80 dark:bg-gray-700/70
                        "
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default ContentCardsLoading
