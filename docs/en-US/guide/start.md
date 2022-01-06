--- 
title: 开始使用 VuetomUI
head:
  - - meta
    - name: description
      content: react-ant-admin 开始使用，详细讲解此框架的文件部署，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: react react-ant react-admin react-ant-admin 开始使用
---
# 开始使用

请确保 vue 版本为3.0，那么让我们快速体验一下吧


## **1.** 安装所需依赖

在需要安装的文件夹下，打开 DOS 窗口(cmd)，输入以下命令

```shell
npm install @lauset/vuetom-ui --save
```


## **2.** 在 main.js 中引用

全局引入UI组件和样式文件

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import '@lauset/vuetom-ui/lib/vuetom-theme/index.css'
import VuetomUI from '@lauset/vuetom-ui'

createApp(App)
  .use(VuetomUI)
  .mount('#app')
```

## **3.** 启动项目

在所需界面使用组件后，启动项目查看效果吧

- npm run dev


## 推荐开发工具

使用[vscode编辑器](https://code.visualstudio.com/)[下载地址](https://blog.csdn.net/bielaiwuyang1999/article/details/117814237)
