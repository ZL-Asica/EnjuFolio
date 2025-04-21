import CVSection from './CVSection'

const teachingData: TeachingExperience[] = [
  {
    course: 'AP Computer Science A',
    role: 'Instructor',
    term: 'Spring 2025',
    description: 'Prepared modules on Java, OOP, and Data Structures.',
  },
  {
    course: 'Consumer Health Informatics',
    role: 'Reader',
    term: 'Spring 2024',
    description: 'Helped Prof. Yunan Chen on teaching and grading.',
  },
  {
    course: 'Programming with Software Libraries',
    role: 'Learning Assistant',
    term: 'Winter 2024',
    description: 'Helped coach students on Python libraries and assignments.',
  },
  {
    course: 'Programming with Software Libraries',
    role: 'Tutor',
    term: 'Spring 2023',
    description: 'Taught students Python libraries and related concepts.',
  },
  {
    course: 'Boolean Algebra & Logic',
    role: 'Learning Assistant',
    term: 'Winter 2021',
    description: 'Introduction to discrete mathematics.',
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
            <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
          </li>
        ))}
      </ul>
    </CVSection>
  )
}

export default CVTeachingList
