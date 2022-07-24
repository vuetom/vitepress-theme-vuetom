<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { useSidebar } from '../../composables/sidebar'
import VTSidebarTop from './VTSidebarTop.vue'
import VTSidebarBottom from './VTSidebarBottom.vue'

const { theme } = useData()
const { hasSidebar } = useSidebar()

const { avatar, author } = theme.value

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
