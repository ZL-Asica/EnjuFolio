import type { Metadata } from 'next'
import { EmailLink } from '@/components/common'
import { CVEducationList, CVHeader, CVInterests, CVPublicationList, CVSection, CVSkillGrid, CVTeachingList } from '@/components/CV'
import { EnjuConfig } from '@/enju.config'
import { buildMetadata, personJsonLd } from '@/lib'
import { MetaAuthorName } from '@/lib/configHelper'
import { validString } from '@/utils'

export const metadata: Metadata = buildMetadata({
  title: `Curriculum Vitae | ${EnjuConfig.subTitle}`,
  description: `View the academic CV of ${MetaAuthorName}, including education, research interests, teaching, and skills.`,
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
          {validString(EnjuConfig.socialLinks.email) && (
            <li>
              Email:
              <EmailLink emailAddress={EnjuConfig.socialLinks.email ?? ''} />
            </li>
          )}
          <li>
            Website:
            <a
              href={EnjuConfig.url}
              className="ml-1 underline-interactive text-hover-primary"
            >
              {EnjuConfig.url}
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
