<template>
  <div class="box" :style="{}" :class="getExtBoxClasses()">
    <div class="box-center">
      <div class="box-center-left"></div>
      <div class="box-center-center loader">
        <div class="app-bar" :style="{ backgroundColor: '#fff' }">
          <div class="controll">
            <div class="close"></div>
            <div class="min"></div>
            <div class="full"></div>
          </div>
          <div class="title" :style="{ color: '#000' }">标题</div>
        </div>
        <div class="app-body">
          <div class="feedback-container">
            <div class="row">
              <input
                class="txt"
                type="text"
                v-model="email"
                placeholder="邮箱"
              />
            </div>
            <textarea
              class="txt"
              v-model="txt"
              cols="30"
              rows="3"
              placeholder="留言内容"
            ></textarea>
            <div class="btns row">
              <button class="btn" @click="goFeeback">留言</button>
              <button class="rest btn" @click="reset">重置</button>
            </div>
            <h3 class="row">留言列表</h3>
            <ul>
              <li v-for="item in list" :key="item.fd_id">
                <div class="title">
                  来自-{{ item.f_address || '未知地区' }}
                  <span>{{ item.time }}</span>
                </div>
                <div class="content" v-text="item.f_context"></div>
                <div
                  class="replay"
                  v-text="item.f_back"
                  v-if="item.f_back"
                ></div>
              </li>
            </ul>
            <div class="nolist" v-if="list.length === 0">暂无留言~</div>
            <button class="more btn" @click="getList" :disabled="isDown">
              加载更多
            </button>
          </div>
        </div>
      </div>
      <div class="box-center-right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

// import { ElMessage } from "element-plus";
// import "element-plus/lib/theme-chalk/el-message.css";
// import "element-plus/lib/theme-chalk/el-icon.css";

const postUrl = ''
const getListUrl = ''
const isBoxResizing = ref(false)
const isMaxShowing = ref(false)
const isFullScreen = ref(false)
const txt = ref('')
const email = ref('')
const page = ref(1)
const pagesize = ref(10)
const isDown = ref(false)
const list = ref([])
const reset = () => {
  txt.value = ''
  email.value = ''
}
const goFeeback = () => {
  if (!txt.value || !email.value) {
    alert("你还未填写内容");
    return null
  }
  axios
    .post(postUrl, { text: txt.value.trim(), email: email.value })
    .then((res) => {
      const { status, msg } = res.data
      if (status === 0) {
        alert('留言成功！')
        reset()
      }
      console.log(msg);
    })
    .catch((err) => {
      console.log(err)
    })
}

const getExtBoxClasses = () => {
  let str = ''
  if (isMaxShowing) {
    str += 'isMaxShowing '
  }
  if (isFullScreen) {
    str += 'isFullScreen '
  }

  return str
}

const getList = (tip = false) => {
  if (isDown.value) {
    // alert("没有更多数据了");
    return null
  }
  axios
    .post(getListUrl, { page: page.value, pagesize: pagesize.value })
    .then((res) => {
      const {
        data: { status, msg, data },
      } = res
      if (status === 0) {
        list.value.push(...data)
        page.value += 1
        if (data.length < pagesize.value) {
          isDown.value = true
        }

        return
      }
      isDown.value = true
    })
    .catch((err) => {
      console.log(err);
      
    })
}
onMounted(getList)
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
}
.txt {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5715;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
}
.txt:focus {
  border-color: #40a9ff;
  border-right-width: 1px !important;
  outline: 0;
  box-shadow: 0 0 0 2px #1890ff33;
}

.btns {
  margin-top: 20px;
}
.btn {
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px #00000004;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: #000000d9;
  background: #fff;
  border-color: #d9d9d9;
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px #0000000b;
}
.btn:active {
  outline: 0;
  box-shadow: none;
  color: #fff;
  background: #096dd9;
  border-color: #096dd9;
  text-decoration: none;
}
.btn:focus,
.btn:hover {
  color: #fff;
  background: #40a9ff;
  border-color: #40a9ff;
  text-decoration: none;
}
.rest {
  margin-left: 10px;
}
.title span {
  margin-left: 10px;
  font-size: 12px;
  color: #d9d9d9;
}
.title {
  color: #000;
}
.replay,.content {
  padding: 10px;
  white-space: pre-line;
  color: #00000073;
}
.btn.more {
  width: 100%;
}
.btn[disabled] {
  color: #00000040;
  background: #f5f5f5;
  border-color: #d9d9d9;
  text-shadow: none;
  box-shadow: none;
  cursor: not-allowed;
}
.replay{
   padding:0 15px 10px;
   color: red;
}

.box {
  --resize: 5px;
  --resize-bg: transparent;
  --resize-main: transparent;
  --resize-bg-main: transparent;
}
.box {
  display: flex;
  flex-direction: column;
  position: relative;
  pointer-events: auto;

  .box-top {
    display: flex;
    flex-direction: row;
    .box-top-left {
      width: var(--resize);
      height: var(--resize);
      background: var(--resize-bg);
      cursor: nw-resize;
    }

    .box-top-center {
      height: var(--resize);
      background: var(--resize-bg-main);
      cursor: n-resize;
      flex-grow: 1;
    }

    .box-top-right {
      width: var(--resize);
      height: var(--resize);
      background: var(--resize-bg);
      cursor: ne-resize;
    }
  }

  .box-center {
    display: flex;
    flex-direction: row;
    flex-grow: 1;

    .loader {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      width: 100%;
    }
    .box-center-left {
      width: var(--resize);
      height: 100%;
      background: var(--resize-bg-main);
      cursor: w-resize;
    }

    .box-center-center {
      height: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      box-shadow: 0px 0px 3px rgb(201, 196, 196);
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(20px);
      overflow: hidden;
      // filter: grayscale(1) brightness(0.9);
      .app-bar {
        height: 40px;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(20px);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        .title {
          flex-grow: 1;
          text-align: center;
          margin-right: 84px;
          font-weight: 500;
          text-shadow: none;
          font-size: 13px;
          cursor: move;
          color: #333;
        }
        .controll {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 15px;
          div {
            border-radius: 100%;
            height: 14px;
            width: 14px;
            margin-right: 8px;
            cursor: pointer;
          }
          .close {
            background: #fc605c;
          }
          .close:hover {
            background: #cc2c26;
          }
          .min {
            background: #fcbb40;
          }
          .min:hover {
            background: #c28719;
          }
          .full {
            background: #34c648;
          }
          .full:hover {
            background: #1f942e;
          }

          .full-disabled {
            background: #ccc !important;
          }
        }
      }

      .app-body {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 50px 0;
      }
    }
    .box-center-right {
      width: var(--resize);
      height: 100%;
      background: var(--resize-bg-main);
      cursor: e-resize;
    }
  }

  .box-bottom {
    display: flex;
    flex-direction: row;
    .box-bottom-left {
      width: var(--resize);
      height: var(--resize);
      background: var(--resize-bg);
      cursor: sw-resize;
    }

    .box-bottom-center {
      height: var(--resize);
      background: var(--resize-bg-main);
      cursor: s-resize;
      flex-grow: 1;
    }

    .box-bottom-right {
      width: var(--resize);
      height: var(--resize);
      background: var(--resize-bg);
      cursor: se-resize;
    }
  }
}
</style>
