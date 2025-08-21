import CVSection from './CVSection'

const skillGroups: SkillGroup[] = [
  {
    label: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'Go', 'C++', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks & Servers',
    skills: ['React', 'Expo', 'Next.js', 'Nuxt', 'FastAPI', 'Hono', 'Vitest', 'Vue', 'Nginx', 'Linux'],
  },
  {
    label: 'Design & Media',
    skills: ['Figma', 'Premiere Pro', 'Photoshop', 'InDesign', 'Final Cut Pro'],
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
                  className="px-2 py-1 border border-primary-400 dark:border-primary-300 rounded text-sm"
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
