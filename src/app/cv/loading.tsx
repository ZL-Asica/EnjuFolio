const ShimmerBar = ({ className = '' }: { className?: string }) => {
  return (
    <div
      aria-hidden="true"
      className={`
        relative overflow-hidden rounded-md bg-muted/70
        before:absolute before:inset-0
        before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)]
        before:animate-[shimmer_1.6s_ease-in-out_infinite]
        ${className}
      `}
    />
  )
}

const DocumentSkeleton = () => {
  return (
    <div className="h-[70vh] w-full rounded-lg bg-muted/40 sm:h-[80vh]">
      <div className="mx-auto flex h-full max-w-sm flex-col justify-between py-6">
        <div className="space-y-3">
          <ShimmerBar className="h-4 w-28" />
          <ShimmerBar className="h-3 w-full" />
          <ShimmerBar className="h-3 w-5/6" />
          <ShimmerBar className="h-3 w-4/6" />
        </div>
      </div>
    </div>
  )
}

export default function CVPageSkeleton() {
  return (
    <div
      className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-10 lg:py-12 space-y-4 overflow-x-hidden"
      aria-busy="true"
      aria-describedby="cv-page-loading"
    >
      <p id="cv-page-loading" className="sr-only">
        Loading curriculum vitae page…
      </p>

      {/* Header skeleton */}
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <ShimmerBar className="h-8 w-40" />
          <ShimmerBar className="h-4 w-28" />
        </div>
        <ShimmerBar className="h-8 w-28 rounded-full sm:h-9 sm:w-32" />
      </header>

      {/* Viewer skeleton */}
      <section className="rounded-xl bg-muted/30 p-2 sm:p-3 overflow-hidden">
        <div className="overflow-hidden rounded-lg bg-background shadow-sm">
          <DocumentSkeleton />
        </div>
      </section>
    </div>
  )
}
