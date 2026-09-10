import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Miners Online",
  description: "Documentation for Miners Online",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Play',
        items: [
          { text: 'Survival', link: '/play/survival' },
          { text: 'City World', link: '/play/city-world' }
        ]
      },
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
          { text: 'Survival', link: '/play/survival' },
          { text: 'City World', link: '/play/city-world' }
        ]
      }
    ],
  }
})
