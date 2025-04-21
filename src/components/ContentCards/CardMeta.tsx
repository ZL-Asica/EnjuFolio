import { formatAuthors, formatDateMonth } from '@/utils'

interface CardMetaProps {
  meta: FileMeta
}

const CardMeta = ({ meta }: CardMetaProps) => {
  const { authors, venue, date, advisors } = meta
  return (
    <>
      <p className="text-xs sm:text-sm text-secondary-400 mb-1">
        {formatAuthors(authors)}
        {venue !== undefined && (
          <>
            {' — '}
            <span className="italic">{venue}</span>
          </>
        )}
        {' '}
        <time dateTime={date} aria-label={`Published on ${formatDateMonth(date)}`}>
          (
          {formatDateMonth(date, true)}
          )
        </time>
      </p>
      {advisors !== undefined && advisors?.length > 0 && (
        <p className="text-xs sm:text-sm text-secondary-400 mb-1">
          <span className="italic mr-0.5">Advised by:</span>
          {' '}
          {advisors.join(', ')}
        </p>
      )}
    </>
  )
}

export default CardMeta
