<template>
  <ul class="demo-icon-list">
    <li
      v-for="(c,i) in iconList"
      class="icon-item"
      :key="i"
      @click="copyIcon(c)">
      <span class="demo-svg-icon">
        <vt-icon :name="c.font_class"></vt-icon>
        <span class="icon-name">{{ c.name }}</span>
        <span class="icon-class">vt-icon-{{ c.font_class }}</span>
      </span>
    </li>
  </ul>
</template>

<script>
import { defineComponent, ref } from 'vue'

// import { VTMessage } from '@lauset/vuetom-ui/src'
import clipboardCopy from 'clipboard-copy'
import ic from './icon-list'

export default defineComponent({
  setup() {
    const iconList = ref(ic.iconList)

    const copyIcon = async (svg) => {
      try {
        await clipboardCopy(
          `<vt-icon name="${svg.font_class}>"</vt-icon>`
        )

        VTMessage({
          showClose: true,
          message: '复制图标样式成功',
          type: 'success'
        })
      } catch (e) {
        VTMessage({
          showClose: true,
          message: '复制图标样式失败',
          type: 'error'
        })
      }
    }

    return {
      copyIcon,
      iconList
    }
  }
})
</script>

<style scoped lang="scss">
.demo-icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  border-top: 1px solid var(--el-border-color-base);
  border-left: 1px solid var(--el-border-color-base);
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  .icon-item {
    text-align: center;
    // color: #fff;
    border-radius: 5px;
    height: 150px;
    font-size: 13px;
    // border-right: 1px solid red;
    // border-bottom: 1px solid blue;
    // transition: background-color rgb(119, 7, 7);
    list-style: none;
    &:hover {
      background-color: rgba(36, 138, 163, 0.7);
      color: white;
    }

    .demo-svg-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      cursor: pointer;

      .icon-name {
        margin-top: 8px;
      }
    }
  }
}
</style>
