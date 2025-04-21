const CVSection = ({ id, title, children }: CVSectionProps) => {
  return (
    <section id={id} className="mb-8">
      <h2 className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-2">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default CVSection
