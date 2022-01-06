<template>
  <div class="example-showcase">

    <p>该组件包括 header 和 body 部分，header 可以忽略。</p>

    <vt-card :header="'标题'">
      内容
    </vt-card>

    <p>header 内容可以取决于一个命名的slot。</p>

    <vt-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>新闻</span>
          <vt-button size="mini" type="primary" text>详 情</vt-button>
        </div>
      </template>
      <div v-for="o in 3" :key="o" class="text item">{{ '内容 ' + o }}</div>
    </vt-card>

    <p>shadow 属性设置阴影如何出现。 值有：always、hover或never。</p>

    <vt-row :gutter="12">
      <vt-col :span="8">
        <vt-card shadow="always"> Always </vt-card>
      </vt-col>
      <vt-col :span="8">
        <vt-card shadow="hover"> Hover </vt-card>
      </vt-col>
      <vt-col :span="8">
        <vt-card shadow="never" bgcolor="pink"> Never </vt-card>
      </vt-col>
    </vt-row>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.example-showcase {

  p {
    margin-top: 30px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 360px;
  }
}
</style>