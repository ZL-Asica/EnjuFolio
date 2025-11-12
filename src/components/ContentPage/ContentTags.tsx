import { LuTag } from 'react-icons/lu'

interface ContentTagsProps {
  keywords?: string[]
}

const ContentTags = ({ keywords }: ContentTagsProps) => {
  if (!keywords || keywords.length === 0) {
    return null
  }

  return (
    <div className="mt-4 text-sm text-gray-700 dark:text-gray-300" aria-label="Keywords">
      <div className="flex items-center justify-center mb-2">
        <LuTag className="w-5 h-5 mr-1 text-accent-600 dark:text-accent-400" />
        Keywords:
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {keywords.map(kw => (
          <kbd
            key={kw}
            className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            {kw}
          </kbd>
        ))}
      </div>
    </div>
  )
}

export default ContentTags
