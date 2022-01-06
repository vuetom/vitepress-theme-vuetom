<template>
  <div class="ex-div">

    <p>light 主题，默认主题</p>

    <vt-alert title="success alert" type="success" />
    <vt-alert title="info alert" type="info" />
    <vt-alert title="warning alert" type="warning" />
    <vt-alert title="error alert" type="error" />

    <p>dark 主题，添加属性 effect='dark' 即可</p>

    <vt-alert title="success alert" type="success" effect="dark" />
    <vt-alert title="info alert" type="info" effect="dark" />
    <vt-alert title="warning alert" type="warning" effect="dark" />
    <vt-alert title="error alert" type="error" effect="dark" />

  </div>
</template>

<style scoped>
  .ex-div .vt-alert{
    margin: 20px auto;
  }
</style>