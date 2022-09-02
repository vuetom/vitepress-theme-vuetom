<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Layout from 'vitepress/dist/client/theme-default/Layout.vue'
import { useData } from 'vitepress'

const { site, theme } = useData()
const { base, title, description } = site.value
const {
  logoImg, bgImg, flashEnable, featuresColor, parallaxEnable
} = theme.value
let { bgColor, flashColor, bgOpacity } = theme.value

let baseUrl = base
let bgStyle = ''
let lightStyle = ''
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
if (bgOpacity === undefined) bgOpacity = 0.6
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
if (bgImg && flashEnable) {
  const bgImgSrc = (`${baseUrl}/${bgImg}`).replaceAll('//', '/')
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
      url(${bgImgSrc})
  `
}

const renderHome = () => {
  const ds = document.documentElement.style
  ds.setProperty('--vt-bg-light', lightStyle)

  const vpHome = document.getElementsByClassName('VPHome')[0]
  const hs = vpHome.style
  hs.backgroundSize = 'cover'
  hs.backgroundAttachment = 'fixed'
  hs.backgroundPosition = 'center center'
  hs.backgroundImage = bgStyle

  const vpFeat = document.getElementsByClassName('VPFeatures')[0]
  const fs = vpFeat.style

  fs.background = ftStyle
}

const heroMove = (e) => {
  document
    .querySelectorAll(
      `
      .VPHomeHero .name,
      .VPHomeHero .text,
      .VPHomeHero .tagline,
      .VPHomeHero .VPButton,
      .VPHome .VPHomeFeatures
    `
    )
    .forEach((h) => {
      const hd = h
      const speed = hd.getAttribute('data-speed') || 10
      let x = (window.innerWidth - e.pageX * speed) / 100
      let y = (window.innerHeight - e.pageY * speed) / 100
      switch (hd.className.substring(0, 3).toUpperCase()) {
      case 'VPF':
        x /= 8
        y /= 8
        break
      case 'TAG':
        x /= 6
        y /= 6
        break
      case 'TEX':
        x /= 4
        y /= 4
        break
      case 'VPB':
        x /= 2
        y /= 2
        break
      case 'NAM':
        x /= 1
        y /= 1
        break
      default:
        break
      }
      hd.style.transform = `translateX(${x}px) translateY(${y}px)`
      hd.style.transition = 'transform 0.2s ease-out'
    })
}

// nextTick(() => {
//   renderHome()
// })

onMounted(() => {
  renderHome()
  if (parallaxEnable) window.addEventListener('mousemove', heroMove)
})

onUnmounted(() => {
  if (parallaxEnable) window.removeEventListener('mousemove', heroMove)
})
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <img class="VPHeroLogo" :src="vpHeroLogoSrc" />
      <slot name="home-hero-before" />
    </template>
  </Layout>
</template>
