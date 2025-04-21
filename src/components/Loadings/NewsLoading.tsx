const NewsLoading = () => {
  return (
    <div className="animate-pulse">
      <h2 className="text-2xl font-semibold mb-6">News</h2>
      <ul className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-base text-gray-dark"
          >
            {/* Date skeleton */}
            <div className="w-[110px] h-5 bg-gray-200 dark:bg-gray-600 rounded" />

            {/* Content paragraph skeleton */}
            <div className="space-y-2 flex-1">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-600 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-600 rounded" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsLoading
