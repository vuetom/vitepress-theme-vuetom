<script setup lang="ts">
import { normalizeLink } from '../../support/utils.js'

const props = defineProps<{
  text: string,
  link: string,
  items: any
}>()

const togo = (url: string) => {
  if (!url) url = ''
  window.location.href = normalizeLink(url)
}
</script>

<template>
  <div>
    <div class="rounded-md w-full py-1 px-4 border-2 border-transparent
      hover:border-brand transition-colors"
      @click="togo(link)">
      {{text}}
    </div>
  </div>
</template>
