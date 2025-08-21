import { isEmpty } from '@zl-asica/react/utils'
import CVSection from './CVSection'

const educationData: Education[] = [
  {
    school: 'Northwestern University',
    degree: 'M.S., Computer Science, Thesis Track',
    time: 'Sep 2024 – Present',
    description: 'Advisor: Prof. Karan Ahuja',
  },
  {
    school: 'University of California, Irvine',
    degree: 'Double B.S. (Hons), Computer Science & Informatics',
    time: 'Sep 2020 – Jun 2024',
    description: 'Dean\'s Honor List, ICS Honors Program',
  },
]

const CVEducationList = () => {
  if (educationData.length <= 0) {
    return null
  }

  return (
    <CVSection id="education" title="Education">

      <ul className="space-y-4">
        {educationData.map(({ school, degree, time, description }) => (
          <li key={school}>
            <p className="font-semibold">{school}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {degree}
              ,
              {' '}
              <span className="italic">{time}</span>
            </p>
            {!isEmpty(description) && (
              <p className="text-sm ml-5 sm:ml-2 md:ml-3 text-gray-700 dark:text-gray-300">
                {description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </CVSection>
  )
}

export default CVEducationList
