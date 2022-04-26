<script setup lang="ts">
import NavBarTitle from './NavBarTitle.vue'
import NavLinks from './NavLinks.vue'
import NavAppearance from './NavAppearance.vue'

// import ToggleSideBarButton from './ToggleSideBarButton.vue'

// defineEmits(['toggle'])
</script>

<template>
  <header class="nav-bar">
    <!-- <ToggleSideBarButton @toggle="$emit('toggle')" /> -->
    <NavBarTitle />
    <div class="flex-grow" />
    <div class="nav">
      <NavLinks />
    </div>
    <div>
      <NavAppearance class="appearance" />
    </div>
    <slot name="search" />
  </header>
</template>

<style scoped>
.appearance {
  margin-left: 8px;
}
</style>
