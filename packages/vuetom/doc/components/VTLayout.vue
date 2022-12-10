<script setup lang="ts">
import { onMounted, onUnmounted, watch, nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import {
  useFlash,
  useBackground,
  useFeatures,
  useHeroMove,
} from '../composables/home.js'

const { Layout } = DefaultTheme
// const route = useRoute()
const { site, theme } = useData()
const { base} = site.value
const { logoImg } = theme.value
const { flashEnable, flashStyle } = useFlash()
const { bgEnable, bgStyle } = useBackground()
const { ftStyle } = useFeatures()
const { parallaxEnable, heroMove } = useHeroMove()

const pageBgEnable = theme.value.pageBgEnable || true
const pageBgOpacity = theme.value.pageBgOpacity || 0.8

const logoSrc = `${base}${logoImg}`.replaceAll('//', '/')

const renderHomeBg = () => {
  const domStyle = document.documentElement.style
  // 首页闪烁动画样式设置
  if (flashEnable && flashStyle) {
    domStyle.setProperty('--vt-bg-light', flashStyle)
  }
  // 文章背景图设置
  if (pageBgEnable && pageBgOpacity)  {
    domStyle.setProperty('--vt-bg-doc', `rgba(var(--vt-c-bg-rgb), ${pageBgOpacity})`)   
  }
  // 首页背景图设置
  if (bgEnable && bgStyle) {
    domStyle.setProperty('--vt-bg-content', bgStyle)
  }
  if (ftStyle) {
    const vpFeat: any = document.getElementsByClassName('VPFeatures')[0]
    const fs = vpFeat?.style
    if (fs) fs.background = ftStyle
  }
}

// const checkPath = (path: string) => {
//   const homePaths = [base, `${base}index.html`, `${base}${lang}/`]
//   const isHome = homePaths.includes(path)
//   if (isHome) {
//     nextTick(() => {
//       renderHomeBg()
//     })
//   }
// }

// watch(
//   () => route.path,
//   (path) => {
//     checkPath(path)
//   }
// )

onMounted(() => {
  renderHomeBg()
  if (parallaxEnable) window.addEventListener('mousemove', heroMove)
})

onUnmounted(() => {
  if (parallaxEnable) window.removeEventListener('mousemove', heroMove)
})
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <img class="VPHeroLogo" :src="logoSrc" />
      <slot name="home-hero-before" />
    </template>
  </Layout>
</template>
