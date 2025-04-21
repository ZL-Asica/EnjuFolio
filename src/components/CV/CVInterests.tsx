import {
  Brain,
  Computer,
  Cpu,
  Eye,
  Globe,
  HeartPulse,
} from 'lucide-react'
import CVSection from './CVSection'

const iconMap = {
  Brain,
  Computer,
  Cpu,
  Eye,
  Globe,
  HeartPulse,
} satisfies Record<string, React.ElementType>

const CVInterest = () => {
  return (
    <CVSection id="research-interests" title="Research Interests">
      <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
        {[
          ['Human–Computer Interaction', 'Computer'],
          ['Health Informatics', 'HeartPulse'],
          ['Ubiquitous Computing', 'Globe'],
          ['Machine Learning', 'Cpu'],
          ['UX & Accessibility', 'Eye'],
          ['Large Language Model', 'Brain'],
        ].map(([label, icon]) => {
          const Icon = iconMap[icon as keyof typeof iconMap]
          return (
            <li key={label} className="flex items-center">
              <Icon className="w-5 h-5 text-secondary dark:text-secondary-dark mr-2" />
              {label}
            </li>
          )
        })}
      </ul>
    </CVSection>
  )
}

export default CVInterest
