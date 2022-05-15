<script setup lang="ts">
import { toRefs } from 'vue'
import { useNavLink } from '../../composables/navLink'
import OutboundLink from '../icons/OutboundLink.vue'
import { VtNavItemWithLink } from '../../types'
import VTIconGithub from '../icons/VTIconGithub.vue'

const props = defineProps<{
  item: VtNavItemWithLink,
  icon?: string
}>()
const propsRefs = toRefs(props)
const { props: linkProps, isExternal } = useNavLink(propsRefs.item)
</script>

<template>
  <div class="nav-link">
    <a class="item nav-a-link" v-bind="linkProps">
      <template v-if="icon == 'github'">
        <VTIconGithub />
      </template>
      <template v-else>
        {{ item.text }}
      </template>
      <OutboundLink v-if="isExternal && !icon" />
    </a>
  </div>
</template>

<style scoped>
.item {
  display: block;
  padding: 0 1.5rem;
  line-height: 36px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  white-space: nowrap;
}

.item:hover,
.item.active {
  text-decoration: none;
  color: var(--c-brand);
}

.item.external:hover {
  border-bottom-color: transparent;
  color: var(--c-brand);
}

.nav-a-link svg {
  position: relative;
  top: 3px;
  right: 3px;
  width: 20px;
  height: 20px;
  fill: var(--vt-c-text-1);
}

@media (min-width: 720px) {
  .item {
    border-bottom: 3px solid transparent;
    padding: 0 5px;
    line-height: 24px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .item:hover,
  .item.active {
    border-bottom-color: var(--c-brand);
    color: var(--c-brand);
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }
}
</style>
