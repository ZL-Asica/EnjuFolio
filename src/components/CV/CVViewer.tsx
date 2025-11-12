'use client'

import { useState } from 'react'

interface CVViewerProps {
  previewUrl: string
}

export const CVViewer = ({ previewUrl }: CVViewerProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section
      className="rounded-xl bg-muted/30 p-2 sm:p-3 overflow-hidden"
      aria-labelledby="cv-heading"
    >
      <div
        className="relative overflow-hidden rounded-lg bg-background shadow-sm"
        aria-busy={!isLoaded}
      >
        {/* Loading overlay */}
        {!isLoaded && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/80 backdrop-blur-sm">
            <div
              className="h-6 w-6 animate-spin rounded-full border border-border border-t-transparent"
              aria-hidden="true"
            />
            <span
              className="sr-only"
              role="status"
              aria-live="polite"
            >
              Loading CV PDF…
            </span>
          </div>
        )}

        <iframe
          src={previewUrl}
          title="Curriculum vitae preview (PDF)"
          className="block h-[70vh] w-full max-w-full sm:h-[80vh]"
          onLoad={() => setIsLoaded(true)}
          aria-describedby="cv-viewer-description"
        />
      </div>
    </section>
  )
}
