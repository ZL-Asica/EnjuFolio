import { formatDate } from '@zl-asica/react/utils'
import { EnjuConfig } from '@/enju.config'
import { getMDXContent, readAllFileMeta } from '@/utils'

const NewsParagraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base leading-relaxed tracking-wide">
    {children}
  </p>
)

const News = async () => {
  const newsSummaries = (await readAllFileMeta('news')).sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  const items = await Promise.all(
    newsSummaries.map(async (meta) => {
      // eslint-disable-next-line ts/no-unsafe-assignment
      const { Content, frontmatter } = await getMDXContent('news', meta.slug)
      return (
        <li
          className="text-base text-gray-dark flex items-start gap-3"
          key={meta.slug}
        >
          <span className="font-mono text-sm text-gray-500 min-w-[110px] dark:text-gray-400">
            {formatDate(frontmatter.date, EnjuConfig.homePage.newsDateFormat)}
          </span>
          <Content components={{ p: NewsParagraph }} />
        </li>
      )
    }),
  )

  return (
    <>
      <h2 id="heading-news" className="text-2xl font-semibold mb-6">
        News
      </h2>
      <ul className="space-y-3">
        {items}
      </ul>
    </>
  )
}

export default News
