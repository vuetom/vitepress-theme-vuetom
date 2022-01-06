<template>

  <p>
    需要设置 visible 属性，当为 true 时显示 Dialog。 
    Dialog 分为两个部分：body 和 footer，footer 需要具名为 footer 的 slot。 
    title 属性用于定义标题，它是可选的，默认值为空。 
  </p>
  
  <!-- <el-button type="text" @click="dialogVisible = true"
    >click to open the Dialog</el-button
  >

  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog> -->

  <vt-button type="danger" plain @click="dialogVisible = true"
    >弹个框</vt-button
  >
  <vt-dialog
    :visible="dialogVisible"
    title="提示"
    width="30%"
    :before-close="handleClose"
  >
    <span>是否彻底删除数据库？</span>
    <template #footer>
      <span class="dialog-footer">
        <vt-button 
          size="macos" 
          @click="dialogVisible = false"
        >关闭</vt-button>
        <vt-button 
          size="macos" 
          type="primary" 
          @click="dialogVisible = false"
        >确定</vt-button
      >
      </span>
    </template>
  </vt-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const dialogVisible = ref(false)

    const handleClose = (done) => {
      console.log(done)
      
      dialogVisible.value = false
      // confirm('Are you sure to close this dialog?')
      //   .then(() => {
      //     done()
      //   })
      //   .catch(() => {
      //     // catch error
      //   })
    }
    return {
      dialogVisible,
      handleClose,
    }
  },
})
</script>