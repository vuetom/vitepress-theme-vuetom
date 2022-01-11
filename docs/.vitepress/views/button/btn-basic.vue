<template>
  <div class="example-showcase">

    <vt-row>
      <vt-button shadow>Default</vt-button>
      <vt-button type="primary" shadow>Primary</vt-button>
      <vt-button type="success" shadow>Success</vt-button>
      <vt-button type="info" shadow>Info</vt-button>
      <vt-button type="warning" shadow>Warning</vt-button>
      <vt-button type="danger" shadow>Danger</vt-button>
    </vt-row>

    <vt-row>
      <vt-button plain>Plain</vt-button>
      <vt-button type="primary" plain>Primary</vt-button>
      <vt-button type="success" plain>Success</vt-button>
      <vt-button type="info" plain>Info</vt-button>
      <vt-button type="warning" plain>Warning</vt-button>
      <vt-button type="danger" plain>Danger</vt-button>
    </vt-row>

    <vt-row>
      <vt-button type="primary" round>Primary</vt-button>
      <vt-button type="success" round>Success</vt-button>
      <vt-button type="info" round>Info</vt-button>
      <vt-button type="warning" round>Warning</vt-button>
      <vt-button type="danger" round>Danger</vt-button>
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
