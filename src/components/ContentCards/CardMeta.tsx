import { isBlank } from '@zl-asica/react/utils'
import { FormatedAuthors } from '@/components/common'

interface CardMetaProps {
  meta: FileMeta
}

const CardMeta = ({ meta }: CardMetaProps) => {
  const { authors, venue, advisors, status, role } = meta

  return (
    <div className="mt-1 space-y-1 text-xs sm:text-[13px] font-medium text-secondary-600 dark:text-secondary-300">
      {/* Authors / venue / year */}
      <p className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
        <span className="max-w-prose wrap-break-word items-baseline">
          <FormatedAuthors authors={authors} />
        </span>

        {!isBlank(venue) && (
          <>
            <span aria-hidden>·</span>
            <span className="italic">{venue}</span>
          </>
        )}
      </p>

      {/* Status / role */}
      {(!isBlank(status) || !isBlank(role)) && (
        <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] sm:text-xs text-secondary-500">
          {!isBlank(status) && (
            <span>
              <span className="italic">Status:</span>
              {' '}
              <span className="not-italic">{status}</span>
            </span>
          )}
          {!isBlank(status) && !isBlank(role) && <span aria-hidden>•</span>}
          {!isBlank(role) && (
            <span>
              <span className="italic">Role:</span>
              {' '}
              <span className="not-italic">{role}</span>
            </span>
          )}
        </p>
      )}

      {/* Advisors */}
      {advisors && advisors.length > 0 && (
        <p className="text-[11px] sm:text-xs text-secondary-500">
          <span className="italic">Advised by:</span>
          {' '}
          {advisors.join(', ')}
        </p>
      )}
    </div>
  )
}

export default CardMeta
