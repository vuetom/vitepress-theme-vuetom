<script setup lang="ts">
import { useToc } from '../../composables/useToc'

const headers = useToc()
</script>

<template>
  <nav class="toc-content">
    <h3 class="toc-content__heading">Contents</h3><br>
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
  .toc-content__heading {
   color: var(--vt-c-text-1);
  }
  .toc-items {
    padding: 0;
    width: 10rem;
  }
  .toc-item {
    margin-top: 0.2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: inherit;
  }
  .toc-item.subitem {
    padding-left: 1.2rem;
  }
  .toc-link {
    font-size: 0.9rem;
    position: relative;
    color: var(--vt-c-text-2);
    transition: color 0.5s;
    text-decoration: none;
    padding-left: 0.3rem;
    border-left: 0.2rem solid #00000000;
    border-radius: 0.1rem;
  }
  .toc-link:hover {
    color: var(--vt-c-text-1);
    border-left: 0.2rem solid var(--c-brand);
  }
</style>
