import { authorAllNames } from '@/lib/configHelper'
import { assignUUID } from '@zl-asica/react/utils'

export const formatAuthors = (authors: string[]): React.ReactNode => {
  if (!Array.isArray(authors) || authors.length === 0) {
    return null
  }

  let findAuthor = false
  const highlighted = assignUUID(authors).map(({ id, value: author }, index) => {
    const isMe = authorAllNames.includes(author)

    const nameNode = (!findAuthor && isMe)
      ? (
          <span key={id} className="underline underline-offset-2 decoration-wavy">
            {author}
          </span>
        )
      : <span key={id}>{author}</span>

    if (isMe) {
      findAuthor = true
    }

    // Handle comma and "and" placement
    if (authors.length === 1) {
      return nameNode
    }
    if (index === 0) {
      return [nameNode]
    }
    return [', ', nameNode]
  })

  return <>{highlighted.flat()}</>
}

/**
 * Remove trailing slash
 * @param url - The URL to normalize
 * @returns The normalized URL
 */
export const removeUrlTrailingSlash = (url: string) => url.replace(/\/$/, '')

/**
 * Check if a string is valid
 * @param str - The string to check
 * @returns True if the string is valid, false otherwise
 */
export const validString = (str?: string | null) => str !== undefined && str !== null && typeof str === 'string' && str.length > 0
