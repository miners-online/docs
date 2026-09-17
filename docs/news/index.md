---
title: News
description: Announcements, updates, and behind-the-scenes posts from the Miners Online team.
sidebar: false
---

<script setup lang="ts">
import { data as articles } from './news.data'
import { formatDate, humanize } from '../../.vitepress/theme/format'
import { resolveAuthor } from '../../.vitepress/theme/authors'
</script>

# News

Announcements, updates, and behind-the-scenes posts from the Miners Online team.

<ul class="news-list">
  <li v-for="article in articles" :key="article.url" class="news-item">
    <a :href="article.url" class="news-item-link">
      <div class="news-item-top">
        <span v-if="article.category" class="news-item-category">{{ humanize(article.category) }}</span>
        <time v-if="article.date" :datetime="article.date" class="news-item-date">{{ formatDate(article.date) }}</time>
      </div>
      <h2 class="news-item-title">{{ article.title }}</h2>
      <p v-if="article.description" class="news-item-description">{{ article.description }}</p>
      <div class="news-item-bottom">
        <span v-if="article.authors.length" class="news-item-authors">By {{ article.authors.map(slug => resolveAuthor(slug).name).join(', ') }}</span>
        <ul v-if="article.tags.length" class="news-item-tags">
          <li v-for="tag in article.tags" :key="tag" class="news-item-tag">{{ humanize(tag) }}</li>
        </ul>
      </div>
    </a>
  </li>
</ul>
<p v-if="!articles.length">No articles yet - check back soon!</p>

<style scoped>
.news-list {
  margin: 2rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.news-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: border-color 0.25s;
  margin-top: 0;
}

.news-item:hover {
  border-color: var(--vp-c-brand-1);
}

.news-item-link {
  display: block;
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
}

.news-item-top {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  font-size: 13px;
}

.news-item-category {
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}

.news-item-date {
  color: var(--vp-c-text-3);
}

.news-item-title {
  margin: 0 0 0.5rem;
  border-top: none;
  padding-top: 0;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.news-item-link:hover .news-item-title {
  color: var(--vp-c-brand-1);
}

.news-item-description {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.news-item-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1rem;
}

.news-item-authors {
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.news-item-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.news-item-tag {
  padding: 0.1rem 0.55rem;
  border-radius: 999px;
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
  margin-top: 0;
}
</style>
