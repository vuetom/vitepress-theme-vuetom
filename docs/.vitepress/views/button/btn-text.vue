<template>
  <div class="example-showcase">

    <vt-row>
      <vt-button text>Plain</vt-button>
      <vt-button type="primary" text>Primary</vt-button>
      <vt-button type="success" text>Success</vt-button>
      <vt-button type="info" text>Info</vt-button>
      <vt-button type="warning" text>Warning</vt-button>
      <vt-button type="danger" text>Danger</vt-button>
    </vt-row>

  </div>
</template>

<script setup>
import {
  computed, toRef, ref, getCurrentInstance
} from 'vue'

const show = ref(true)
const changeShow = () => {
  console.log(show.value)
  show.value = !show.value
}
</script>

<style lang="scss">
.example-showcase {
  .vt-row {
    margin-bottom: 20px;
    align-items: baseline;

    &:last-child {
      margin-bottom: 0;
    }
  }
  .vt-button + .vt-button {
    margin-left: 10px;
  }
  .vt-button-group {
    .vt-button + .vt-button {
      margin-left: 0;
    }

    & + .vt-button-group {
      margin-left: 10px;
    }
  }
}

</style>
