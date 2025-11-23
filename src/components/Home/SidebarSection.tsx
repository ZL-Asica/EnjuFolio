import clsx from 'clsx'
import { SectionUnderline } from '@/components/common'

interface SidebarSectionProps {
  id: string
  title: string
  eyebrow?: string
  index?: number
  children: React.ReactNode
  className?: string
}

const SidebarSection = ({
  id,
  title,
  eyebrow,
  index,
  children,
  className,
}: SidebarSectionProps) => {
  return (
    <section
      aria-labelledby={id}
      className={clsx(
        'space-y-3',
        index !== undefined
        && `motion-safe:opacity-0 motion-safe:animate-fade-up
           motion-reduce:opacity-100 motion-reduce:animate-none`,
        className,
      )}
      style={{
        animationDelay:
          index !== undefined ? `${Math.min(index, 8) * 120}ms` : undefined,
      }}
    >
      <div className="flex items-baseline gap-2">
        <h2
          id={id}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
        >
          {title}
        </h2>
        {eyebrow !== undefined && (
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-dark/80">
            {eyebrow}
          </span>
        )}
      </div>

      <SectionUnderline className="mt-1 mb-2" />

      <div>{children}</div>
    </section>
  )
}

export default SidebarSection
