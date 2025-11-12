import { formatAuthors, formatDateMonth } from '@/utils'

interface CardMetaProps {
  meta: FileMeta
}

const CardMeta = ({ meta }: CardMetaProps) => {
  const { authors, venue, date, advisors, status, role } = meta

  return (
    <div className="text-xs font-medium sm:text-[14px] gap-0 text-secondary-500 sm:gap-1 flex flex-col">
      <p className="mb-0.5">
        {formatAuthors(authors)}
        {venue !== undefined && (
          <>
            {' — '}
            <span className="italic">{venue}</span>
          </>
        )}
        {' '}
        <time dateTime={date}>
          (
          {formatDateMonth(date, true)}
          )
        </time>
      </p>

      {(status !== undefined || role !== undefined) && (
        <p>
          {status !== undefined && (
            <>
              <span className="italic mr-1">Status:</span>
              {status}
            </>
          )}
          {status !== undefined && role !== undefined && <span className="mx-2">•</span>}
          {role !== undefined && (
            <>
              <span className="italic mr-1">Role:</span>
              {role}
            </>
          )}
        </p>
      )}

      {advisors && advisors.length > 0 && (
        <p className="-mb-0.5">
          <span className="italic mr-0.5">Advised by:</span>
          {advisors.join(', ')}
        </p>
      )}
    </div>
  )
}

export default CardMeta
