<template>
  <div class="example-showcase">

    <p>使用 link 链接按钮</p>

    <!-- 搭配朋克主题Style会导致color失效，解决：css中!important -->
    <vt-row>

      <vt-link type="primary">primary</vt-link><br />

      <vt-link type="warning">warning</vt-link><br /><br />

      <div>
        带 href 属性的链接<br />
        <vt-link href="https://element.eleme.io" target="_blank">default</vt-link>
      </div>
      <div>
        无下划线，设置 underline 为 false<br />
        <vt-link :underline="false" type="success">success</vt-link>
      </div>
      <div>
        禁用链接，设置 disabled 属性<br />
        <vt-link type="danger" disabled>danger</vt-link>
      </div>
      <div>
        图标链接，可以加入 icon 图标<br />
        <vt-link type="info">
          info
          <vt-icon name="eye"></vt-icon>
        </vt-link>
      </div>
    </vt-row>

  </div>
</template>

<style lang="scss" scoped>
  .example-showcase {
    div {
      display: block;
      margin-bottom: 20px;
    }
  }
</style>