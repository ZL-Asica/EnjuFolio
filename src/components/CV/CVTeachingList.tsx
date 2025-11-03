import { isEmpty } from '@zl-asica/react/utils'
import CVSection from './CVSection'

const teachingData: TeachingExperience[] = [
  {
    course: 'AP Computer Science A',
    role: 'Instructor',
    term: 'Spring 2025',
    description: 'Independent, Remote',
  },
  {
    course: 'IN4MATX 173 - Consumer Health Informatics',
    role: 'Reader',
    term: 'Spring 2024',
    description: 'Department of Informatics, University of California, Irvine',
  },
  {
    course: 'I&C SCI 32 - Programming with Software Libraries',
    role: 'Learning Assistant',
    term: 'Winter 2024',
    description: 'Department of Computer Science, University of California, Irvine',
  },
  {
    course: 'I&C SCI 6B - Boolean Algebra & Logic',
    role: 'Learning Assistant',
    term: 'Winter 2021',
    description: 'Department of Computer Science, University of California, Irvine',
  },
]

const CVTeachingList = () => {
  if (teachingData.length <= 0) {
    return null
  }

  return (
    <CVSection id="teaching" title="Teaching Experience">
      <ul className="space-y-4">
        {teachingData.map(({ course, role, term, description }) => (
          <li key={`${course}-${term}`}>
            <p className="font-semibold">
              {course}
              {' '}
              —
              <span className="ml-1 text-sm font-normal italic">
                {role}
                {' '}
                (
                {term}
                )
              </span>
            </p>
            {!isEmpty(description) && (
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </CVSection>
  )
}

export default CVTeachingList
