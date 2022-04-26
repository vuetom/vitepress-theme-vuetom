<template>
  <button
    class="vt-button"
    ref="vtButton"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'vt-button--' + type : '',
      buttonSize ? 'vt-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-shadows': shadow,
        'is-text': text,
      }
    ]"
  >
    <i class="vt-icon-loading" v-if="loading"></i>
    <i :class="['vuetom-icon ',icon]" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>

// import { getInject } from '../../form/src/formInject';
import { ref } from 'vue'

function initRef() {
  const vtButton = ref(null)

  return {
    vtButton
  }
}
const VtButton = {
  name: 'VtButton',
  props: {
    /**
     * 按钮类型:
     * primary
     * success
     * warning
     * danger
     * info
     * default (默认值)
     */
    type: {
      type: String,
      default: 'default'
    },

    /**
     * 按钮大小:
     * large (默认值)
     * medium
     * small
     * mini
     */
    size: {
      type: String,
      default: 'large'
    },

    /**
     * 按钮图标，接受元素图标组件的图标名称
     */
    icon: String,

    /**
     * HTML Button 元素的 type
     * submit
     * reset
     * button (默认值)
     * menu
     */
    nativeType: {
      type: String,
      default: 'button'
    },

    /**
     * 确定它是否正在加载，默认为 false
     */
    loading: Boolean,

    /**
     * 是否禁用按钮，默认为 false
     */
    disabled: Boolean,

    /**
     * 确定它是否是一个普通按钮
     */
    plain: Boolean,

    /**
     * HTML Button 元素的 Autofocus，使按钮自动获取焦点，默认为 false
     */
    autofocus: Boolean,

    /**
     * 确定它是否一个圆角按钮
     */
    round: Boolean,

    /**
     * 是否显示圆形按钮，默认为 false
     */
    circle: Boolean,

    /**
     * 是否有阴影
     */
    shadow: Boolean,

    /**
     * 是否显示文字按钮，默认为 false
     */
    text: Boolean
  },
  emits: {
    click: null
  },
  setup(props, context) {
    return {
      ...initRef()

      // ...getInject()
    }
  },
  mounted() {
    if (this.circle) {
      this.vtButton.style.height = `${this.vtButton.offsetWidth}px`
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  },
  computed: {
    _alFormItemSize() {
      return (this.alFormItem || {}).alFormItemSize
    },
    buttonSize() {
      return this.size || this._alFormItemSize || (window.VuetomUI.$ELEMENT || {}).size
    },
    buttonDisabled() {
      return this.disabled || (this.alForm || {}).disabled
    }
  }
}

export default VtButton
</script>
