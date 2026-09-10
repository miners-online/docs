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
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://github.com/miners-online/.github/blob/main/profile/logos/favicon-160x160-min.png?raw=true',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Play', link: '/play/' },
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
