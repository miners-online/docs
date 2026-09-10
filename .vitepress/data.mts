interface Author {
  avatar: string
  name: string
  title: string
  links: {
    icon: string
    link: string
  }[]
}

export const authors: Record<string, Author> = {
  samuelh2005: {
    avatar: 'https://avatars.githubusercontent.com/u/41990982?v=4&size=64',
    name: 'Samuel Hulme',
    title: 'Founder & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/samuelh2005' },
      { icon: 'lucide:link', link: 'https://samsblog.minersonline.uk' }
    ]
  }
}

export function getAuthors(): Author[] {
  return Object.values(authors)
}
