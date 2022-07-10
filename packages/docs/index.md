<script setup>
if (typeof window !== 'undefined') {
  const preferredLang = localStorage.getItem('vuetom_lang') || 'zh-CN'
  location.pathname = `/vt/zh-CN/`
}
</script>