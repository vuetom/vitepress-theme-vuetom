<template>
  <div class="example-showcase">

    <vt-row>
      <vt-button disabled>Default</vt-button>
      <vt-button type="primary" disabled>Primary</vt-button>
      <vt-button type="success" disabled>Success</vt-button>
      <vt-button type="info" disabled>Info</vt-button>
      <vt-button type="warning" disabled>Warning</vt-button>
      <vt-button type="danger" disabled>Danger</vt-button>
    </vt-row>

    <vt-row>
      <vt-button plain disabled>Plain</vt-button>
      <vt-button type="primary" plain disabled>Primary</vt-button>
      <vt-button type="success" plain disabled>Success</vt-button>
      <vt-button type="info" plain disabled>Info</vt-button>
      <vt-button type="warning" plain disabled>Warning</vt-button>
      <vt-button type="danger" plain disabled>Danger</vt-button>
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
