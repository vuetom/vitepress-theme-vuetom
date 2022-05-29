<script lang="ts" setup>
import { PREFERRED_THEME_KEY } from '../../../constant'
import VTSwitch from './VTSwitch.vue'
import VTIconSun from '../icons/VTIconSun.vue'
import VTIconMoon from '../icons/VTIconMoon.vue'

function useAppearance() {
  let userPreference = localStorage.getItem(PREFERRED_THEME_KEY) || 'auto'
  const query = window.matchMedia('(prefers-color-scheme: dark)')
  const { classList } = document.documentElement
  const setClass = (dark: boolean) => classList[dark ? 'add' : 'remove']('dark')
  let isDark = userPreference === 'auto'
    ? query.matches : userPreference === 'dark'
  query.onchange = (e) => {
    if (userPreference === 'auto') {
      setClass((isDark = e.matches))
    }
  }
  if (userPreference === 'auto') {
    setClass(query.matches)
  } else {
    setClass(userPreference === 'dark')
  }
  return () => {
    setClass((isDark = !isDark))
    localStorage.setItem(
      PREFERRED_THEME_KEY,
      // eslint-disable-next-line no-nested-ternary
      (userPreference = isDark
        ? query.matches
          ? 'auto'
          : 'dark'
        : query.matches
          ? 'light'
          : 'auto')
    )
  }
}
const toggle = typeof localStorage !== 'undefined' ? useAppearance() : () => {}
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

.vt-switch-icon svg {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  fill: #222;
}

.dark .vt-switch-icon svg {
  fill: #eee;
  transition: opacity 0.25s;
}

.dark .vt-switch-appearance .vt-switch-check {
  transform: translateX(18px);
}
</style>
