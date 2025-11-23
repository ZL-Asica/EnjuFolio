import type { Metadata } from 'next'
import { CVViewer } from '@/components/CV/CVViewer'
import { EnjuConfig } from '@/enju.config'
import { buildMetadata, personJsonLd } from '@/lib'
import { authorPictureBase, MetaAuthorName } from '@/lib/configHelper'
import { getCVUrls } from '@/lib/get-cv-urls'
import { CVPageDescription } from '@/utils/pages-description'

export const metadata: Metadata = buildMetadata({
  title: `Curriculum Vitae | ${EnjuConfig.subTitle}`,
  description: CVPageDescription,
  keywords: [
    'cv',
    'curriculum vitae',
    'resume',
    'academic cv',
    'education',
    'research',
    'teaching',
    'skills',
  ],
  urlPath: '/cv',
  ogType: 'website',
  image: authorPictureBase,
})

export default function CVPage() {
  const { previewUrl, viewHref, isDrive } = getCVUrls()

  const hasCV = Boolean(previewUrl !== null && viewHref !== null)

  const openLabel = isDrive
    ? 'Open CV PDF in Google Drive (opens in a new tab)'
    : 'Open CV PDF in a new tab'

  return (
    <>
      {/* structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:py-10 lg:py-12 space-y-4 overflow-x-hidden">
        {/* Header */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1
              id="cv-heading"
              className="text-3xl font-semibold tracking-tight"
            >
              Curriculum Vitae
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {MetaAuthorName}
            </p>
          </div>

          {hasCV && (
            <a
              href={viewHref!}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-full border bg-background px-4 py-1.5 text-xs font-medium text-foreground shadow-sm transition hover:bg-accent hover:text-gray-800 sm:text-sm"
              aria-label={openLabel}
            >
              Open PDF
            </a>
          )}
        </header>

        {hasCV
          ? (
              <>
                <CVViewer previewUrl={previewUrl!} />

                <p id="cv-viewer-description" className="sr-only">
                  Embedded PDF preview of the curriculum vitae. Use the viewer controls
                  to zoom or download, or open the same PDF in a new tab with the “Open
                  PDF” button.
                </p>
              </>
            )
          : (
              <p className="text-sm text-muted-foreground">
                CV is not configured yet. Please add a
                {' '}
                <code>cvFileLink</code>
                {' '}
                in your
                theme configuration.
              </p>
            )}
      </main>
    </>
  )
}
