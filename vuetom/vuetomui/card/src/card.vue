<template>
  <div
    :style="{'background-color': bgcolor}"
    class="vt-card"
    :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'"
  >
    <div
      v-if="$slots.header || header"
      class="vt-card__header"
    >
      <slot name="header">
        {{ header }}
      </slot>
    </div>
    <div
      class="vt-card__body"
      :style="bodyStyle"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VtCard',
  props: {
    header: {
      type: String,
      default: '',
    },
    bodyStyle: {
      type: String,
      default: '',
    },
    shadow: {
      type: String,
      default: '',
    },
    bgcolor: {
      type: String,
      default: '#FFF'
    }
  },
})
</script>
