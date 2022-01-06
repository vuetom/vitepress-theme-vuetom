<template>
  <div class="example-showcase">

    <vt-button shadow>Default</vt-button>
    <vt-button type="primary" shadow>Primary</vt-button>
    <vt-button type="success" shadow>Success</vt-button>
    <vt-button type="info" shadow>Info</vt-button>
    <vt-button type="warning" shadow>Warning</vt-button>
    <vt-button type="danger" shadow>Danger</vt-button>

 <!--   <vt-row>
      <vt-button plain>Plain</vt-button>
      <vt-button type="primary" plain>Primary</vt-button>
      <vt-button type="success" plain>Success</vt-button>
      <vt-button type="info" plain>Info</vt-button>
      <vt-button type="warning" plain>Warning</vt-button>
      <vt-button type="danger" plain>Danger</vt-button>
    </vt-row>

    <vt-row>
      <vt-button round>Round</vt-button>
      <vt-button type="primary" round>Primary</vt-button>
      <vt-button type="success" round>Success</vt-button>
      <vt-button type="info" round>Info</vt-button>
      <vt-button type="warning" round>Warning</vt-button>
      <vt-button type="danger" round>Danger</vt-button>
    </vt-row>

    <h3>文字按钮</h3>

    <p>加上 text 属性能让按钮变成文字按钮。</p>

    <vt-row>
      <vt-button text>Plain</vt-button>
      <vt-button type="primary" text>Primary</vt-button>
      <vt-button type="success" text>Success</vt-button>
      <vt-button type="info" text>Info</vt-button>
      <vt-button type="warning" text>Warning</vt-button>
      <vt-button type="danger" text>Danger</vt-button>
    </vt-row>

    <h3>禁用按钮</h3>

    <p>你可以使用 disabled 属性来定义按钮是否被禁用。</p>

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
    </vt-row> -->

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
