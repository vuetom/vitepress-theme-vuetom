<script lang="ts" setup>
import { ref } from 'vue'
import VPSwitchAppearance from './switch/VPSwitchAppearance.vue'

defineProps<{
  icon?: any
  button?: string
  label?: string
  items?: any[]
}>()

const open = ref(false)
const el = ref<HTMLElement>()

</script>

<template>
  <div
    class="VTFloat"
    ref="el"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <div class="box hover:animate-wiggle">
      <VPSwitchAppearance />
    </div>

    <div class="box hover:animate-wiggle">
      Set
    </div>

  </div>
</template>

<style scoped>
.VTFloat {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 20px;
  bottom: 100px;
  width: 60px;
  height: max-content;
  height: -moz-max-content;
  z-index: 1000;
  transition: all .3s ease;
}

.VTFloat:hover {
  color: var(--vp-c-bland);
  transition: color 0.25s;
}

.VTFloat:hover .text {
  color: var(--vp-c-text-2);
}

.VTFloat:hover .icon {
  fill: var(--vp-c-text-2);
}

.VTFloat.active .text {
  color: var(--vp-c-brand);
}

.VTFloat.active:hover .text {
  color: var(--vp-c-brand-dark);
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 5px;
  transition: opacity 0.25s, border-color 0.5s, transform 0.25s;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider-light);
  background-color: var(--vp-c-bg);
}

.box:hover {
  border-color: var(--vp-c-gray);
}

@media (min-width: 960px) {
  .menu {
    top: calc(var(--vp-nav-height-desktop) / 2 + 20px);
  }
}
</style>
