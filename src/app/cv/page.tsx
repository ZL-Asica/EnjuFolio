import type { Metadata } from 'next'
import { EmailLink } from '@/components/common'
import { CVEducationList, CVHeader, CVInterests, CVPublicationList, CVSection, CVSkillGrid, CVTeachingList } from '@/components/CV'
import { buildMetadata, personJsonLd } from '@/lib'

export const metadata: Metadata = buildMetadata({
  title: 'Curriculum Vitae | Elara\'s Portfolio',
  description: 'View the academic CV of Zhuoran (Elara) Liu, including education, research interests, teaching, and skills.',
  keywords: ['cv'],
  urlPath: '/cv',
  ogType: 'website',
})

export default function CVPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <CVHeader />

      <CVSection id="contact" title="Contact Information">
        <ul className="list-none space-y-1">
          <li>
            Email:
            <EmailLink emailAddress="elara.liu@u.northwestern.edu" />
          </li>
          <li>
            Website:
            <a
              href="https://elaraliu.com"
              className="ml-1 underline-interactive text-hover-primary"
            >
              https://elaraliu.com"
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
