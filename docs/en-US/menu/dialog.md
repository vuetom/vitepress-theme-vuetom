---
title: 弹框 Dialog
head:
  - - meta
    - name: description
      content: 来弹个框
  - - meta
    - name: keywords
      content: dialog tips
---

# 弹框 Dialog

模态弹框，可用于提示操作或者承载一些其他操作

## 基础用法

<!-- <ClientOnly>
  <DialogBasic />
</ClientOnly> -->

```js code
<template>
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
```

::: tip
尽可能使用按钮关闭弹出层
:::
