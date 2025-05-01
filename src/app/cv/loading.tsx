export default function CVPageSkeleton() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 animate-pulse">
      {/* Header */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
        <div className="space-y-2">
          <div className="h-8 w-2/5 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        <div className="mt-4 sm:mt-0 h-6 w-28 bg-gray-200 dark:bg-gray-700 rounded" />
      </section>

      {/* Contact Info */}
      <section className="mb-8">
        <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <ul className="space-y-2">
          <li className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
          <li className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
          <li className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
        </ul>
      </section>

      {/* Education */}
      <section className="mb-8">
        <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <ul className="space-y-4">
          <li className="space-y-1">
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-3 w-3/5 bg-gray-200 dark:bg-gray-700 rounded" />
          </li>
          <li className="space-y-1">
            <div className="h-4 w-2/5 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
          </li>
        </ul>
      </section>

      {/* Interests */}
      <section className="mb-8">
        <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="mb-8">
        <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <ul className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <li key={i} className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
          ))}
        </ul>
      </section>

      {/* Teaching */}
      <section className="mb-8">
        <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <ul className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="space-y-2">
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-3 w-3/5 bg-gray-200 dark:bg-gray-700 rounded" />
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <dl className="space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}>
              <dt className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
              <dd className="flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((__, j) => (
                  <span
                    key={j}
                    className="h-5 w-12 bg-gray-200 dark:bg-gray-700 rounded"
                  >
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}
