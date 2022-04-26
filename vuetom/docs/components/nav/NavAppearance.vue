<script lang="ts" setup>
import VTSwitchAppearance from '../core/VTSwitchAppearance.vue'
</script>

<template>
  <div class="VPNavBarAppearance">
    <VTSwitchAppearance />
  </div>
</template>

<style scoped>
.VPNavBarAppearance {
  display: none;
}

@media (min-width: 1280px) {
  .VPNavBarAppearance {
    display: block;
  }
}
</style>
