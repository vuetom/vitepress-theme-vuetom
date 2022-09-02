<script setup lang="ts">
import { provide, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { useSidebar, useCloseSidebarOnEscape } from '../composables/sidebar.js'
import VPNav from '../components/nav/VPNav.vue'
import VPFooter from '../components/VPFooter.vue'
import VTFloat from '../components/VTFloat.vue'
import VPContent from '../components/VPContent.vue'

const { site, theme } = useData()
const { base } = site.value
const {
  logoImg, bgImg, flashEnable, featuresColor, parallaxEnable
} = theme.value
let { bgColor, flashColor, bgOpacity } = theme.value

let baseUrl = base
let bgStyle = ''
const lightStyle = ''
let bgInnerOpacity = 0.3
let ftStyle = 'rgba(255,255,255,0.8)'

if (base === '/' || base.endsWith('/')) {
  baseUrl = base.substring(0, base.length - 1)
}

// hero logo
const vpHeroLogoSrc = (`${baseUrl}/${logoImg}`).replaceAll('//', '/')

// feat color check
if (typeof featuresColor === 'string') {
  ftStyle = featuresColor
} else if (typeof featuresColor === 'object') {
  if (featuresColor.length >= 2) {
    ftStyle = `
      linear-gradient(to right,
        ${featuresColor[0]},
        ${featuresColor[1]}
      )
    `
  }
}

// bg check
if (bgColor === undefined) bgColor = '0,0,0'
if (bgOpacity === undefined) bgOpacity = 0
if (flashColor === undefined) flashColor = ['0,0,0', '0,0,0']
if (typeof flashColor === 'string') flashColor = [flashColor, flashColor]
bgInnerOpacity = bgOpacity - 0.3 <= 0 ? 0 : bgOpacity - 0.3

if (bgImg) {
  const bgImgSrc = (`${baseUrl}/${bgImg}`).replaceAll('//', '/')
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
    url(${bgImgSrc})
  `
}

const {
  isOpen: isSidebarOpen,

  // open: openSidebar,
  close: closeSidebar
} = useSidebar()

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

provide('close-sidebar', closeSidebar)

const renderHome = () => {
  const ds = document.documentElement.style
  ds.setProperty('--vt-bg-light', lightStyle)

  const vpHome = document.getElementsByClassName('VPContent')[0]
  const hs = vpHome.style
  hs.backgroundSize = 'cover'
  hs.backgroundAttachment = 'fixed'
  hs.backgroundPosition = 'center center'
  hs.backgroundImage = bgStyle
}

const navOpacity = ref(0)

const handleScroll = () => {
  const scrollTop = window.pageYOffset
    || document.documentElement.scrollTop
    || document.body.scrollTop
  if (scrollTop <= 100) navOpacity.value = scrollTop / 100
}

onMounted(() => {
  renderHome()
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="Layout">
    <slot name="layout-top" />
    <!-- <VPSkipLink /> -->
    <!-- <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" /> -->
    <VPNav class="ss" :style="[{opacity: navOpacity}]"/>
    <!-- <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" /> -->
    <!-- <VPSidebar :open="isSidebarOpen" /> -->

    <VPContent class="h-full min-h-screen" />
    <!-- <VPContent>
      <template #home-hero-before><slot name="home-hero-before" /></template>
      <template #home-hero-after><slot name="home-hero-after" /></template>
      <template #home-features-before><slot name="home-features-before" /></template>
      <template #home-features-after><slot name="home-features-after" /></template>

      <template #doc-before><slot name="doc-before" /></template>
      <template #doc-after><slot name="doc-after" /></template>

      <template #aside-top><slot name="aside-top" /></template>
      <template #aside-bottom><slot name="aside-bottom" /></template>
      <template #aside-outline-before><slot name="aside-outline-before" /></template>
      <template #aside-outline-after><slot name="aside-outline-after" /></template>
      <template #aside-ads-before><slot name="aside-ads-before" /></template>
      <template #aside-ads-after><slot name="aside-ads-after" /></template>
    </VPContent> -->
    <VTFloat />
    <VPFooter />
    <slot name="layout-bottom" />
  </div>
</template>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}
</style>
