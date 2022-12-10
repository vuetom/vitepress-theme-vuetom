<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { useSidebar } from '../composables/sidebar.js'
import VTLeftButton from './VTLeftButton.vue'

const { theme } = useData()
const { hasSidebar } = useSidebar()
const brandColor = ref('')
const colorRef = ref(null)
const changeBrandColor = (color: string) => {
  brandColor.value = color
  document.documentElement.style.setProperty('--vp-c-brand', color)
}
</script>

<template>
  <footer
    v-if="theme.footer"
    class="VTFooter relative left-0 right-0 bottom-0 container mx-auto w-full pb-8"
    :class="{ 'has-sidebar': hasSidebar }"
  >
    <!-- <div class="grid grid-cols-4 gap-10"> -->
    <div class="flex">
      <div
        id="VTFooterLeft"
        class="rounded-vt hidden w-64 px-4 flex-none md:block">
        <VTLeftButton>
          <div ref="colorRef">
            <span @click="changeBrandColor('red')">red</span>
            <span @click="changeBrandColor('green')" >green</span>
          </div>
        </VTLeftButton>
      </div>
      <div
        id="VTFooterMiddle"
        class="rounded-vt w-full mt-8 px-4 md:w-1/2 flex-grow">
        <div class="rounded-vt bg-cbg w-4/5 mx-auto text-center py-8">
          <p class="message">{{ theme.footer.message }}</p>
          <p class="copyright">{{ theme.footer.copyright }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* .VPFooter {
  position: absolute;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-divider-light);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
  width: 80%;
  left: 10%;
  border-radius: 10px;
  bottom: 20px;
} */

.VPFooter.has-sidebar {
  display: none;
}

@media (min-width: 768px) {
  .VPFooter {
    /* padding: 32px; */
  }
}

.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.message {
  order: 2;
}
.copyright {
  order: 1;
}
</style>
