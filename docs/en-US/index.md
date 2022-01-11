---
home: true
heroImage: /logo/vuetom-logo-m.png
heroAlt: VUETOM
heroText: Vuetom
tagline: vitepress flat theme
actionText: Quick Start
actionLink: /en-US/guide/info
altActionText: Inventory
altActionLink: /en-US/guide/
features:
  - 
    title: '📦 Optimized build'
    details: Optional multi-page application or library mode for Rollup build
  - 
    title: '🔩 Generic Plugins'
    details: Share Rollup-superset plugin interface between development and build.
  - 
    title: '🔑 Fully Typeized API'
    details: Flexible API and full TypeScript type.
footer: MIT Licensed
---

<div class="frontpage sponsors">
  <h2>Thanks</h2>
  <div class="platinum-sponsors">
    <a v-for="{ href, src, name, id } of sponsors.filter(s => s.tier === 'platinum')" :href="href" target="_blank" rel="noopener" aria-label="sponsor-img">
      <img :src="src" :alt="name" :id="`sponsor-${id}`">
      <p>{{ name }}</p>
    </a>
  </div>
  <div class="gold-sponsors">
    <a v-for="{ href, src, name, id } of sponsors.filter(s => s.tier !== 'platinum')" :href="href" target="_blank" rel="noopener" aria-label="sponsor-img">
      <img :src="src" :alt="name" :id="`sponsor-${id}`">
      <p>{{ name }}</p>
    </a>
  </div>
</div>


<script setup>
import { onMounted } from 'vue'

const sponsors = [
  {
    "id": "vue",
    "name": "Vue",
    "href": "https://v3.cn.vuejs.org/",
    "src": "https://v3.cn.vuejs.org/logo.png",
    "tier": "platinum"
  },
  {
    "id": "vite",
    "name": "Vite",
    "href": "https://vitejs.cn/",
    "src": "https://vitejs.cn/logo.svg"
  },
  {
    "id": "vitepress",
    "name": "Vitepress",
    "href": "https://fttp.jjf-tech.cn/vitepress/",
    "src": "https://v3.cn.vuejs.org/logo.png"
  },
  {
    "id": "elementplus",
    "name": "Element Plus",
    "href": "https://element-plus.gitee.io/zh-CN/",
    "src": "https://element-plus.gitee.io/images/element-plus-logo.svg"
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