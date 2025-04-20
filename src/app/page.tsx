import { newsItems } from '@/components/NewsData'
import About from '@/markdown/About.mdx'
import { formatDate, sortAndAssignIds } from '@/utils'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section
        className="max-w-5xl mx-auto text-center py-8"
        aria-labelledby="heading-name"
      >
        <Image
          src="/images/avatar.jpg"
          alt="Zhuoran (Elara) Liu's avatar"
          width={280}
          height={280}
          priority
          loading="eager"
          className="rounded-full mx-auto mb-6 shadow-md"
        />
        <h1
          id="heading-name"
          className="text-3xl sm:text-4xl font-serif font-semibold mb-2"
        >
          Zhuoran (Elara) Liu
        </h1>
        <p className="text-base text-gray-600 mb-2">
          刘 卓然
        </p>
        <p className="text-sm text-gray-500 mb-1" aria-label="Pronouns">
          (She / Her)
        </p>
        <p className="text-lg text-gray-800 max-w-md mx-auto">
          Master of Science in Computer Science @ Northwestern University
        </p>
      </section>

      <section className="max-w-3xl mx-auto py-6 text-left prose prose-pink dark:prose-invert">
        <About />
      </section>

      <section
        className="max-w-3xl mx-auto py-6 text-left"
        aria-labelledby="heading-news"
      >
        <h2 id="heading-news" className="text-2xl font-semibold mb-6">
          News
        </h2>
        <ul className="space-y-3">
          {sortAndAssignIds(newsItems).map(item => (
            <li
              key={item.id}
              className="text-base text-gray-800 flex items-start gap-3"
            >
              <span className="font-mono text-sm text-gray-500 min-w-[110px]">
                {formatDate(item.date)}
              </span>
              {item.content}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
