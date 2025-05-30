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

export const formatTimeLeft = (msLeft: number): string => {
  const totalSeconds = Math.ceil(msLeft / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  if (minutes > 0 && seconds > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} and ${seconds} second${seconds > 1 ? 's' : ''}`
  }
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''}`
  }
  return `${seconds} second${seconds > 1 ? 's' : ''}`
}
