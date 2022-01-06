# 什么是 vitepress-theme-vuetom

是的，是一款主题，因 vitepress 而诞生。建立在 Vue3 与 Vite 之上的一款主题。含有 `文档` 与 `博客` 两种风格的主题模板。其推出目的是为了让大家体验并使用到 vitepress 的不同主题，进而可以展示出优美的扁平化界面效果。

## 有什么特点

使用现代扁平化的设计风格，并且接近于 macos 界面风格

该UI框架使用了以下相关技术

- [nodejs](http://nodejs.cn/)
- [git](https://git-scm.com/)
- [webpack](https://webpack.docschina.org/)
- [react](https://react.docschina.org/),[react-router-cache-route](https://github.com/CJY0208/react-router-cache-route),[redux](https://www.redux.org.cn/)
- [axios](http://www.axios-js.com/)

包含了各式各样的功能模块

**内置UI组件:** 扁平化数据组织，方便编写。含有按钮，弹框，卡片等基础组件

**样式与动画:** 主要包含布局，间距，排版，颜色，边框

**API与指令:** 可搭配组件使用，实现不同组件不同指令效果

## 优化

使用了[@loadable/component](https://loadable-components.com/docs/getting-started/)插件，对页面,组件进行懒加载，解决了首次打开页面加载过慢问题。

```js
// 页面
import loadable from "@loadable/component";

const PageErr = loadable(() => import("@pages/err"));

// 过大的组件
const FreeDnd = loadable(() => import("@/components/dnd/free"));
```

路由自动化:使用了[webpack-router-generator](https://www.npmjs.com/package/webpack-router-generator)来直接在定义页面里定义路由信息。

```js
// ./src/pages/test.js
export default function Test(props) {
  return (
    <div>
      Hello world!
      {props.msg}
    </div>
  );
}

Test.route = { title: "测试", path: "/test", key: "test" };
// or
export const route = { title: "测试", path: "/test", key: "test" };
```
