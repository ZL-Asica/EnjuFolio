import SidebarSection from './SidebarSection'

interface HobbiesProps {
  hobbies: Hobby[]
}

const Hobbies = ({ hobbies }: HobbiesProps) => {
  if (!hobbies.length) {
    return null
  }

  return (
    <SidebarSection
      id="hobbies-section"
      title="Hobbies"
      eyebrow="personal life"
    >
      <ul className="flex flex-wrap gap-2">
        {hobbies.map((hobby, index) => (
          <li
            key={index}
            className="
              inline-flex items-center gap-1.5 rounded-full
              bg-muted/60 px-3 py-1
              text-xs font-medium text-foreground
            "
          >
            {hobby.emoji !== undefined && (
              <span className="text-base" aria-hidden="true">
                {hobby.emoji}
              </span>
            )}
            <span className="tracking-wide">{hobby.name}</span>
          </li>
        ))}
      </ul>
    </SidebarSection>
  )
}

export default Hobbies
