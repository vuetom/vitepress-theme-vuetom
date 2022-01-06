<template>
  <div class="example-showcase">

    <p>使用 button 图标和 i 图标</p>

    <vt-row>
      <vt-button type="primary" icon="vt-icon-edit"></vt-button>
      <vt-button type="danger" icon="vt-icon-delete"></vt-button>
      <vt-button type="primary">
        download <i class="vuetom-icon vt-icon-download"></i>
      </vt-button>
    </vt-row>

    <vt-row>
      <vt-button type="default" icon="vt-icon-mysql" circle></vt-button>
      <vt-button type="warning" icon="vt-icon-delete" circle></vt-button>
    </vt-row>

    <vt-row>
      <vt-icon name="heart"></vt-icon>
      <vt-icon name="heart-fill"></vt-icon>
    </vt-row>
    
    <h3>加载中</h3>

    <p>设置 loading 属性，接受一个 Boolean，当设置为 true 时即为加载中。</p>

    <vt-row>
      <vt-button type="primary" :loading="true">Loading</vt-button>
    </vt-row>

  </div>
</template>
      