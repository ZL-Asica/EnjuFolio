export const formatAuthors = (authors: string[], myName = 'Zhuoran Liu'): React.ReactNode => {
  if (!Array.isArray(authors) || authors.length === 0) {
    return null
  }

  const highlighted = authors.map((author, index) => {
    const isMe = author === myName
    const nameNode = isMe
      ? (
        // eslint-disable-next-line react/no-array-index-key
          <span key={index} className="underline underline-offset-2 decoration-wavy">{author}</span>
        )
      : (
        // eslint-disable-next-line react/no-array-index-key
          <span key={index}>{author}</span>
        )

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
