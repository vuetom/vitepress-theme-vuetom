---
title: 'Vuetom Theme'
lang: en-US
page: true
---

<script setup>

if (typeof window !== 'undefined') {
  const preferredLang = localStorage.getItem('vuetom_lang') || 'zh-CN'
  window.location.pathname = `/${preferredLang}/`
}

</script>
