<script setup lang="ts">
import { onMounted } from 'vue'
import VPFooter from './VPFooter.vue'

onMounted(() => {
  const homeDown = document.getElementById('home-down')
  const top = homeDown.clientHeight - 110
  window.scroll({
    top,
    left: 0,
    behavior: 'smooth'
  })
})
</script>

<template>
  <div class="VTHome">
    <div id="home-down" class="min-h-eight relative">
      <div :class="[
        'absolute bottom-5 left-0 right-0  animate-bounce ',
        'mx-auto w-10 text-3xl text-white'
      ]">
        <i class="fa fa-chevron-down"></i>
      </div>
    </div>
    <div id="VTContainer" class="container mx-auto w-11/12 pb-8">
      <div class="flex">
      <!-- <div class="grid grid-cols-4 gap-10"> -->
        <div id="VTLeft" :class="[
            'rounded-vt hidden w-64 px-4 flex-none',
            'md:block'
          ]">
          <slot name="sidebar"></slot>
        </div>
        <div id="VTContent" class="rounded-vt w-full px-4 md:w-1/2 flex-grow">
          <slot name="doclist"></slot>
          <slot name="docone"></slot>
        </div>
      </div>
      <VPFooter />
    </div>
  </div>
</template>

<style scoped>
.VTHome {
}

.VTHome :deep(.VTHomeSponsors) {
  margin-top: 112px;
  margin-bottom: -128px;
}

@media (min-width: 768px) {
  .VTHome {
  }
}
.home-vtp-btn-up {
}
</style>
