<script setup lang="ts">
import { useData } from 'vitepress'
import PageFooter from './page-content/page-footer.vue'
import PageNav from './page-content/page-nav.vue'
import PageRight from './page-content/page-right.vue'

const { theme } = useData()
let { pageBgEnable, pageBgOpacity, bgImg } = theme.value
let pageBgStyle = ''
if (pageBgOpacity == undefined) {
  pageBgOpacity = 1
}
if (pageBgEnable == undefined) {
  pageBgEnable = false
}
if (pageBgEnable) {
  const pageBgOuterColor = '255,255,255'
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
      <PageNav />
      <slot name="bottom" />
    </div>
    <div class="container-right">
      <PageRight class="page-right"/>
    </div>
  </main>
</template>

<style scoped>
.page {
  padding-top: var(--header-height);
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  display: flex;
}

.container {
  flex: 4;
  margin: 0 3rem 0 6rem;
  padding: 0 1.5rem 4rem;
  max-width: 52rem;
}

.container-right {
  flex: 1;
  padding: 3rem;
  display: none;
}

.page-right {
  position: fixed;
}

.content {
  padding-bottom: 1.5rem;
}

@media (min-width: 420px) {
  .content {
    clear: both;
  }
}

@media (min-width: 720px) {
  .page {
    margin-left: 16rem;
  }
}

@media (min-width: 960px) {
  .page {
    margin-left: 18rem;
  }
}

@media (min-width: 1280px) {
  .page {
    margin-left: 20rem;
  }
  .container-right {
    display: block;
  }
}

</style>
