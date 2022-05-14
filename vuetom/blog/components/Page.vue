<template>
  <main
    class="page">
    <div class="container">
      <slot name="top" />
      <Content class="content" />
      <slot name="bottom" />
    </div>
  </main>
</template>
