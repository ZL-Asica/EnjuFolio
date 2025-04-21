import type { Metadata } from 'next'
import { CVEducationList, CVHeader, CVInterests, CVPublicationList, CVSection, CVSkillGrid, CVTeachingList } from '@/components/CV'

export const metadata: Metadata = {
  title: 'CV | Elara\'s Portfolio',
  description: 'Curriculum vitae of Zhuoran (Elara) Liu, MSCS student focusing on HCI research.',
  keywords: 'cv, resume, elara, portfolio, Zhuoran',
  authors: { name: 'Elara Liu', url: 'https://zla.app' },
  alternates: { canonical: `https://zla.app/cv` },
}

export default function CVPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <CVHeader />

      <CVSection id="contact" title="Contact Information">
        <ul className="list-none space-y-1">
          <li>
            Email:
            <a
              href="mailto:elara.liu@u.northwestern.edu"
              className="ml-1 underline-interactive text-hover-primary"
            >
              elara.liu@u.northwestern.edu
            </a>
          </li>
          <li>
            Website:
            <a
              href="https://zla.app"
              className="ml-1 underline-interactive text-hover-primary"
            >
              zla.app
            </a>
          </li>
          <li>Location: Evanston, Illinois, USA</li>
        </ul>
      </CVSection>

      <CVEducationList />

      <CVInterests />

      <CVPublicationList />

      <CVTeachingList />

      <CVSkillGrid />
    </div>
  )
}
