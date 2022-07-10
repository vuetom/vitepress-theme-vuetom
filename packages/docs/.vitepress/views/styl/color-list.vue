<template>
  <div class="ex-colors">
    <vt-row :gutter="20">
      <vt-col
        v-for="(color, key) in computedColors"
        :key="key"
        :span="8"
      >
        <!-- <vt-card
          :bgcolor="key"
        >
          <span class="text-h6" v-text="key" />
        </vt-card>
        -->
        <vt-card
          v-for="(subColor, key2) in color"
          :key="key2"
          :class="key2"
          :bgcolor="subColor"
        >
          <span :class="getColorClass(key2)">
            <vt-row>
              <vt-col
                cols="8"
                class="text-caption"
              >
                <span v-if="key !== 'shades'">{{ key }}&nbsp;</span>
                <span v-if="key2 !== 'base'">{{ key2.replace(/(.*)(\d)/, '$1-$2') }}</span>
              </vt-col>
              <vt-col
                cols="4"
                class="text-right"
              >
                <span
                  v-if="subColor !== 'transparent'"
                  v-text="subColor.toUpperCase()"
                />
              </vt-col>
            </vt-row>
          </span>
        </vt-card>
      </vt-col>
    </vt-row>
  </div>
</template>

<script>
  import kebabCase from 'lodash/kebabCase'
  import colors from './color-list.js'

  export default {
    name: 'ColorList',

    data: () => ({
      colors,
      search: '',
    }),

    computed: {
      computedColors () {
        const colors = {}
        const search = this.search.toLowerCase()

        Object.keys(this.colors).forEach(key => {
          const kebabKey = kebabCase(key).toLowerCase()

          if (kebabKey.indexOf(search) > -1) {
            colors[kebabKey] = this.colors[key]
          }
        })

        return colors
      },
    },

    methods: {
      endStr (str) {
        return str[str.length - 1]
      },
      convertToClass (str) {
        const end = this.endStr(str)
        const sub = str.substr(0, str.length - 1)

        if (isNaN(parseInt(end))) return str

        return `${sub}-${end}`
      },
      getColorClass (key) {
        if (['white', 'transparent'].includes(key) ||
          key.indexOf('light') > -1 ||
          key.indexOf('accent') > -1
        ) return 'black--text'

        return 'white--text'
      },
    },
  }
</script>

<style scoped>
  .ex-colors div.base {
    font-size: 30px;
    font-weight: bold;
    color: white;
    height: 150px;
    margin-top: 50px;
  }
  .ex-colors {
    height: 200%;
  }
</style>