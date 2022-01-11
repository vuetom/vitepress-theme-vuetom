<script setup lang="ts">
import PageFooter from './PageFooter.vue'
import NextAndPrevLinks from './NextAndPrevLinks.vue'
import { useData } from 'vitepress';
const { theme } = useData();
let { pageBgEnable, pageBgOpacity, bgImg } = theme.value
let pageBgStyle = ``
if (pageBgOpacity == undefined) {
  pageBgOpacity = 1
}
if (pageBgEnable == undefined) {
  pageBgEnable = false
}
if (pageBgEnable) {
  let pageBgOuterColor = '255,255,255'
  pageBgStyle = `background-image: -webkit-linear-gradient(top,
    rgba(${pageBgOuterColor}, ${pageBgOpacity}) 0%,
    rgba(${pageBgOuterColor}, ${pageBgOpacity}) 20%,
    rgba(${pageBgOuterColor}, ${pageBgOpacity}) 80%,
    rgba(${pageBgOuterColor}, ${pageBgOpacity}) 100%),
    -webkit-linear-gradient(left,
    rgba(${pageBgOuterColor}, ${pageBgOpacity}) 0%,
    rgba(${pageBgOuterColor}, ${pageBgOpacity}) 20%,
    rgba(${pageBgOuterColor}, ${pageBgOpacity}) 80%,
    rgba(${pageBgOuterColor}, ${pageBgOpacity}) 100%),
    url(${bgImg});`
}
</script>

<template>
  <main 
    class="page"
    :style="pageBgStyle">
    <div class="container">
      <slot name="top" />

      <Content class="content" />
      <PageFooter />
      <NextAndPrevLinks />

      <slot name="bottom" />
    </div>
  </main>
</template>

<style scoped>
.page {
  padding-top: var(--header-height);
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}

@media (min-width: 720px) {
  .page {
    margin-left: 16.4rem;
  }
}

@media (min-width: 960px) {
  .page {
    margin-left: 20rem;
  }
}

.container {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 48rem;
}

.content {
  padding-bottom: 1.5rem;
}

@media (max-width: 420px) {
  .content {
    /* fix carbon ads display */
    clear: both;
  }
}
</style>
