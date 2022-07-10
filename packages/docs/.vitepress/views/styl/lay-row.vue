<template>
  <div class="example-showcase">

    <p>使用 vt-row 与 vt-col 完成简单布局</p>

    <vt-row>
      <vt-col :span="24">
        <div class="div-content bg-pink">
          If you miss the train I'm on
        </div>
      </vt-col>
    </vt-row>
    <vt-row>
      <vt-col :span="12">
        <div class="div-content bg-pink">
          You will know that I am gone
        </div>
      </vt-col>
      <vt-col :span="12">
        <div class="div-content bg-green">
          You can hear the whistle blow a hundred miles
        </div>
        </vt-col>
    </vt-row>
    <vt-row>
      <vt-col :span="8">
        <div class="div-content bg-pink">
          A hundred miles, a hundred miles
        </div>
      </vt-col>
      <vt-col :span="8"><div class="div-content bg-green">
          A hundred miles, a hundred miles
        </div>
      </vt-col>
      <vt-col :span="8">
        <div class="div-content bg-pink">
          You can hear the whistle blow A hundred miles
        </div>
      </vt-col>
    </vt-row>
    <vt-row :gutter="20">
      <vt-col :span="6"><div class="div-content bg-pink">Lord, I'm one</div></vt-col>
      <vt-col :span="6"><div class="div-content bg-green">Lord, I'm two</div></vt-col>
      <vt-col :span="6"><div class="div-content bg-pink">Lord, I'm three</div></vt-col>
      <vt-col :span="6"><div class="div-content bg-green">Lord, I'm four</div></vt-col>
    </vt-row>

    <p>可设置 offset 完成列的偏移</p>

    <vt-row :gutter="0">
      <vt-col :span="6">
        <div class="div-content bg-pink"></div>
      </vt-col>
      <vt-col :span="6" :offset="6">
        <div class="div-content bg-pink"></div>
      </vt-col>
    </vt-row>

    <p>可设置响应式布局 xs、sm、md、lg、xl</p>

    <vt-row :gutter="10">
      <vt-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="div-content bg-pink"></div
      ></vt-col>
      <vt-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="div-content bg-green"></div
      ></vt-col>
      <vt-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="div-content bg-pink"></div
      ></vt-col>
      <vt-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="div-content bg-green"></div
      ></vt-col>
    </vt-row>

  </div>
</template>

<style lang="scss" scoped>
  .example-showcase {
    .vt-row {
      background: rgb(125, 209, 248);
      border-radius: 4px;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .vt-col {
      border-radius: 4px;
    }
    .bg-pink {
      background: #fabdd4;
    }
    .bg-green {
      background: rgb(182, 243, 190);
    }
    .div-content {
      border-radius: 4px;
      min-height: 40px;
      line-height: 40px;
      text-align: center;
      font-weight: bold;
      font-size: 13px;
      color: gray;
    }
  }
</style>