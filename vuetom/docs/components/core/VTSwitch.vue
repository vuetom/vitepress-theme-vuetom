<template>
  <button class="vt-switch" type="button" role="switch">
    <span class="vt-switch-check">
      <span class="vt-switch-icon" v-if="$slots.default">
        <slot />
      </span>
    </span>
  </button>
</template>

<style scoped>
.vt-switch {
  position: relative;
  border-radius: 11px;
  display: block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid var(--vt-c-divider);
  background-color: var(--vt-c-bg-mute);
  transition: border-color 0.25s, background-color 0.25s;
}

.vt-switch:hover {
  border-color: var(--vt-c-gray);
}

.vt-switch-check {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--vt-c-white);
  box-shadow: var(--vt-shadow-1);
  transition: background-color 0.25s, transform 0.25s;
}

.dark .vt-switch-check {
  background-color: var(--vt-c-black);
}

.vt-switch-icon {
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  overflow: hidden;
}

.dark .vt-switch-check {
  transform: translateX(18px);
}
</style>
