// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ArticlePage from './layouts/ArticlePage.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Registering a component under the same name as a `layout:` value
    // is VitePress's built-in extension point for per-page layouts
    // (see VPContent.vue): pages with `layout: article` in frontmatter
    // render this component instead of the normal sidebar-aware doc view.
    // https://vitepress.dev/guide/extending-default-theme#layout-slots
    app.component('article', ArticlePage)
  }
} satisfies Theme
