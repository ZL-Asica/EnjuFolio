import { formatDate } from '@zl-asica/react/utils'
import { EnjuConfig } from '@/enju.config'
import { getMDXContent, readAllFileMeta } from '@/utils'
import SidebarSection from './SidebarSection'

const MAX_NEWS_ON_HOME = 6

const NewsParagraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm leading-relaxed tracking-wide">
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
      // eslint-disable-next-line ts/no-unsafe-assignment
      const { Content, frontmatter } = await getMDXContent('news', meta.slug)
      return {
        key: meta.slug,
        date: frontmatter.date,
        // eslint-disable-next-line ts/no-unsafe-assignment
        Content,
      }
    }),
  )

  const recentItems = allItems.slice(0, MAX_NEWS_ON_HOME)
  const olderItems = allItems.slice(MAX_NEWS_ON_HOME)

  return (
    <SidebarSection
      id="heading-news"
      title="News"
      eyebrow="latest updates"
    >
      {recentItems.length
        ? (
            <ul className="space-y-3">
              {recentItems.map(({ key, date, Content }) => (
                <li
                  key={key}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <span className="min-w-[88px] font-mono text-[0.7rem] text-muted-foreground">
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

      {olderItems.length > 0 && (
        <details className="mt-3 group">
          <summary
            className="
              cursor-pointer text-[0.75rem] font-medium
              text-primary-500 hover:underline dark:text-primary-300
              list-none
            "
          >
            Older updates
          </summary>

          <ul className="mt-2 space-y-2 border-t border-border pt-2 text-xs text-foreground">
            {olderItems.map(({ key, date, Content }) => (
              <li
                key={key}
                className="flex items-start gap-3"
              >
                <span className="min-w-[88px] font-mono text-[0.7rem] text-muted-foreground">
                  {formatDate(date, EnjuConfig.homePage.newsDateFormat)}
                </span>
                <Content components={{ p: NewsParagraph }} />
              </li>
            ))}
          </ul>
        </details>
      )}
    </SidebarSection>
  )
}

export default News
