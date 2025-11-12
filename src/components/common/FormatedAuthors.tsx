import { authorAllNames } from '@/lib/configHelper'

interface FormatedAuthorsProps {
  authors?: string[]
}

const FormatedAuthors = ({
  authors,
}: FormatedAuthorsProps) => {
  if (!Array.isArray(authors) || authors.length === 0) {
    return null
  }

  const meIndex = authors.findIndex(author => authorAllNames.includes(author))

  return (
    <>
      {authors.map((author, index) => {
        const isMe = index === meIndex
        const nameNode = (
          <span
            key={`${author}-${index}`}
            className={isMe ? 'underline underline-offset-2 decoration-wavy' : undefined}
          >
            {author}
          </span>
        )

        if (index === 0) {
          return nameNode
        }

        return (
          <span key={`${author}-${index}-wrapper`}>
            {', '}
            {nameNode}
          </span>
        )
      })}
    </>
  )
}

export default FormatedAuthors
