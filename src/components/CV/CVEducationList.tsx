import CVSection from './CVSection'

const educationData: Education[] = [
  {
    school: 'Northwestern University',
    degree: 'Master of Science in Computer Science',
    time: 'Sep 2024 – Present',
  },
  {
    school: 'University of California, Irvine',
    degree: 'Bachelor of Science (Hons) in Computer Science & Informatics',
    time: 'Sep 2020 – Jun 2024',
  },
]

const CVEducationList = () => {
  if (educationData.length <= 0) {
    return null
  }

  return (
    <CVSection id="education" title="Education">

      <ul className="space-y-4">
        {educationData.map(({ school, degree, time }) => (
          <li key={school}>
            <p className="font-semibold">{school}</p>
            <p className="text-sm italic text-gray-700 dark:text-gray-300">
              {degree}
              ,
              {' '}
              {time}
            </p>
          </li>
        ))}
      </ul>
    </CVSection>
  )
}

export default CVEducationList
