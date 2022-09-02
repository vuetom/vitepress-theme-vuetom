<script setup lang="ts">
import VTSidebarLink from './VTSidebarLink.vue'
import { useSidebar } from '../../composables/sidebar.js'

const { sidebar } = useSidebar()
</script>

<template>
  <div class="VTSidebarTop">
    <div class="rounded-vt shadow-vt overflow-hidden bg-cbg">
      <div class="h-20 px-6 py-3 bg-brand">
        <p class="font-bold py-1">公告</p>
        <p class="text-sm">暂无</p>
      </div>
      <div class="h-60 px-6 py-4">
        <div v-for="s in sidebar" :key="s.text">
          <VTSidebarLink
            :text="s.text"
            :items="s.items"
            :link="s.link" />
        </div>
      </div>
    </div>
  </div >
</template>

<style scoped>
</style>
