interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="py-16 px-8">
      <div className="max-w-3xl mx-auto md:max-w-4xl lg:max-w-6xl xl:max-w-8xl">
        <h2 className="text-3xl font-bold mb-4 md:max-w-4xl lg:max-w-6xl xl:max-w-8xl">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default Section
