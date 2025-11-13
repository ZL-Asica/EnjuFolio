interface TocItems {
  slug: string
  title: string
  level: number
}

interface NewsItem {
  date: string
  content: React.ReactNode
}

type PageType = 'research' | 'projects'

interface FileMeta {
  title: string
  authors: string[]
  advisors?: string[]
  venue?: string
  status?: string
  role?: string
  date: string
  abstract: string
  slug: string
  redirect?: string
  doi?: string
  url?: string
  pdf?: string
  category?: string
  keywords?: string[]
  github?: string
  thumbnail?: string
}
