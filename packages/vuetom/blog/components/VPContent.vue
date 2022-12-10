<!-- @format -->

<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import { useSidebar } from '../composables/sidebar.js'
import NotFound from '../layouts/NotFound.vue'
import VTHome from './VTHome.vue'
import VTDoc from './article/VTDoc.vue'
import VTDocList from './article/VTDocList.vue'
import VTSidebar from './sidebar/VTSidebar.vue'

const route = useRoute()
const { frontmatter } = useData()
const { hasSidebar } = useSidebar()
</script>

<template>
  <div
    class="VPContent"
    id="VPContent"
    :class="{
      'has-sidebar': hasSidebar,
      'is-home': frontmatter.layout === 'home',
    }"
  >
    <NotFound v-if="route.component === NotFound" />
    <VTHome
      v-else-if="frontmatter.layout === 'home' || frontmatter.layout === 'doc'"
    >
      <template #sidebar><VTSidebar /></template>
      <template #doclist>
        <!-- 文章列表 -->
        <VTDocList v-if="frontmatter.layout === 'home'" />
      </template>
      <template #docone>
        <!-- 单个文章 -->
        <VTDoc v-if="frontmatter.layout === 'doc'">
          <Content />
        </VTDoc>
      </template>
    </VTHome>

    <div v-else>
      <Content></Content>
    </div>
  </div>
</template>

<style scoped>
.VPContent {
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0 auto;
  width: 100%;
}

.VPContent.is-home {
  width: 100%;
  max-width: 100%;
}

@media (min-width: 960px) {
  .VPContent {
    padding-top: var(--vp-nav-height);
  }

  .VPContent.has-sidebar {
    margin: 0;
    padding-left: var(--vp-sidebar-width);
  }
}

@media (min-width: 1440px) {
  .VPContent.has-sidebar {
    padding-right: calc((100vw - var(--vp-layout-max-width)) / 2);
    padding-left: calc(
      (100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width)
    );
  }
}
</style>
