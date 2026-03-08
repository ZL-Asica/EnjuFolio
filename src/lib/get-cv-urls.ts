import { EnjuConfig } from '@/enju.config'

const rawFileRegex = /^[a-z][a-z0-9+.-]*:/i
const googleDriveFileRegex = /\/file\/d\/([^/]+)/

const cvSource: CVSource = (() => {
  const raw = EnjuConfig.cvFileLink?.trim()
  if (!raw) {
    return null
  }

  // 1. No protocol / relative directory → Treat as local file
  //   Example: '/cv/elara-liu-cv.pdf' or 'cv.pdf'
  const looksLikeRelative = !rawFileRegex.test(raw)
  if (looksLikeRelative) {
    return {
      kind: 'file',
      href: raw,
    }
  }

  // 2. If it looks like a URL, try to parse it
  let url: URL
  try {
    url = new URL(raw)
  }
  catch {
    // If parsing fails, ignore
    return null
  }

  // 2.1 If it's not drive.google.com, treat it as a regular external PDF
  if (!url.hostname.endsWith('drive.google.com')) {
    return {
      kind: 'file',
      href: raw,
    }
  }

  // 2.2 Handle Google Drive: Try to extract fileId from several common formats
  //  - https://drive.google.com/file/d/FILE_ID/view
  //  - https://drive.google.com/file/d/FILE_ID/preview
  //  - https://drive.google.com/open?id=FILE_ID
  //  - https://drive.google.com/uc?id=FILE_ID&export=download
  let fileId: string | null = null

  const fileMatch = url.pathname.match(googleDriveFileRegex)
  if (fileMatch && fileMatch[1]) {
    fileId = fileMatch[1]
  }
  else {
    const idFromQuery = url.searchParams.get('id')
    if (idFromQuery !== null) {
      fileId = idFromQuery
    }
  }

  if (fileId === null) {
    // If it's a Google Drive link but no file id is found, treat it as a regular external link
    return {
      kind: 'file',
      href: raw,
    }
  }

  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`
  const viewUrl = `https://drive.google.com/file/d/${fileId}/view`

  return {
    kind: 'gdrive',
    fileId,
    previewUrl,
    viewUrl,
  }
})()

/**
 * Get CV preview and view URLs based on the configured CV source.
 */
export const getCVUrls = () => {
  if (!cvSource) {
    return {
      previewUrl: null as string | null,
      viewHref: null as string | null,
      isDrive: false,
    }
  }

  if (cvSource.kind === 'gdrive') {
    return {
      previewUrl: cvSource.previewUrl,
      viewHref: cvSource.viewUrl,
      isDrive: true,
    }
  }

  // kind === 'file' (local or any external)
  return {
    previewUrl: cvSource.href,
    viewHref: cvSource.href,
    isDrive: false,
  }
}
