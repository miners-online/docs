/**
 * Small formatting helpers shared between the article layout and the
 * news index page, so dates, categories and tags are always presented
 * the same, human friendly way.
 */

/**
 * Formats an ISO-ish date string (or Date) as e.g. "24 July 2026".
 * Falls back to the raw value if it can't be parsed.
 */
export function formatDate(value: string | Date | undefined | null): string | null {
  if (!value) return null

  const date = typeof value === 'string' ? new Date(value) : value
  if (Number.isNaN(date.getTime())) return typeof value === 'string' ? value : null

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

/**
 * Turns a slug-like string (`"minecraft-server"`, `"some_tag"`) into a
 * human friendly label (`"Minecraft Server"`, `"Some Tag"`).
 */
export function humanize(value: string): string {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
