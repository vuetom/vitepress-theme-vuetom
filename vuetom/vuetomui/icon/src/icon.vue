<template>
  <i :class="'vuetom-icon vt-icon-' + name"></i>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VtIcon',

  props: {
    name: String
  }
})
</script>
