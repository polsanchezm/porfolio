<script setup lang="ts">
import GithubIcon from './icons/GithubIcon.vue'
import PlayIcon from './icons/PlayIcon.vue'
import PlaySolidIcon from './icons/PlaySolidIcon.vue'

defineProps<{
  githubLink: string
  demoLink?: string
}>()
</script>

<template>
  <div class="flex items-center">
    <a
      v-show="githubLink"
      :href="githubLink"
      target="_blank"
      class="cursor-pointer p-2 hover:bg-black/20 transition-all rounded-lg"
    >
      <GithubIcon class="size-8" />
    </a>
    <a
      v-show="demoLink"
      :href="demoLink"
      target="_blank"
      class="cursor-pointer p-2 relative hover:bg-green-500/20 transition-all rounded-lg group/play"
    >
      <div class="size-8"></div>
      <PlayIcon
        class="opacity-100 group-hover/play:opacity-0 absolute top-2 left-2 size-8 transition-opacity"
      />
      <PlaySolidIcon
        class="opacity-0 group-hover/play:opacity-100 absolute top-2 left-2 size-8 transition-opacity"
      />
    </a>
  </div>
</template>
