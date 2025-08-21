import {
  Brain,
  Computer,
  Eye,
  Globe,
  HeartPulse,
  TabletSmartphone,
} from 'lucide-react'
import CVSection from './CVSection'

const interests: Interest[] = [
  {
    label: 'Human–AI Interaction',
    Icon: Computer,
  },
  {
    label: 'Large Language Model',
    Icon: Brain,
  },
  {
    label: 'Ubiquitous Computing',
    Icon: Globe,
  },
  {
    label: 'Mobile Health',
    Icon: TabletSmartphone,
  },
  {
    label: 'UX & Accessibility',
    Icon: Eye,
  },
  {
    label: 'Health Informatics',
    Icon: HeartPulse,
  },
]

const CVInterest = () => {
  return (
    <CVSection id="research-interests" title="Research Interests">
      <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
        {interests.map(({ label, Icon }) => {
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
