interface CVSectionProps {
  id: string
  title: string
  children: React.ReactNode
}

interface Education {
  school: string
  degree: string
  time: string
}

type PublicationType = 'Full Paper' | 'Poster' | 'WIP' | 'Demo'

interface Publication {
  authors: string
  title: string
  venue: string
  type: PublicationType
  note?: string
}

interface TeachingExperience {
  course: string
  role: string
  term: string
  description: string
}

interface SkillGroup {
  label: string
  skills: string[]
}
