import { createContentLoader } from 'vitepress'

export interface NewsArticle {
  url: string
  title: string
  description: string
  date: string
  authors: string[]
  tags: string[]
  category: string
}

declare const data: NewsArticle[]
export { data }

export default createContentLoader('news/*/index.md', {
  render: false,
  excerpt: false,
  transform(raw): NewsArticle[] {
    return raw
      .map(({ url, frontmatter }) => ({
        url,
        title: frontmatter.title ?? url,
        description: frontmatter.description ?? '',
        date: frontmatter.date ?? '',
        authors: frontmatter.authors ?? [],
        tags: frontmatter.tags ?? [],
        category: frontmatter.category ?? ''
      }))
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  }
})
