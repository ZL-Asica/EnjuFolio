import AILLMGuidesMdx from '@/contents/AILLMGuides.mdx'
import { readFileContent } from '@/utils/fileUtils'

const GuidesUL = ({ children }: { children: React.ReactNode }) => (
  <div className="my-4 rounded-lg p-1">
    <ul className="ml-2 list-disc list-inside">
      {children}
    </ul>
  </div>
)

const GuidesOL = ({ children }: { children: React.ReactNode }) => (
  <div className="my-4 rounded-lg p-1">
    <ol className="ml-2 list-decimal list-inside">
      {children}
    </ol>
  </div>

)

const AILLMGuides = async () => {
  const hasAILLMGuides = (await readFileContent('AILLMGuides')).length > 0
  if (!hasAILLMGuides) {
    return null
  }

  return (
    <div className="mt-6">
      <details
        className="
          group w-full
        "
      >
        {/* SUMMARY: small pill, separate width */}
        <summary
          className="
            inline-flex max-w-full sm:max-w-[20rem]
            cursor-pointer select-none items-center gap-1.5
            rounded-full bg-muted/60 px-2.5 py-1.5
            motion-safe:transition-colors motion-safe:duration-200
            hover:bg-primary-50/60
            group-open:bg-muted/80
            group-open:hover:bg-muted/80
          "
        >
          <span
            className="
              inline-flex items-center rounded-full
              bg-primary-100/80 px-1.5 py-0.5
              text-[0.6rem] font-semibold uppercase tracking-[0.16em]
              text-primary-900 dark:bg-primary-900/60 dark:text-primary-100
            "
          >
            Transparency
          </span>

          <span className="text-[0.7rem] text-muted-foreground leading-snug">
            Notes for automated tools (humans can skim)
          </span>

          <span
            className="
              ml-1 inline-flex h-4 w-4 shrink-0 items-center justify-center
              rounded-full border border-current text-[0.6rem]
              motion-safe:transition-transform motion-safe:duration-200
              group-open:rotate-90
            "
            aria-hidden="true"
          >
            →
          </span>
        </summary>

        {/* DETAILS: a bit wider, with News-like animation */}
        <div
          className="
            mt-2 w-full
            text-muted-foreground leading-relaxed
            motion-safe:opacity-0 motion-safe:translate-y-1
            motion-safe:transition-all motion-safe:duration-250 motion-safe:ease-out
            motion-safe:group-open:opacity-100 motion-safe:group-open:translate-y-0
            motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none
          "
        >
          <AILLMGuidesMdx
            components={{
              ul: GuidesUL,
              ol: GuidesOL,
            }}
          />
        </div>
      </details>
    </div>
  )
}

export default AILLMGuides
