<script setup lang="ts">
import { onMounted, ref, computed, reactive } from 'vue'
import { useMediaQuery, useParallax } from '@vueuse/core'
import type { CSSProperties } from 'vue'
import { useHomeParallax } from '../composables/homebg.js'

const { parallaxEnable } = useHomeParallax()

onMounted(() => {})

const parallaxRef = ref(null)
const isMobile = useMediaQuery('(max-width: 700px)')
const parallax = reactive(useParallax(parallaxRef))
const cardWindowStyle: CSSProperties = {
  overflow: 'hidden',
  fontSize: '1rem',
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
}
const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',
}
const layerBg = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 10
  }px) scale(1.1)`,
}))
const layerCloud = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 200}px) translateY(${
    parallax.roll * 30 - 100
  }px) scale(1)`,
}))
const layerHuman = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * -50}px) translateY(${
    parallax.roll * 30
  }px) scale(1.2)`,
}))
const layerGrass = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * -200}px) translateY(${
    parallax.roll * 100 - 120
  }px) scale(1.5)`,
}))
const cardStyle = computed(() => ({
  position: 'absolute',
  zIndex: 1,
  background: '#00000000',
  height: '100%',
  width: '100%',
  borderRadius: '5px',
  overflow: 'hidden',
  transition: '.3s ease-out all',
  boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.25)',

  // transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
  //   parallax.tilt * 20
  // }deg)`
}))
</script>

<template>
  <div class="VTBackgroud" ref="parallaxRef"> 
    <div v-if="parallaxEnable" :style="cardStyle">
      <div :style="cardWindowStyle">
        <img :style="layerBg" src="/imgs/blog-bg-cloud.png" alt="" />
        <img :style="layerCloud" src="/imgs/cloud2.png" alt="" />
        <img :style="layerHuman" src="/imgs/blog-bg-human.png" alt="" />
        <img :style="layerGrass" src="/imgs/blog-bg-grass.png" alt="" />
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.VTBackground {
}
</style>
