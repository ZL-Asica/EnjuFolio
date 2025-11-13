import { isBlank } from '@zl-asica/react/utils'
import Image from 'next/image'
import { Hobbies, News } from '@/components/Home'
import About from '@/contents/About.mdx'
import { EnjuConfig } from '@/enju.config'
import { buildWebsiteJsonLd } from '@/lib'
import { authorPictureBase } from '@/lib/configHelper'

const AboutStrong = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-primary-500 dark:text-primary-300 decoration-primary-400/50">
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

  const { name, otherInfo, pronouns, position, hobbies } = EnjuConfig.homePage

  return (
    <>
      {/* structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
        {/* Top: name + profile picture */}
        <section
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          aria-labelledby="heading-name"
        >
          <div className="space-y-2 text-left">
            <h1
              id="heading-name"
              className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight text-foreground"
            >
              {name}
            </h1>

            {!isBlank(position) && (
              <p className="text-base sm:text-lg text-foreground">
                {position}
              </p>
            )}

            {!isBlank(otherInfo) && (
              <p className="text-sm text-muted-foreground">
                {otherInfo}
              </p>
            )}

            {!isBlank(pronouns) && (
              <p
                className="text-xs text-muted-foreground"
                aria-label="Pronouns"
              >
                {pronouns}
              </p>
            )}
          </div>

          <div className="flex justify-start md:justify-end md:mr-10 lg:mr-20">
            <Image
              src={authorPictureBase}
              alt={`${name}'s avatar`}
              width={240}
              height={240}
              priority
              className="
                h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover
                shadow-md ring-2 ring-primary-400/70 dark:ring-primary-300/80
              "
            />
          </div>
        </section>

        {/* Below: Left About, Right Sidebar News + Hobbies */}
        <section
          className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.3fr)] items-start"
          aria-label="About and recent updates"
        >
          {/* Left Column: Main Narrative */}
          <div className="motion-safe:animate-fade-up">
            <div className="max-w-[68ch] space-y-4 text-left text-foreground">
              <About components={{ strong: AboutStrong }} />
            </div>
          </div>

          {/* Right Column: Sidebar Information, Overall Weakened */}
          <aside
            className="
              space-y-8
              lg:relative lg:pl-6
              lg:before:absolute lg:before:inset-y-1 lg:before:left-0
              lg:before:border-l lg:before:border-dashed lg:before:border-border
              lg:before:opacity-40 lg:before:content-['']
            "
            aria-label="Recent updates and personal interests"
          >
            <News />

            {hobbies && hobbies.length > 0 && (
              <Hobbies hobbies={hobbies} />
            )}
          </aside>
        </section>
      </main>
    </>
  )
}
