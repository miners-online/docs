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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
