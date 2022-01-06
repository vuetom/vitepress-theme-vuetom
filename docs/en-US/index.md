---
home: true
heroImage: /logo/vuetom-logo-m.png
heroAlt: VUETOM
heroText: vitepress-theme-vuetom
tagline: vue3 扁平化风格 UI 框架

actionText: 点 击 开 始
actionLink: /en-US/guide/info

altActionText: 仓 库
altActionLink: /en-US/guide/

features:
  - title: 💡 极速的服务启动
    details: 使用原生 ESM 文件，无需打包!
  - title: ⚡️ 轻量快速的热重载
    details: 无论应用程序大小如何，都始终极快的模块热重载（HMR）
  - title: 🛠️ 丰富的功能
    details: 对 TypeScript、JSX、CSS 等支持开箱即用。
  - title: 📦 优化的构建
    details: 可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建
  - title: 🔩 通用的插件
    details: 在开发和构建之间共享 Rollup-superset 插件接口。
  - title: 🔑 完全类型化的API
    details: 灵活的 API 和完整 TypeScript 类型。

footer: MIT Licensed
---

<div class="frontpage sponsors">
  <h2>赞助</h2>
  <div class="platinum-sponsors">
    <a v-for="{ href, src, name, id } of sponsors.filter(s => s.tier === 'platinum')" :href="href" target="_blank" rel="noopener" aria-label="sponsor-img">
      <img :src="src" :alt="name" :id="`sponsor-${id}`">
    </a>
  </div>
  <div class="gold-sponsors">
    <a v-for="{ href, src, name, id } of sponsors.filter(s => s.tier !== 'platinum')" :href="href" target="_blank" rel="noopener" aria-label="sponsor-img">
      <img :src="src" :alt="name" :id="`sponsor-${id}`">
    </a>
  </div>
  <a href="https://github.com/sponsors/yyx990803" target="_blank" rel="noopener">在 GitHub 上赞助我们</a>
</div>


<script setup>
import { onMounted } from 'vue'

const sponsors = [
  {
    "id": "stackblitz",
    "name": "StackBlitz",
    "href": "https://stackblitz.com/",
    "src": "/stackblitz.svg",
    "tier": "platinum"
  },
  {
    "id": "tailwind",
    "name": "Tailwind Labs",
    "href": "https://tailwindcss.com",
    "src": "/tailwind-labs.svg"
  },
  {
    "id": "vuejobs",
    "name": "Vue Jobs",
    "href": "https://vuejobs.com/?ref=vuejs",
    "src": "/vuejobs.png"
  },
  {
    "id": "mux",
    "name": "Mux",
    "href": "https://mux.com",
    "src": "/mux.svg"
  }
]

function fetchReleaseTag() {
  onMounted(() => {
    fetch('https://api.github.com/repos/vitejs/docs-cn/releases/latest')
      .then((res) => res.json())
      .then((json) => {
        const mainTitle = document.getElementById('main-title')
        mainTitle.style.position = 'relative'

        const docsReleaseTag = document.createElement('span')
        docsReleaseTag.classList.add('release-tag')
        const releaseTagName = json.tag_name
        docsReleaseTag.innerText = releaseTagName

        if (releaseTagName !== undefined) {
          mainTitle.appendChild(docsReleaseTag)
        }
      })
  })
}

fetchReleaseTag()
</script>

<style>
.sponsors {
  padding: 0 1.5rem 2rem;
  font-size: 0.8rem;
}

.sponsors a {
  color: #999;
  margin: 1em;
  display: block;
}

.sponsors img {
  max-width: 160px;
  max-height: 40px;
}

.sponsors.frontpage {
  text-align: center;
}

.sponsors.frontpage img {
  display: inline-block;
  vertical-align: middle;
}

.sponsors.frontpage h2 {
  color: #999;
  font-size: 1.2rem;
  border: none;
}

.sponsors.sidebar a img {
  max-height: 36px;
}

.platinum-sponsors {
  margin-bottom: 1.5em;
}

.platinum-sponsors a img {
  max-width: 240px;
  max-height: 60px;
}

.gold-sponsors {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

/* special cases */
#sponsor-mux {
  padding: 5px 0;
  min-height: 36px;
}
</style>