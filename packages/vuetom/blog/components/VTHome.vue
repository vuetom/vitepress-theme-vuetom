<script setup lang="ts">
import { onMounted } from 'vue'

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
      <div class="absolute bottom-5 left-0 right-0 mx-auto w-10 text-3xl animate-bounce text-white">
        <i class="fa fa-chevron-down"></i>
      </div>
    </div>
    <div id="VTContainer" class="container mx-auto w-4/5 pb-8">
      <div class="grid grid-cols-4 gap-10">
        <div id="VTLeft" class="rounded-vt hidden md:col-span-1 md:block">
          <slot name="sidebar"></slot>
        </div>
        <div id="VTContent" class="rounded-vt col-span-4 md:col-span-3">
          <slot name="doclist"></slot>
          <slot name="docone"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VTHome {
  padding-bottom: 96px;
}

.VTHome :deep(.VTHomeSponsors) {
  margin-top: 112px;
  margin-bottom: -128px;
}

@media (min-width: 768px) {
  .VTHome {
    padding-bottom: 128px;
  }
}
.home-vtp-btn-up {
}
</style>
