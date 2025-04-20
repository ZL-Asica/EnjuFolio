export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const sortAndAssignIds = (news: NewsItem[]): NewsItemWithId[] => {
  return news
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((item, index) => ({
      ...item,
      id: index + 1,
    }))
}
