import CVSection from './CVSection'

const publicationData: Publication[] = []

const badgeColors: Record<PublicationType, string> = {
  'Full Paper': 'bg-green-200 text-green-800 dark:bg-green-300 dark:text-green-900',
  'Poster': 'bg-yellow-200 text-yellow-800 dark:bg-yellow-300 dark:text-yellow-900',
  'WIP': 'bg-blue-200 text-blue-800 dark:bg-blue-300 dark:text-blue-900',
  'Demo': 'bg-purple-200 text-purple-800 dark:bg-purple-300 dark:text-purple-900',
}

const CVPublicationList = () => {
  if (publicationData.length <= 0) {
    return null
  }

  return (
    <CVSection id="publications" title="Selected Publications">
      <ol className="list-decimal pl-5 space-y-4">
        {publicationData.map(({ authors, title, venue, note, type }) => (
          <li key={title} className="text-sm text-gray-900 dark:text-gray-100 space-y-1">
            <p>
              {title}
              {' '}
              <br />
              <span className="italic">{venue}</span>
              {note !== undefined && <span className="ml-1 text-gray-600 dark:text-gray-400">{note}</span>}
              {type && (
                <span
                  className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${badgeColors[type] || 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100'}`}
                >
                  {type}
                </span>
              )}
              <br />
              <span className="font-medium">{authors}</span>
            </p>
          </li>
        ))}
      </ol>
    </CVSection>
  )
}

export default CVPublicationList
