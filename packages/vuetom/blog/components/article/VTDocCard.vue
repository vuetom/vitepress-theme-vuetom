<script setup lang="ts">
const props = defineProps<{
  data: any
}>()

const f = props.data.data.frontmatter
console.log(f)

console.log(f.tag)

const tags = f.tag.split(',')
const togo = (url) => {
  window.location.href = url
}
</script>

<template>
  <div class="VTDocCard">
    <div class="rounded-vt h-80 w-full mb-6 bg-gray-700" @click="togo(data.path)">
      <div class="pic h-1/2 text-white relative text-center">
        <div class="title absolute w-4/5 bottom-2 left-0 right-0 mx-auto">
          <h1 class="font-black text-xl antialiased tracking-wide">{{f.title}}</h1>
          <p class="m-1">other</p>
        </div>
      </div>
      <div class="text h-1/2 bg-cbg rounded-vt px-10 py-6">
        <div class="desc h-3/4">
          <!-- {{data}} -->
        </div>
        <div class="tag h-1/4">
          <span class="inline-block w-24 font-bold
            hover:text-brand transition-colors duration-300">
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
            &nbsp;
            {{f.categories}}
          </span>
          <span>
            <i class="fa fa-tags" aria-hidden="true"></i>
            <span
              class="px-1.5 m-1 inline-block text-center
                bg-cbgs border-2 border-cbgs rounded-vt
                hover:border-brand transition-colors duration-300
              "
              v-for="t in tags" :key="t">{{t}}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
