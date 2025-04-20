import type { Element } from 'mdx/types'
import { formatDate } from '@/utils'

const NewsParagraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base leading-relaxed tracking-wide">
    {children}
  </p>
)

const NewsItem = async ({ slug }: { slug: string }) => {
  // eslint-disable-next-line ts/no-unsafe-assignment
  const { default: Content, frontmatter } = (await import(
    `@/contents/news/${slug}.mdx`
  )) as { default: Element, frontmatter: FileMeta }

  return (
    <li
      className="text-base text-gray-dark flex items-start gap-3"
    >
      <span className="font-mono text-sm text-gray-500 min-w-[110px] dark:text-gray-400">
        {formatDate(frontmatter.date)}
      </span>
      <Content components={{ p: NewsParagraph }} />
    </li>
  )
}

export default NewsItem
