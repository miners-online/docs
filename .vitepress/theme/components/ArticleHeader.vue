<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { formatDate, humanize } from '../format'
import { resolveAuthor } from '../authors'

const { frontmatter } = useData()

const category = computed(() =>
  frontmatter.value.category ? humanize(String(frontmatter.value.category)) : null
)

const date = computed(() => formatDate(frontmatter.value.date))

const authors = computed(() => {
  const raw = frontmatter.value.authors
  const slugs: string[] = Array.isArray(raw) ? raw : raw ? [raw] : []
  return slugs.map(resolveAuthor)
})

const tags = computed<string[]>(() =>
  Array.isArray(frontmatter.value.tags) ? frontmatter.value.tags : []
)
</script>

<template>
  <header class="article-header">
    <p v-if="category" class="article-category">{{ category }}</p>

    <h1 class="article-title">{{ frontmatter.title }}</h1>

    <p v-if="frontmatter.description" class="article-description">
      {{ frontmatter.description }}
    </p>

    <div v-if="authors.length || date" class="article-meta">
      <div v-if="authors.length" class="article-authors">
        <component
          :is="author.link ? 'a' : 'span'"
          v-for="author in authors"
          :key="author.slug"
          class="article-author"
          v-bind="
            author.link
              ? { href: author.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}
          "
        >
          <img
            v-if="author.avatar"
            :src="author.avatar"
            alt=""
            class="article-author-avatar"
          />
          <span class="article-author-name">{{ author.name }}</span>
        </component>
      </div>

      <template v-if="authors.length && date">
        <span class="article-meta-separator" aria-hidden="true">·</span>
      </template>

      <time v-if="date" :datetime="frontmatter.date" class="article-date">{{ date }}</time>
    </div>

    <ul v-if="tags.length" class="article-tags">
      <li v-for="tag in tags" :key="tag" class="article-tag">{{ humanize(tag) }}</li>
    </ul>
  </header>
</template>

<style scoped>
.article-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.article-category {
  margin: 0 0 0.5rem;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}

.article-title {
  margin: 0 0 0.75rem;
  border-top: none;
  padding-top: 0;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.article-description {
  margin: 0 0 1.25rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.article-authors {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.article-author {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--vp-c-text-1);
  font-weight: 500;
  text-decoration: none;
}

a.article-author:hover {
  color: var(--vp-c-brand-1);
}

.article-author-avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  object-fit: cover;
}

.article-meta-separator {
  color: var(--vp-c-text-3);
}

.article-date {
  white-space: nowrap;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.article-tag {
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
}

@media (min-width: 640px) {
  .article-title {
    font-size: 2.25rem;
  }
}
</style>
