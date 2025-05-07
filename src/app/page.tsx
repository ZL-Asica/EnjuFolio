import { NewsLoading } from '@/components/Loadings'
import News from '@/components/News'
import About from '@/contents/About.mdx'
import { buildWebsiteJsonLd } from '@/lib'
import Image from 'next/image'
import { Suspense } from 'react'

const AboutStrong = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-primary-400 dark:text-primary-300 hover:shadow-sm transition-all mx-1">
    {children}
  </strong>
)

export default function HomePage() {
  const jsonld = buildWebsiteJsonLd({
    title: 'Zhuoran (Elara) Liu | Academic Portfolio',
    description: 'Zhuoran (Elara) Liu’s academic portfolio featuring research in HCI and Large Language Model, technical projects, and CV.',
    urlPath: '/',
    image: '/images/profile.webp',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
      <section
        className="max-w-5xl mx-auto text-center py-8"
        aria-labelledby="heading-name"
      >
        <Image
          src="/images/profile.webp"
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
        <Suspense fallback={<NewsLoading />}>
          <News />
        </Suspense>
      </section>
    </>
  )
}
