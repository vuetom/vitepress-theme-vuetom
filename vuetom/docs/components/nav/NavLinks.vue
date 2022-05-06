<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useLang } from '../../../support/lang'
import { useLanguageLinks } from '../../composables/nav'
import { useRepo } from '../../composables/repo'
import NavLink from './NavLink.vue'
import NavDropdownLink from './NavDropdownLink.vue'

const { theme } = useData()
const lang = useLang()
const localeLinks = useLanguageLinks()
const repo = useRepo()
const show = computed(() => theme.value.nav || repo.value || localeLinks.value)
const navs = computed(() => theme.value.nav[lang.value])
</script>

<template>
  <nav v-if="show" class="nav-links">
    <!-- nav link-->
    <template v-if="navs">
      <div v-for="item in navs" :key="item.text" class="item">
        <NavDropdownLink v-if="item.items" :item="item" />
        <NavLink v-else :item="item" />
      </div>
    </template>
    <!-- language dropdown link -->
    <div v-if="localeLinks" class="item">
      <NavDropdownLink :item="localeLinks" :lang-val="lang" :lang="true" />
    </div>
    <!-- git url -->
    <div v-if="repo" class="item">
      <NavLink :item="repo" icon="github"/>
    </div>
  </nav>
</template>

<style scoped>
.nav-links {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--c-divider);
}

@media (min-width: 720px) {
  .nav-links {
    display: flex;
    padding: 6px 0 0;
    align-items: center;
    border-bottom: 0;
    color: var(--vt-c-text-1);
    transition: color 0.5s;
  }

  .item + .item {
    padding-left: 24px;
  }
}
</style>
