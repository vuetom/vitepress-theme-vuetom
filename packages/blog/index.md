---
title: 欢迎
layout: home
---

# {{ $frontmatter.title }}

<script setup>

import { useData } from 'vitepress'
const d = useData()
console.log(d)

</script>