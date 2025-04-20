import NewsItem from '@/components/NewsItem'
import About from '@/contents/About.mdx'
import { readAllFileMeta } from '@/utils'
import Image from 'next/image'

const AboutStrong = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-primary-400 dark:text-primary-300 hover:shadow-sm transition-all mx-1">
    {children}
  </strong>
)

export default async function Home() {
  const news = (await readAllFileMeta('news')).sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

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
        <p className="text-base text-gray-dark mb-2">
          刘 卓然
        </p>
        <p className="text-sm text-gray-dark mb-1" aria-label="Pronouns">
          (She / Her)
        </p>
        <p className="text-lg text-gray-dark max-w-md mx-auto">
          Master of Science in Computer Science @ Northwestern University
        </p>
      </section>

      <section className="max-w-3xl mx-auto py-6 text-left motion-safe:animate-blur-in-glow">
        <About components={{ strong: AboutStrong }} />
      </section>

      <section
        className="max-w-3xl mx-auto py-6 text-left motion-safe:animate-blur-in-glow"
        aria-labelledby="heading-news"
      >
        <h2 id="heading-news" className="text-2xl font-semibold mb-6">
          News
        </h2>
        <ul className="space-y-3">
          {news.map(item => <NewsItem key={item.slug} slug={item.slug} />)}
        </ul>
      </section>
    </>
  )
}
