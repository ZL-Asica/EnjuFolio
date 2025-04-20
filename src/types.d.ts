interface TocItems {
  slug: string
  title: string
  level: number
}

interface NewsItem {
  date: string
  content: React.ReactNode
}

interface NewsItemWithId extends NewsItem {
  id: number
}

interface FileMeta {
  title: string
  authors: string[]
  advisors?: string[]
  venue?: string
  year: string
  date: string
  abstract: string
  slug: string
  redirect?: string
  doi?: string
  url?: string
  pdfUrl?: string
  keywords?: string[]
  github?: string
}

type SocialMediaKey =
  | 'github_username'
  | 'linkedin_username'
  | 'instagram_id'
  | 'orcid_id'
  | 'telegram_username'
  | 'bluesky_username'
  | 'email'
  | 'rss'

interface SocialMediaDataItem {
  url: string
  Icon: React.ComponentType<{ size: number, className?: string }>
  label: string
}

type SocialData = Record<SocialMediaKey, SocialMediaDataItem>
