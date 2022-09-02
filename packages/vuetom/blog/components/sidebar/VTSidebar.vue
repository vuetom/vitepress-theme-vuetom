<script setup lang="ts">
import { useData } from 'vitepress'
import { useSidebar } from '../../composables/sidebar.js'
import VTSidebarTop from './VTSidebarTop.vue'
import VTSidebarBottom from './VTSidebarBottom.vue'

const { site, theme } = useData()
const { hasSidebar } = useSidebar()
const { base } = site.value
let { avatar, author } = theme.value
let baseUrl = base

if (base === '/' || base.endsWith('/')) {
  baseUrl = base.substring(0, base.length - 1)
}

avatar = `${baseUrl}${avatar}`
author += ' '

</script>

<template>
  <div
    class="VTSidebar"
    :class="{ 'has-sidebar': hasSidebar }"
  >
    <VTSidebarTop />
    <div class="h-6"></div>
    <VTSidebarBottom
      :avatar="avatar"
      :author="author"
    />
  </div>
</template>

<style scoped>
</style>
