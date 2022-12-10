<script setup lang="ts">
import { provide, onMounted, ref, computed, reactive } from 'vue'
import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue'
// import VPNav from '../components/nav/VPNav.vue'
import VTFloat from '../components/VTFloat.vue'
import VPContent from '../components/VPContent.vue'
import VTBackground from '../components/VTBackground.vue'
import type { UseScrollReturn } from '@vueuse/core'
import { useScriptTag } from '@vueuse/core'
import { vScroll } from '@vueuse/components'
import { useSidebar, useCloseSidebarOnEscape } from '../composables/sidebar.js'
import { useHomeBg } from '../composables/homebg.js'

const { bgStyle, bgImgSrc } = useHomeBg()

const {
  isOpen: isSidebarOpen,
  // open: openSidebar,
  close: closeSidebar,
} = useSidebar()

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

provide('close-sidebar', closeSidebar)

const renderHomeBackground = () => {
  // const ds = document.documentElement.style
  // ds.setProperty('--vt-bg-light', lightStyle)

  const vpHome = document.getElementById('VTLayoutScroll')
  const hs = vpHome.style
  hs.backgroundSize = 'cover'
  hs.backgroundAttachment = 'fixed'
  hs.backgroundPosition = 'center center'
  hs.backgroundImage = bgStyle
}

// const handleScroll = () => {
//   const scrollTop = window.pageYOffset
//     || document.documentElement.scrollTop
//     || document.body.scrollTop
//   if (scrollTop <= 100) navOpacity.value = scrollTop / 100
// }

onMounted(() => {
  renderHomeBackground()

  // window.addEventListener('scroll', handleScroll)
})

const navOpacity = ref(0)
function onScroll(state: UseScrollReturn) {
  const arrivedTop = state.arrivedState.top
  const val = state.y.value / 200
  if (arrivedTop) navOpacity.value = 0
  else navOpacity.value <= 1 ? (navOpacity.value = val) : 1
}

useScriptTag(
  '/js/leaf.js',
  (el: HTMLScriptElement) => {
  },
)
</script>

<template>
  <div class="Layout">
    <slot name="layout-top" />
    <!-- <VPSkipLink /> -->
    <!-- <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" /> -->
    <VPNav
      class="transition-opacity duration-1000"
      :style="[{ opacity: navOpacity }]" />
    <!-- <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" /> -->
    <!-- <VPSidebar :open="isSidebarOpen" /> -->
    <div
      id="VTLayoutScroll"
      class="h-screen overflow-scroll"
      v-scroll="[onScroll, { throttle: 10 }]">
      <VTBackground>
        <VPContent class="h-full relative z-10" />
      </VTBackground>
    </div>

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
