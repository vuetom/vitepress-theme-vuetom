<script setup lang="ts">
const d = defineProps<{
  avatar?: string,
  author?: string
}>()

</script>

<template>
  <div class="VTSidebarBottom">
    <div class="rounded-vt shadow-vt bg-cbg p-6">
      <div class="avatar w-full pt-6">
        <div
          class="bg-cover bg-center rounded-full h-24 w-24 bg-green-100 mx-auto"
          :style="{'background-image': `url(${d.avatar})`}"
        >
        </div>
      </div>
      <div class="author">
        <p class="text-center py-6 text-xl font-bold">{{d.author}}</p>
      </div>
      <div class="tag">
        <div class="grid grid-cols-3 w-4/5 mx-auto text-center">
          <div>
            <p class="font-bold">1</p>
            <p class="text-sm hover:text-brand-d hover:font-bold">文章</p>
          </div>
          <div>
            <p class="font-bold">0</p>
            <p class="text-sm hover:text-brand-d hover:font-bold">分类</p>
          </div>
          <div>
            <p class="font-bold">10</p>
            <p class="text-sm hover:text-brand-d hover:font-bold">标签</p>
          </div>
        </div>
      </div>
      <div class="self-links">
        <div class="py-6 flex flex-wrap text-left text-sm">
          <div class="w-1/2 px-3 py-1.5 mt-1 hover:bg-cbgs rounded-vt">
            <i class="w-3 h-3 text-sm mr-1 fa fa-ambulance"></i>&nbsp;
            <span>Gitee</span>
          </div>
          <div class="w-1/2 px-3 py-1.5 mt-1 hover:bg-cbgs rounded-vt">
            <i class="w-3 h-3 text-sm mr-1 fa fa-github-alt"></i>&nbsp;
            <span>Github</span>
          </div>
          <div class="w-1/2 px-3 py-1.5 mt-1 hover:bg-cbgs rounded-vt">
            <i class="w-3 h-3 text-sm mr-1 fa fa-envelope-o"></i>&nbsp;
            <span>Email</span>
          </div>
        </div>
      </div>
      <div class="friend-links">
        <div class="py-6 border-t-2 border-gray-100 border-opacity-50 text-center">
          <div>
            <a
              class="border-b-2 border-gray-200 inline-block m-1 px-1 hover:border-gray-500 transition duration-500 border-opacity-50"
              href="https://github.com/lauset"
              >LauSET</a
            >
          </div>
          <div>
            <a
              class="border-b-2 border-gray-200 inline-block m-1 px-1 hover:border-gray-500 transition duration-500 border-opacity-50"
              href="https://github.com/lauset"
              >Vuetom</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
