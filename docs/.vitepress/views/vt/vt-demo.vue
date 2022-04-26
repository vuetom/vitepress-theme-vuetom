<script setup lang="ts">
import { computed, toRef, getCurrentInstance } from 'vue'
import { useClipboard } from '@vueuse/core'
import { useToggle } from '../common/toggle'
import { useLang } from '../common/lang'

// import { useSourceCode } from '../composables/source-code'
// import { usePlayGround } from '../composables/use-playground'
import demoBlockLocale from '../../i18n/views/demo-block.json'
import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'

const props = defineProps<{
  source: string
  path: string
  css?: string
  cssPreProcessor?: string
  js?: string
  html?: string
  demos: object
  rawSource: string
  description?: string
}>()
const vm = getCurrentInstance()!
const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false
})

const [sourceVisible, setSourceVisible] = useToggle()
const lang = useLang()

// const demoSourceUrl = useSourceCode(toRef(props, 'path'))
const formatPathDemos = computed(() => {
  const demos = {}
  console.log(123, props.demos)

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('../../.vitepress/views/', '').replace('.vue', '')] = props.demos[key].default
  })

  return demos
})
const locale = computed(() => demoBlockLocale[lang.value])
const decodedDescription = computed(() => decodeURIComponent(props.description!))

// const onPlaygroundClicked = () => {
//   const { link } = usePlayGround(props.rawSource)
//   window.open(link)
// }
const copyCode = async () => {
  const { $message } = vm.appContext.config.globalProperties
  if (!isSupported) {
    $message.error(locale.value['copy-error'])
  }
  try {
    await copy()
    $message.success(locale.value['copy-success'])
  } catch (e: any) {
    $message.error(e.message)
  }
}
</script>

<template>
  <ClientOnly>
    <p text="sm" v-html="decodedDescription" />
    <div class="example">
      <div class="op-btns">
        <vt-button type="success" size="mini" plain @click="copyCode">
          {{ locale['copy-code'] }}
        </vt-button>
        <vt-button type="primary" size="mini" plain @click="setSourceVisible">
          {{ locale['view-source'] }}
        </vt-button>
      </div>
      <div class="demo-hr"></div>
      <Example :file="path" :demo="formatPathDemos[path]" />
      <div class="demo-hr" v-if="sourceVisible"></div>
      <transition name="code-slide-fade">
        <SourceCode v-show="sourceVisible" :source="source" />
      </transition>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.code-slide-fade-enter-active {
  transition: all .6s ease;
}
.code-slide-fade-leave-active {
  transition: all .3 cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.code-slide-fade-enter-from, .code-slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
.example {
  // background: #fcfcfc;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  .demo-hr {
    border: 1px solid #dcdfe6;
    height: 1px;
  }
  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 3rem;
    line-height: 3rem;
    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }
    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;
      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);
        &:hover {
          color: var(--text-color);
        }
      }
    }
  }
}
</style>
