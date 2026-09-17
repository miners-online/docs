<script setup lang="ts">
import { useData } from 'vitepress'
import ArticleHeader from '../components/ArticleHeader.vue'

// Registered globally as the `article` component (see theme/index.ts),
// this is what VitePress's default theme renders in place of the normal
// doc view whenever a page sets `layout: article`. It reuses the site's
// nav/footer chrome from the base Layout, but replaces the doc column
// with an article header followed by the rendered markdown content -
// there is no sidebar-aware markup here at all, so there is simply no
// sidebar to show.
useData()
</script>

<template>
  <div class="ArticlePage">
    <div class="container">
      <div class="content">
        <ArticleHeader />
        <main class="main">
          <Content class="vp-doc article-content" />
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ArticlePage {
  padding: 2rem 1.5rem 6rem;
  width: 100%;
}

@media (min-width: 48rem) {
  .ArticlePage {
    padding: 3rem 2rem 8rem;
  }
}

@media (min-width: 60rem) {
  .ArticlePage {
    padding: 3rem 2rem 0;
  }

  .container {
    display: flex;
    justify-content: center;
    max-width: 62rem;
  }

  .content {
    max-width: 47rem;
  }
}

@media (min-width: 90rem) {
  .content {
    max-width: 49rem;
  }

  .container {
    max-width: 69rem;
  }
}

.container {
  margin: 0 auto;
  width: 100%;
}

.content {
  margin: 0 auto;
  width: 100%;
}
</style>
