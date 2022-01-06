<template>
  <transition name="vt-alert-fade">
    <div
      v-show="state.visible"
      :class="['vt-alert', typeClass, center ? 'is-center' : '', 'is-' + effect]"
      role="alert"
    >
      <i
        v-if="showIcon"
        :class="[iconClass, isBigIcon]"
        class="vt-alert__icon"
      ></i>
      <div class="vt-alert__content">
        <span
          v-if="title || $slots.title"
          :class="[isBoldTitle]"
          class="vt-alert__title"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p
          v-if="$slots.default && !description"
          class="vt-alert__description"
        >
          <slot></slot>
        </p>
        <p
          v-if="description && !$slots.default"
          class="vt-alert__description"
        >
          {{ description }}
        </p>
        <i
          v-show="closable"
          :class="{ 'is-customed': closeText !== '', 'vt-icon-close': closeText === '' }"
          class="vt-alert__closebtn"
          @click="close()"
        >{{ closeText }}</i>
      </div>
    </div>
  </transition>
</template>

<script>
import { reactive } from 'vue'
import { defineComponent } from 'vue'

const VtAlert = defineComponent({
  name: 'VtAlert',
  props: {
    /**
     * 	标题
     */
    title: {
      type: String,
      default: ''
    },

    /**
     * 辅助性文字。也可通过默认 slot 传入
     */
    description: {
      type: String,
      default: ''
    },

    /**
     * 	主题
     */
    type: {
      type: String,
      default: 'info'
    },

    /**
     * 是否可关闭
     */
    closable: {
      type: Boolean,
      default: true
    },

    /**
     * 关闭按钮自定义文本
     */
    closeText: {
      type: String,
      default: ''
    },

    /**
     * 是否显示图标
     */
    showIcon: Boolean,

    /**
     * 文字是否居中
     */
    center: Boolean,

    /**
     * 选择提供的主题
     */
    effect: {
      type: String,
      default: 'light',
      validator: function(value) {
        return ['light', 'dark'].indexOf(value) !== -1
      }
    }
  },
  emits: {
    close: null
  },
  setup(props, { emit }) {
    const state = reactive({ visible: true })
    let close = event => {
      state.visible = false
      emit('close', event)
    }
    
return {
      state,
      close
    }
  },
  computed: {
    typeClass() {
      return `vt-alert--${this.type}`
    },
    iconClass() {
      const types = {
        success: 'vt-icon-success',
        warning: 'vt-icon-warning',
        error: 'vt-icon-error'
      }
      
return types[this.type] || 'vt-icon-info'
    },

    isBigIcon() {
      return this.description || this.$slots.default ? 'is-big' : ''
    },

    isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : ''
    }
  }
})

export default VtAlert
</script>
