--- 
title: 框架目录
head:
  - - meta
    - name: description
      content: VuetomUI 框架目录结构
  - - meta
    - name: keywords
      content: project dir.
---

# 主题目录

在使用一个框架，其实也要简单了解下该框架的项目文件结构，请向下看吧。

```bash
.
├─ build             webpack配置信息   文件夹
├─ docs              项目文档          文件夹
├─ lib               打包的样式与JS     文件夹
├─ packages          组件大全          文件夹
├─ src               入口与工具类       文件夹
├─ types             d.ts规范描述      文件夹
├─ .eslintrc         ESlint配置       文件
├─ .gitignore        git忽略配置       文件
├─ .prettierrc       代码格式化配置     文件
├─ LICENSE           项目开源协议       文件
├─ README.md         使用文档          文件
└─ package.json      管理文件          文件
```

接下来主要介绍**src**文件夹

```bash
src
 ├─ api
 │   └─ index.js    网络API接口文件
 │ 
 ├─ asset           静态文件资源
 │ 
 ├─ common          配置信息
 │    ├─ index.js   主要信息配置文件
 │    └─ ajax.js    网络请求库配置文件
 │ 
 ├─ components      自定义组件库
 │ 
 ├─ layout          项目页面布局
 │    ├─ mode       布局模式文件夹
 │    ├─ footer.js  项目页面底部布局
 │    ├─ header.js  项目页面头部布局
 │    ├─ index.js   项目页面主题布局
 │    ├─ index.less 布局样式
 │    ├─ siderMenu.js 项目页面侧边栏菜单布局
 │    └─ topMenu.js  项目页面顶部栏菜单布局
 │ 
 ├─ mock
 │   └─ index.js    本地模拟数据文件
 │ 
 ├─ pages           项目页面文件夹
 │ 
 ├─ router             项目路由文件夹
 │    ├─ appRouter.js  项目App主要路由
 │    ├─ index.js      项目页面信息，菜单信息组成渲染
 │    ├─ intercept.js  路由权限拦截文件
 │    └─ list.js       页面路由列表
 │  
 ├─ store           redux全局数据管理
 │    ├─ layout     关于布局模式
 │    ├─ menu       关于菜单
 │    ├─ user       关于用户
 │    ├─ visibel    关于用户显示
 │    └─ index.js   入口文件
 │  
 ├─ utils           工具库
 ├─ App.js          项目渲染主入口
 ├─ index.js        项目启动主入口
 └─ setupProxy.js   跨域转发配置文件
```

## 开发进度

| 功能组件 | 开发进度                                      | 预估   |
| --------- | ------------------------------------------------ | ------ |
| 表格（Table） | 待开发（0%） | 10月 完成 |  
| 选项卡（Tab） | 待开发（0%） | 10月 完成 |
| 时间轴（TimeLine） | 待开发（0%） | 11月 |
| 树形菜单（TreeMenu）| 待开发（0%） | 11月 |
| 列表（List） | 待开发（0%） | 11月 |
| 菜单（Meni） | 待开发（0%） | 11月 |
