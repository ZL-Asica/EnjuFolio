import { EnjuConfig } from '@/enju.config'

const customDescription = EnjuConfig.description?.trim()
const customDescriptionForSubPages = customDescription !== undefined ? `${customDescription} - ` : ''

export const HomePageDescription
  = customDescription
    ?? `Landing page for ${EnjuConfig.subTitle} with overview, highlight news, and navigation to research and projects. High-level introduction and current status.`

export const ResearchPageDescription = `${customDescriptionForSubPages}Selected research projects for ${EnjuConfig.author}, with methods, publications, roles, and venues.`

export const ProjectsPageDescription = `${customDescriptionForSubPages}Technical and infrastructure projects relevant to ${EnjuConfig.author}'s research practice.`

export const CVPageDescription = `${customDescriptionForSubPages}Authoritative record of ${EnjuConfig.author}'s publications, positions, experiences, and timelines (via embedded PDF).`

export const SingleResearchProjectPageDescription = (
  title: string,
  pageType: PageType,
  abstract?: string,
) => {
  return `${title}${abstract !== undefined ? ` - ${abstract}` : ''} - A technical project relevant to ${EnjuConfig.author}'s ${pageType} practice.`
}
