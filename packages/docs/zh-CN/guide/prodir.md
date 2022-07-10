--- 
title: 框架目录
head:
  - - meta
    - name: description
      content: Vuetom 主题目录结构
  - - meta
    - name: keywords
      content: project dir.
---

# 主题目录

在使用一个框架，其实也要简单了解下该框架的项目文件结构，请向下看吧。

```bash
vuetom
  ├─ blog              博客主题Vue组件      文件夹
  ├─ core              共用核心Vue组件      文件夹
  ├─ doc               新版文档，适配vp1.x  文件夹 
  ├─ docs              旧版文档主题组件      文件夹
  │   ├─ components        主题Vue组件      文件夹
  │   ├─ composables       组件脚本         文件夹
  │   ├─ layouts           布局组件         文件夹
  │   └─ index.ts          主题入口         文件 
  ├─ icons             共用图标Vue组件       文件夹
  ├─ styles            全局SCSS样式         文件夹
  ├─ support           供支持脚本           文件夹
  ├─ types             规范描述             文件夹
  ├─ constant.ts       常量定义             文件
  └─ index.ts          主题入口文件          文件
```

接下来介绍本文档**docs**文件夹

```bash
docs
  ├─ .vitepress
  │   └─ config.ts   主题主要配置文件
  │ 
  ├─ public          静态资源文件
  │ 
  ├─ zh-CN           中文页面
  │    ├─ feedback   留言反馈
  │    ├─ guide      指引
  │    ├─ mdshow     Markdown示例
  │    ├─ menu       UI组件
  │    ├─ styl       主题与样式
  │    └─ index.md   中文首页
  │ 
  ├─ crowdin.yml      多国语言配置
  ├─ index.md         项目首页
  ├─ CHANGELOG.md     更新日志
  ├─ package.json     包配置
  ├─ README.md        项目说明
  ├─ tsconfig.json    ts配置
  └─ vite.config.ts   vite配置
```
