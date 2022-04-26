--- 
title: 快速使用
head:
  - - meta
    - name: description
      content: 教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: 开始使用
---

# {{ $frontmatter.title }}

请确保你已经用过 Vitepress 框架，因为主题是建立在框架的基础上使用的。

请确保你使用的 vue 版本是 3+ 哦。


## **1.** 脚手架初始化带有主题的项目模版

可以使用脚手架 vuetom-cli 脚手架来进行主题的初始化，会在你本地初始化一个项目，当然里面的 vitepress-theme-vuetom 可能不是最新的，当然你也可以手动更新下，或者直接拉取 [本网站](https://github.com/lauset/vitepress-theme-vuetom) 的代码进行修改也可以

1. 首先安装脚手架，NPM安装前请确保开启管理员身份运行保证有权限

```js light
npm i -g vuetom-cli
```

2. 查看是否安装成功，黑窗口运行一下命令，返回版本号 x.x.x 则表示安装成功
```js light
vuetom-cli -V
```

3. 新建个项目文件夹，也就是说在一个空目录进行下面的初始化操作

```js light
vuetom-cli init
```

1. 然后便会下载模版，下载完成后，执行以下命令安装以来并运行文档网站

```js light
npm i
npm run dev
```

::: warning
模版是从 github 上拉取的，可能有时候会有网速的困惑，也可手动前往拉取
https://github.com/lauset/vuetom-cli/tree/temp-docs
:::

<br/>

## **2.** 通过NPM方式下载安装主题

使用这个方式首先你要搭建一个 vitepress 项目，主题只是会覆盖默认样式而已，所以项目还是得搭起来的，可以前往下面 vitepress 官网链接查看并开始搭建

[vitepress搭建文档](https://vitepress.vuejs.org/guide/getting-started.html)

搭建完后最简单的样子就是项目目录里有个 index.md 文件，那么开始下一步

1. 安装主题依赖

使用 NPM 安装最新版本的 vitepress-theme-vuetom 主题依赖包，在你的 vitepress 项目下安装主题包，打开 `终端（DOS）` 输入

```js light
npm i -D vitepress-theme-vuetom
```

2. 开始引入主题
  
先在 .vitepress （这个文件夹和首页 index.md 是同级目录，没有的自己创建或者去 vitepress 官网看文档）中新建一个名为 theme 的文件夹，在该文件下新建一个 index.ts 文件，当然用 js 还是 ts 文件就看你自己项目的决定了。

大致内容如下:

`VuetomTheme` 是主要的主题布局

`VuetomUI` 是内置的UI组件

```javascript light
// .vitepress/theme/index.ts
import VuetomTheme, { VuetomUI } from 'vitepress-theme-vuetom' 

export default {
  ...VuetomTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(VuetomUI)
  }
}
```
引入了主题，然后你的 index.md 里写上一些内容应该就可以看出效果了

```html light
---
home: true
heroImage: /logo/vuetom-logo-m.png
heroAlt: LOGO
heroText: Vuetom
tagline: vitepress flat theme 

actionText: 快 速 开 始
actionLink: /zh-CN/guide/info

altActionText: 配 置
altActionLink: /zh-CN/guide/config

features:
  - title: 📦 优化的构建
    details: 可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建
  - title: 🔩 通用的插件
    details: 在开发和构建之间共享 Rollup-superset 插件接口。
  - title: 🔑 完全类型化的API
    details: 灵活的 API 和完整 TypeScript 类型。

footer: MIT Licensed
---

<div class="frontpage sponsors">
  <h2>{{ data.text }}</h2>
</div>

<script setup>
import { onMounted, reactive } from 'vue'
const data = reactive({
    text: '自定义内容'
})
onMounted(() => {
})
</script>

<style>
</style>
```

运行项目后，在 [localhost:3000] 中进入首页

至少到这里主题已经安装完成了，下一步就是主题的配置了，主题什么样还是要看你配的什么样子哦。
