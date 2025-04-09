<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue'
import PlayIcon from '@/components/icons/PlayIcon.vue'
import PlaySolidIcon from '@/components/icons/PlaySolidIcon.vue'

defineProps<{
  githubLink?: string
  demoLink?: string
}>()
</script>

<template>
  <div class="flex items-center">
    <a
      v-show="githubLink"
      :href="githubLink"
      target="_blank"
      class="cursor-pointer p-2 hover:bg-black/20 transition-all rounded-full"
    >
      <GithubIcon class="size-8 fill-white" />
    </a>
    <a
      v-show="demoLink"
      :href="demoLink"
      target="_blank"
      class="cursor-pointer p-2 relative hover:bg-black/20 transition-all rounded-full group/play"
    >
      <div class="size-8"></div>
      <PlayIcon
        class="opacity-100 group-hover/play:opacity-0 absolute top-2 left-2 size-8 transition-opacity stroke-white"
      />
      <PlaySolidIcon
        class="opacity-0 group-hover/play:opacity-100 absolute top-2 left-2 size-8 transition-opacity stroke-white fill-white"
      />
    </a>
  </div>
</template>
