/**
 * Remove trailing slash
 * @param url - The URL to normalize
 * @returns The normalized URL
 */
export const removeUrlTrailingSlash = (url: string) => url.replace(/\/$/, '')

/**
 * Check if a string is valid
 * @param str - The string to check
 * @returns True if the string is valid, false otherwise
 */
export const validString = (str?: string | null) => str !== undefined && str !== null && typeof str === 'string' && str.length > 0
