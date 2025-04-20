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
