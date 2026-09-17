/**
 * Shared author registry. Articles reference authors by slug (the same
 * slug used in frontmatter `authors: [...]`), which is resolved here to
 * a human friendly name, avatar and profile link.
 *
 * Keep this in sync with `docs/team.md`.
 */

export interface Author {
  slug: string
  name: string
  avatar?: string
  link?: string
}

const authors: Record<string, Omit<Author, 'slug'>> = {
  samuelh2005: {
    name: 'Samuel Hulme',
    avatar: 'https://avatars.githubusercontent.com/u/41990982?v=4&size=64',
    link: 'https://github.com/samuelh2005'
  }
}

/**
 * Resolves an author slug to its display info. Unknown slugs fall back
 * to showing the slug itself, so new authors never break the build.
 */
export function resolveAuthor(slug: string): Author {
  const known = authors[slug]
  return known ? { slug, ...known } : { slug, name: slug }
}
