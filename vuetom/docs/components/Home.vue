<script setup lang="ts">
import { useData } from 'vitepress'
import { reactive, onMounted, onUnmounted } from 'vue'
import HomeHero from './HomeHero.vue'
import HomeFeatures from './HomeFeatures.vue'
import HomeFooter from './HomeFooter.vue'
import type { VuetomThemeConfig } from '../types'

const { theme } = useData<VuetomThemeConfig>()
const {
  bgImg, flashEnable, featuresColor, parallaxEnable
} = theme.value
let { bgColor, flashColor, bgOpacity } = theme.value

let bgStyle = ''
let lightStyle = ''
let bgInnerOpacity = 0.3
let ftStyle = 'background:rgba(255,255,255,0.8);'

// feat color check
if (typeof featuresColor === 'string') {
  ftStyle = `background:${featuresColor}`
} else if (typeof featuresColor === 'object') {
  if (featuresColor.length >= 2) {
    ftStyle = `
      background: linear-gradient(
        to right,
        ${featuresColor[0]},
        ${featuresColor[1]}
      );
    `
  }
}

// bg check
if (bgColor === undefined) bgColor = '0,0,0'
if (bgOpacity === undefined) bgOpacity = 0.6
if (flashColor === undefined) flashColor = ['0,0,0', '0,0,0']
if (typeof flashColor === 'string') flashColor = [flashColor, flashColor]
bgInnerOpacity = bgOpacity - 0.3 <= 0 ? 0 : bgOpacity - 0.3

if (bgImg) {
  bgStyle = `
    -webkit-linear-gradient(top,
      rgba(${bgColor},${bgOpacity}) 0%,
      rgba(${bgColor},${bgInnerOpacity}) 20%,
      rgba(${bgColor},${bgInnerOpacity}) 80%,
      rgba(${bgColor},${bgOpacity}) 100%
    ),
    -webkit-linear-gradient(left,
      rgba(${bgColor},${bgOpacity}) 0%,
      rgba(${bgColor},${bgInnerOpacity}) 20%,
      rgba(${bgColor},${bgInnerOpacity}) 80%,
      rgba(${bgColor},${bgOpacity}) 100%),
    url(${bgImg})
  `
}
if (bgImg && flashEnable) {
  lightStyle = `
    -webkit-linear-gradient(top,
      rgba(${flashColor[0]}, 0.8) 0%,
      rgba(${flashColor[0]}, 0.2) 20%,
      rgba(${flashColor[0]}, 0) 80%,
      rgba(${flashColor[0]}, 0) 100%
    ),
    -webkit-linear-gradient(left, 
      rgba(${flashColor[1]}, 0) 0%, 
      rgba(${flashColor[1]}, 0) 20%, 
      rgba(${flashColor[1]}, 0.2) 80%, 
      rgba(${flashColor[1]}, 0.8) 100%),
      url(${bgImg})
  `
}

const mm = (e) => {
  document.querySelectorAll(`
      .home-hero div,
      .home-hero a,
      .home-hero h1,
      .home-hero p,
      .home-features
    `).forEach((h) => {
    const hd = h
    const speed = hd.getAttribute('data-speed') || 10
    let x = (window.innerWidth - e.pageX * speed) / 100
    let y = (window.innerHeight - e.pageY * speed) / 100
    switch (hd.tagName) {
    case 'DIV':
      x /= 6; y /= 6; break
    case 'A':
      x /= 5; y /= 5; break
    case 'P':
      x /= 4; y /= 4; break
    case 'H1':
      x /= 1; y /= 1; break
    default:
      break
    }
    hd.style.transform = `translateX(${x}px) translateY(${y}px)`
    hd.style.transition = 'transform 0.2s ease-out'
  })
}

onMounted(() => {
  if (parallaxEnable) window.addEventListener('mousemove', mm)
})

onUnmounted(() => {
  if (parallaxEnable) window.removeEventListener('mousemove', mm)
})
</script>

<template>
  <main
    class="home"
    aria-labelledby="main-title"
    :style="{ 'background-image': bgStyle }"
  >
    <HomeHero :style="{ '--vt-bg-light': lightStyle }" />
    <slot name="hero" />
    <HomeFeatures :style="ftStyle" />
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
  margin: 0 auto;
  padding: 0 1.5rem;
}
</style>
