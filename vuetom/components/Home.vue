<script setup lang="ts">
import { useData } from 'vitepress'
import HomeHero from './HomeHero.vue'
import HomeFeatures from './HomeFeatures.vue'
import HomeFooter from './HomeFooter.vue'
import { VuetomThemeConfig } from '../types/vuetom-theme'
const { theme } = useData<VuetomThemeConfig>()
let { bgImg, bgColor, bgOpacity } = theme.value
let bgInnerOpacity = 0.3
let bgStyle = ``
if (bgOpacity == undefined) {
  bgOpacity = 0.6
}
bgInnerOpacity = bgOpacity - 0.3 <= 0 ? 0 : bgOpacity - 0.3
if (bgColor == undefined) {
  bgColor = '0,0,0'
}
bgStyle = `background-image: -webkit-linear-gradient(top,rgba(${bgColor},${bgOpacity}) 0%,rgba(${bgColor},${bgInnerOpacity}) 20%,rgba(${bgColor},${bgInnerOpacity}) 80%,rgba(${bgColor},${bgOpacity}) 100%),-webkit-linear-gradient(left,rgba(${bgColor},${bgOpacity}) 0%,rgba(${bgColor},${bgInnerOpacity}) 20%,rgba(${bgColor},${bgInnerOpacity}) 80%,rgba(${bgColor},${bgOpacity}) 100%),url(${bgImg});`
</script>

<template>
  <main class="home" aria-labelledby="main-title" :style="bgStyle">
    <HomeHero />
    <slot name="hero" />
    <HomeFeatures />
    <div class="home-content">
      <Content />
    </div>
    <slot name="features" />
    <HomeFooter />
    <slot name="footer" />
  </main>
</template>

<style scoped>
.home {
  padding-top: var(--header-height);
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}

.home-content {
  max-width: 960px;
  margin: 0px auto;
  padding: 0 1.5rem;
}
</style>
