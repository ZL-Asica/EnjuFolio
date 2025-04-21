interface TocItems {
  slug: string
  title: string
  level: number
}

interface NewsItem {
  date: string
  content: React.ReactNode
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
