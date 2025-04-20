export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

/**
 * Format an ISO‐style date string (YYYY, YYYY‑MM or YYYY‑MM‑DD)
 * into either:
 *  • "Month, YYYY" (if month is present), or
 *  • "YYYY"           (if only the year is given)
 */
export const formatDateMonth = (
  dateStr: string,
  yearOnly: boolean = false,
): string => {
  // Extract year component
  const yearMatch = dateStr.match(/^(\d{4})/)
  const year = yearMatch ? yearMatch[1] : ''

  // If year-only requested or only YYYY provided
  if (yearOnly || /^\d{4}$/.test(dateStr)) {
    return year || dateStr
  }

  // Handle YYYY-MM format
  const ym = dateStr.match(/^(\d{4})-(\d{2})$/)
  if (ym) {
    const [_, y, m] = ym
    const dt = new Date(`${y}-${m}-01`)
    const monthName = dt.toLocaleString('en-US', { month: 'long' })
    return `${monthName}, ${y}`
  }

  // Generic ISO parse (YYYY-MM-DD or extended)
  const dt = new Date(dateStr)
  if (!Number.isNaN(dt.getTime())) {
    const monthName = dt.toLocaleString('en-US', { month: 'long' })
    return `${monthName}, ${dt.getFullYear()}`
  }

  // Fallback: return raw or year
  return year || dateStr
}
