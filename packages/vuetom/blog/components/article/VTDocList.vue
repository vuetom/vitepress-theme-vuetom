<script setup lang="ts">
import { getRoutes } from '../../../support/pages.js'
import VTDocCard from './VTDocCard.vue'

const { routes } = getRoutes()

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
