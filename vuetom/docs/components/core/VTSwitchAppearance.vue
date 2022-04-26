<script lang="ts" setup>
import VTSwitch from './VTSwitch.vue'
import VTIconSun from '../icons/VTIconSun.vue'
import VTIconMoon from '../icons/VTIconMoon.vue'

const storageKey = 'VUETOM_THEME'
const toggle = typeof localStorage !== 'undefined' ? useAppearance() : () => {}

function useAppearance() {
  let userPreference = localStorage.getItem(storageKey) || 'auto'
  const query = window.matchMedia('(prefers-color-scheme: dark)')
  const { classList } = document.documentElement
  let isDark = userPreference === 'auto' ? query.matches : userPreference === 'dark'
  const setClass = (dark: boolean) => classList[dark ? 'add' : 'remove']('dark')

  query.onchange = (e) => {
    if (userPreference === 'auto') {
      setClass((isDark = e.matches))
    }
  }

  const toggle = () => {
    setClass((isDark = !isDark))
    localStorage.setItem(
      storageKey,
      (userPreference = isDark
        ? query.matches
          ? 'auto'
          : 'dark'
        : query.matches
          ? 'light'
          : 'auto')
    )
  }

  return toggle
}
</script>

<template>
  <VTSwitch
    class="vt-switch-appearance"
    aria-label="toggle dark mode"
    @click="toggle"
  >
    <VTIconSun class="vt-switch-appearance-sun" />
    <VTIconMoon class="vt-switch-appearance-moon" />
  </VTSwitch>
</template>

<style scoped>
.vt-switch-appearance-sun {
  opacity: 1;
}
.vt-switch-appearance-moon {
  opacity: 0;
}

.dark .vt-switch-appearance-sun {
  opacity: 0;
}
.dark .vt-switch-appearance-moon {
  opacity: 1;
}

.dark .vt-switch-appearance .vt-switch-check {
  transform: translateX(18px);
}
</style>
