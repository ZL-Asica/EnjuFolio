import Image from 'next/image'
import { Suspense } from 'react'
import { NewsLoading } from '@/components/Loadings'
import News from '@/components/News'
import About from '@/contents/About.mdx'
import { EnjuConfig } from '@/enju.config'
import { buildWebsiteJsonLd } from '@/lib'
import { authorPictureBase } from '@/lib/configHelper'
import { validString } from '@/utils'

const AboutStrong = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-primary-400 dark:text-primary-300 hover:shadow-sm transition-all mx-1">
    {children}
  </strong>
)

export default function HomePage() {
  const jsonld = buildWebsiteJsonLd({
    title: EnjuConfig.title,
    description: EnjuConfig.description,
    urlPath: '/',
    image: authorPictureBase,
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
          src={authorPictureBase}
          alt={`${EnjuConfig.homePage.name}'s avatar`}
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
          {EnjuConfig.homePage.name}
        </h1>
        {validString(EnjuConfig.homePage.otherInfo) && (
          <p className="text-base text-gray-dark mb-2">
            {EnjuConfig.homePage.otherInfo}
          </p>
        )}
        {validString(EnjuConfig.homePage.pronounce) && (
          <p className="text-sm text-gray-dark mb-1" aria-label="Pronouns">
            {EnjuConfig.homePage.pronounce}
          </p>
        )}
        {validString(EnjuConfig.homePage.position) && (
          <p className="text-lg text-gray-dark max-w-md mx-auto">
            {EnjuConfig.homePage.position}
          </p>
        )}
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
