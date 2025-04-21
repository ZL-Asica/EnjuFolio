import CVSection from './CVSection'

const skillGroups: SkillGroup[] = [
  {
    label: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'Swift', 'C++', 'C', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks & Servers',
    skills: ['React', 'Expo', 'Next.js', 'Nuxt', 'Express.js', 'Hono', 'Vitest', 'Vue', 'Jekyll', 'Flask', 'Nginx', 'Linux'],
  },
  {
    label: 'Design & Media',
    skills: ['Figma', 'Premiere Pro', 'Photoshop', 'InDesign', 'Final Cut Pro', 'Da Vinci Resolve', 'Cinema 4D'],
  },
  {
    label: 'DevOps',
    skills: ['GitHub Actions', 'Docker', 'npm', 'AWS (Lambda, RDS, EC2)', 'Cloudflare (Workers, D1, KV)', 'Firebase'],
  },
  {
    label: 'Languages',
    skills: ['English (Proficient)', 'Chinese (Native)'],
  },
]

const CVSkillGrid = () => {
  if (skillGroups.length <= 0) {
    return null
  }

  return (
    <CVSection id="skills" title="Skills">
      <dl className="space-y-6">
        {skillGroups.map(group => (
          <div key={group.label}>
            <dt className="font-semibold text-secondary dark:text-secondary-dark">
              {group.label}
            </dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-primary-200 dark:bg-primary-400 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </CVSection>
  )
}

export default CVSkillGrid
