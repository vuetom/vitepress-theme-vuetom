<script setup lang="ts">
import { ref } from 'vue'
import {
  withBase, useRouter, useRoute, useData
} from 'vitepress'

// import { getRoutes } from '../../../support/pages'
import VTDocCard from './VTDocCard.vue'

// const { routes } = getRoutes()
const routes = [{
  path: '/blog/_pages/HelloWorld2.md',
  component: { name: '_pages/HelloWorld2.md', __hmrId: '0d3b6d27', __file: '/Users/liujie/Code/VscodeProjects/vt-fork/packages/blog/_pages/HelloWorld2.md' },
  data: {
    title: 'HelloWorld2', description: '', frontmatter: { title: 'HelloWorld2', tag: 'java,spring', categories: 'java' }, headers: [], relativePath: '_pages/HelloWorld2.md', lastUpdated: null
  }
}, {
  path: '/blog/_pages/HelloWorld.md',
  component: { name: '_pages/HelloWorld.md', __hmrId: 'd5db311e', __file: '/Users/liujie/Code/VscodeProjects/vt-fork/packages/blog/_pages/HelloWorld.md' },
  data: {
    title: 'HelloWorld', description: '', frontmatter: { title: 'HelloWorld', tag: 'ui,front', categories: 'vue' }, headers: [], relativePath: '_pages/HelloWorld.md', lastUpdated: null
  }
}]
</script>

<template>
  <div class="VTDoc">
    <div v-for="(r,i) in routes" :key="r.__hmrId">
      <VTDocCard :data="r" />
    </div>
  </div>
</template>

<style scoped>
</style>
