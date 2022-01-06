<script setup lang="ts">
import { computed, toRef, getCurrentInstance } from 'vue'
import { useClipboard } from '@vueuse/core'
import { useToggle } from '../toggle'
import { useLang } from '../lang'

// import { useSourceCode } from '../composables/source-code'
// import { usePlayGround } from '../composables/use-playground'
import demoBlockLocale from '../../i18n/component/demo-block.json'
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
    console.log(234, key)

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
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />
    <div class="example">
      <div class="op-btns">
        <!-- <ElTooltip :content="locale['edit-on-github']" :show-arrow="false">
          <ElIcon
            :size="20"
            class="op-btn github"
            style="color: var(--text-color-light)"
          >
            <a :href="demoSourceUrl" rel="noreferrer noopener" target="_blank">
              <i-ri-github-line />
            </a>
          </ElIcon>
        </ElTooltip>
        <ElTooltip :content="locale['copy-code']" :show-arrow="false">
          <ElIcon :size="20" class="op-btn" @click="copyCode">
            <i-ri-file-copy-2-line />
          </ElIcon>
        </ElTooltip>
        <ElTooltip :content="locale['view-source']" :show-arrow="false">
          <ElIcon :size="20" class="op-btn" @click="setSourceVisible">
            <i-ri-code-line />
          </ElIcon>
        </ElTooltip> -->
        <vt-button type="success" size="mini" plain @click="copyCode">复制</vt-button>
        <vt-button type="primary" size="mini" plain @click="setSourceVisible">代码</vt-button>
      </div>
      <div class="demo-hr"></div>
      <!-- <ElDivider class="m-0" /> -->
      <Example :file="path" :demo="formatPathDemos[path]" />
      <div class="demo-hr" v-if="sourceVisible"></div>
      <SourceCode v-show="sourceVisible" :source="source" />
      <!-- <ElDivider v-if="sourceVisible" />
      <el-collapse-transition>
        <SourceCode v-show="sourceVisible" :source="source" />
      </el-collapse-transition> -->
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.example {
  background: #fcfcfc;
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
