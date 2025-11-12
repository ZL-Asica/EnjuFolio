import clsx from 'clsx'
import { SectionUnderline } from '@/components/common'

interface SidebarSectionProps {
  id: string
  title: string
  eyebrow?: string
  children: React.ReactNode
  className?: string
}

const SidebarSection = ({
  id,
  title,
  eyebrow,
  children,
  className,
}: SidebarSectionProps) => {
  return (
    <section
      aria-labelledby={id}
      className={clsx('space-y-3', className)}
    >
      <div className="flex items-baseline gap-3">
        <h2
          id={id}
          className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
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
