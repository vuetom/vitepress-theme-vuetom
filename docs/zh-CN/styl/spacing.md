---
title: 间距 spacing
head:
  - - meta
    - name: description
      content: 间距
    - name: keywords
      content: spacing
---

# 间距

<ClientOnly>
  <LayRow />
</ClientOnly>


<br />


**JS 代码**

- 粉色背景色：bg-pink

- 浅绿色背景色：bg-green

- 浅蓝色背景色：vt-row 的背景色


```js code
<vt-row>
  <vt-col :span="24"><div class="div-content bg-pink"></div></vt-col>
</vt-row>

<vt-row>
  <vt-col :span="12"><div class="div-content bg-pink"></div></vt-col>
  <vt-col :span="12"><div class="div-content bg-green"></div></vt-col>
</vt-row>

<vt-row>
  <vt-col :span="8"><div class="div-content bg-pink"></div></vt-col>
  <vt-col :span="8"><div class="div-content bg-green"></div></vt-col>
  <vt-col :span="8"><div class="div-content bg-pink"></div></vt-col>
</vt-row>

<vt-row :gutter="20">
  <vt-col :span="6"><div class="div-content bg-pink">Lord, I'm one</div></vt-col>
  <vt-col :span="6"><div class="div-content bg-green">Lord, I'm two</div></vt-col>
  <vt-col :span="6"><div class="div-content bg-pink">Lord, I'm three</div></vt-col>
  <vt-col :span="6"><div class="div-content bg-green">Lord, I'm four</div></vt-col>
</vt-row>

<vt-row :gutter="0">
  <vt-col :span="6"><div class="div-content bg-pink"></div></vt-col>
  <vt-col :span="6" :offset="6">
    <div class="div-content bg-pink"></div>
  </vt-col>
</vt-row>

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
```

**CSS 样式**

```js code
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
```