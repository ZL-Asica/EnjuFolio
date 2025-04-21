const ContentPageLoading = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 animate-pulse space-y-8">
      {/* Title */}
      <div className="h-10 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />

      {/* Authors */}
      <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-600 rounded" />
      <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-600 rounded" />

      {/* Metadata */}
      <div className="flex justify-center gap-4 mt-2">
        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded" />
        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded" />
      </div>

      {/* Links */}
      <div className="flex justify-center gap-4 mt-4">
        <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-6 w-14 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>

      {/* Keywords */}
      <div className="flex justify-center flex-wrap gap-2 mt-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-6 w-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded"
          />
        ))}
      </div>

      {/* Abstract Section */}
      <section>
        <div className="h-6 w-28 bg-primary-200 dark:bg-primary-500 rounded mb-3" />
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`abstract-${i}`}
              className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded"
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gray-300 dark:bg-gray-700 my-6" />

      {/* Content Blocks */}
      <section className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`content-line-${i}`}
            className={`h-4 ${i % 3 === 0 ? 'w-5/6' : 'w-full'} bg-gray-200 dark:bg-gray-600 rounded`}
          />
        ))}
        <div className="h-6 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mt-4" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`content-block-${i}`}
            className={`h-4 ${i % 2 === 0 ? 'w-full' : 'w-3/4'} bg-gray-200 dark:bg-gray-600 rounded`}
          />
        ))}
      </section>
    </div>
  )
}

export default ContentPageLoading
