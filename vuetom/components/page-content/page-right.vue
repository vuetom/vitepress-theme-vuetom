<script setup lang="ts">
import { useToc } from '../../composables/useToc'

const headers = useToc()
</script>

<template>
  <nav class="toc-content">
    <h3 class="toc-content__heading">Contents</h3>
    <ul class="toc-items">
      <li
        v-for="{ link, text, children } in headers"
        :key="link"
        class="toc-item"
      >
        <a class="toc-link" :href="link">{{ text }}</a>
        <ul v-if="children">
          <li
            v-for="{ link: childLink, text: childText } in children"
            :key="childLink"
            class="toc-item"
          >
            <a class="toc-link subitem" :href="childLink">{{ childText }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .toc-items {
    list-style: none;
    padding: 0;
  }
  .toc-item {
    margin-top: 0.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: inherit;
  }
  .toc-item.subitem {
    padding-left: 1rem;
  }
  .toc-link {
    font-size: 0.8rem;
    position: relative;
    color: var(--c-brand);
    transition: color var(--c-brand);
  }
</style>
