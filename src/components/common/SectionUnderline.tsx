interface SectionUnderlineProps {
  className?: string
}

const SectionUnderline = ({ className }: SectionUnderlineProps) => {
  return (
    <div
      className={`mt-2 h-px w-10 bg-gradient-to-r from-primary-400/80 to-transparent dark:from-primary-300/80 ${className}`}
      aria-hidden="true"
    />
  )
}

export default SectionUnderline
