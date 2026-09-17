import { defineConfig } from 'vitepress'

const now = new Date()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Miners Online",
  description: "Documentation for Miners Online",

  head: [
    ['link', { rel: 'icon', href: 'https://github.com/miners-online/.github/blob/main/profile/logos/favicon-160x160-min.png?raw=true' }]
  ],

  cleanUrls: true,

  transformPageData(pageData) {
    // Pages using the `article` layout never have a sidebar: default
    // `sidebar` to false for them here, at build time, so there is
    // simply no sidebar data for the page in the first place (rather
    // than hiding one at runtime). Authors of article pages no longer
    // need to set `sidebar: false` themselves.
    if (pageData.frontmatter.layout === 'article' && pageData.frontmatter.sidebar === undefined) {
      pageData.frontmatter.sidebar = false
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://github.com/miners-online/.github/blob/main/profile/logos/favicon-160x160-min.png?raw=true',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Play', link: '/play/' },
      { text: 'News', link: '/news/' },
      {
        text: 'Community',
        items: [
          { text: 'Discord', link: 'https://discord.gg/aeRReEaNnm' },
          { text: 'GitHub Discussions', link: 'https://github.com/miners-online/discussions' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Play',
        items: [
          { text: 'Getting Started', link: '/play/' },
          { text: 'Construct', link: '/play/construct' },
          { text: 'Nations', link: '/play/nations' }
        ]
      },
      { text: 'Our Team', link: '/team/' }
    ],
    footer: {
      message: 'Miners Online, a free-to-play, Minecraft server. NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.',
      copyright: `Copyright © ${now.getFullYear()} Samuel Hulme, Miners Online`
    }
  }
})
