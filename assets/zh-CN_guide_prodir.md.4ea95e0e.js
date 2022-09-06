import{_ as s,o as n,c as a,g as p}from"./app.7b65c7ad.js";const D=JSON.parse('{"title":"\u6846\u67B6\u76EE\u5F55","description":"Vuetom \u4E3B\u9898\u76EE\u5F55\u7ED3\u6784","frontmatter":{"title":"\u6846\u67B6\u76EE\u5F55","head":[["meta",{"name":"description","content":"Vuetom \u4E3B\u9898\u76EE\u5F55\u7ED3\u6784"}],["meta",{"name":"keywords","content":"project dir."}]]},"headers":[],"relativePath":"zh-CN/guide/prodir.md"}'),l={name:"zh-CN/guide/prodir.md"},e=p(`<h1 id="\u4E3B\u9898\u76EE\u5F55" tabindex="-1">\u4E3B\u9898\u76EE\u5F55 <a class="header-anchor" href="#\u4E3B\u9898\u76EE\u5F55" aria-hidden="true">#</a></h1><p>\u5728\u4F7F\u7528\u4E00\u4E2A\u6846\u67B6\uFF0C\u5176\u5B9E\u4E5F\u8981\u7B80\u5355\u4E86\u89E3\u4E0B\u8BE5\u6846\u67B6\u7684\u9879\u76EE\u6587\u4EF6\u7ED3\u6784\uFF0C\u8BF7\u5411\u4E0B\u770B\u5427\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">vuetom</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 blog              \u535A\u5BA2\u4E3B\u9898Vue\u7EC4\u4EF6      \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 doc               \u65B0\u7248\u6587\u6863\uFF0C\u9002\u914Dvp1.x  \u6587\u4EF6\u5939 </span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 docs              \u65E7\u7248\u6587\u6863\u4E3B\u9898\u7EC4\u4EF6      \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u251C\u2500 components        \u4E3B\u9898Vue\u7EC4\u4EF6      \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u251C\u2500 composables       \u7EC4\u4EF6\u811A\u672C         \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u251C\u2500 layouts           \u5E03\u5C40\u7EC4\u4EF6         \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u2514\u2500 index.ts          \u4E3B\u9898\u5165\u53E3         \u6587\u4EF6 </span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 icons             \u5171\u7528\u56FE\u6807Vue\u7EC4\u4EF6       \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 styles            \u5168\u5C40SCSS\u6837\u5F0F         \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 support           \u4F9B\u652F\u6301\u811A\u672C           \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 types             \u89C4\u8303\u63CF\u8FF0             \u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 constant.ts       \u5E38\u91CF\u5B9A\u4E49             \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2514\u2500 index.ts          \u4E3B\u9898\u5165\u53E3\u6587\u4EF6          \u6587\u4EF6</span></span>
<span class="line"></span></code></pre></div><p>\u63A5\u4E0B\u6765\u4ECB\u7ECD\u672C\u6587\u6863<strong>docs</strong>\u6587\u4EF6\u5939</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docs</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502   \u2514\u2500 config.ts   \u4E3B\u9898\u4E3B\u8981\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502 </span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 public          \u9759\u6001\u8D44\u6E90\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502 </span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 zh-CN           \u4E2D\u6587\u9875\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502    \u251C\u2500 feedback   \u7559\u8A00\u53CD\u9988</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502    \u251C\u2500 guide      \u6307\u5F15</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502    \u251C\u2500 mdshow     Markdown\u793A\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502    \u251C\u2500 menu       UI\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502    \u251C\u2500 styl       \u4E3B\u9898\u4E0E\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502    \u2514\u2500 index.md   \u4E2D\u6587\u9996\u9875</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2502 </span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 crowdin.yml      \u591A\u56FD\u8BED\u8A00\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 index.md         \u9879\u76EE\u9996\u9875</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 CHANGELOG.md     \u66F4\u65B0\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 package.json     \u5305\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 README.md        \u9879\u76EE\u8BF4\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u251C\u2500 tsconfig.json    ts\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u2514\u2500 vite.config.ts   vite\u914D\u7F6E</span></span>
<span class="line"></span></code></pre></div>`,5),o=[e];function c(t,i,r,C,A,d){return n(),a("div",null,o)}const _=s(l,[["render",c]]);export{D as __pageData,_ as default};
