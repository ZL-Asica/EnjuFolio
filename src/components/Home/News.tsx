import { formatDate } from '@zl-asica/react/utils'
import { EnjuConfig } from '@/enju.config'
import { getMDXContent, readAllFileMeta } from '@/utils'
import SidebarSection from './SidebarSection'

const NewsParagraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm leading-relaxed tracking-wide text-foreground">
    {children}
  </p>
)

const News = async () => {
  const allNewsMeta = await readAllFileMeta('news')

  const sortedMeta = allNewsMeta.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  const allItems = await Promise.all(
    sortedMeta.map(async (meta) => {
      const { Content, frontmatter } = await getMDXContent('news', meta.slug)
      return {
        key: meta.slug,
        date: frontmatter.date,
        Content,
      }
    }),
  )

  const now = new Date()
  const cutoff = new Date(now)
  cutoff.setFullYear(now.getFullYear() - (EnjuConfig.homePage.newsCutoffYears ?? 2))

  const recentItems = allItems
    .slice(0, EnjuConfig.homePage.maximumNewsItemsOnHome ?? 5)
    .filter(({ date }) => new Date(date) >= cutoff)

  const recentKeys = new Set(recentItems.map(item => item.key))
  const olderItems = allItems.filter(item => !recentKeys.has(item.key))

  return (
    <SidebarSection
      id="heading-news"
      title="News"
      eyebrow="latest updates"
    >
      {/* Recent items */}
      {recentItems.length
        ? (
            <ul className="space-y-3">
              {recentItems.map(({ key, date, Content }, idx) => (
                <li
                  key={key}
                  className="
                    flex items-start gap-1 text-sm text-foreground
                    motion-safe:opacity-0 motion-safe:animate-fade-up
                    motion-reduce:opacity-100 motion-reduce:animate-none
                  "
                  style={{
                    animationDelay: `${Math.min(idx, 6) * 90}ms`,
                  }}
                >
                  <span className="mt-0.5 min-w-[88px] font-mono text-[0.7rem] text-muted-foreground">
                    {formatDate(date, EnjuConfig.homePage.newsDateFormat)}
                  </span>
                  <Content components={{ p: NewsParagraph }} />
                </li>
              ))}
            </ul>
          )
        : (
            <p className="text-sm text-muted-foreground">
              No recent updates yet.
            </p>
          )}

      {/* Older updates */}
      {olderItems.length > 0 && (
        <details className="mt-4 group">
          <summary
            className="
              inline-flex items-center gap-1.5
              cursor-pointer select-none
              rounded-full border border-primary-100/70 dark:border-primary-500/40
              bg-primary-50/60 dark:bg-primary-900/20
              px-3 py-1.5 text-[0.75rem] font-medium
              text-primary-700 dark:text-primary-200
              transition-colors duration-200
              list-none
              hover:bg-primary-50 dark:hover:bg-primary-900/70
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background
            "
          >
            <span>Older updates</span>
            <span
              className="
                inline-flex h-4 w-4 items-center justify-center
                rounded-full border border-current text-[0.6rem]
                transition-transform duration-200
                group-open:rotate-90
              "
              aria-hidden="true"
            >
              →
            </span>
          </summary>

          {/* Container for older list */}
          <div className="mt-2 border-t border-border/70 pt-2">
            <ul className="space-y-2 text-xs text-foreground overflow-hidden">
              {olderItems.map(({ key, date, Content }, idx) => (
                <li
                  key={key}
                  className="
                    flex items-start gap-1
                    motion-safe:opacity-0 motion-safe:translate-y-1
                    motion-safe:transition-all motion-safe:duration-250 motion-safe:ease-out
                    motion-safe:group-open:opacity-100 motion-safe:group-open:translate-y-0
                    motion-reduce:opacity-100 motion-reduce:translate-y-0
                  "
                  style={{
                    transitionDelay: `${Math.min(idx, 8) * 40}ms`,
                  }}
                >
                  <span className="mt-0.5 min-w-[88px] font-mono text-[0.7rem] text-muted-foreground">
                    {formatDate(date, EnjuConfig.homePage.newsDateFormat)}
                  </span>
                  <Content components={{ p: NewsParagraph }} />
                </li>
              ))}
            </ul>
          </div>
        </details>
      )}
    </SidebarSection>
  )
}

export default News
