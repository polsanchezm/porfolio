<script setup lang="ts">
import type { Technology } from '@/interfaces/Technology'
import { Icon } from '@iconify/vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'

const props = defineProps<{
  technology: Technology
}>()
</script>

<template>
  <div
    class="text-center bg-gray-900 justify-items-center justify-center rounded-3xl p-8 transition-transform shadow-lg duration-300 hover:translate-y-[-5px] hover:shadow-2xl"
  >
    <div class="text-4xl m-2" :style="{ color: technology.color }">
      <GithubIcon v-show="technology.git_icon" fill="white" />
      <Icon v-if="!technology.git_icon" :icon="technology.icon" />
    </div>
    <div>
      <h3 class="text-2xl text-white font-bold">{{ technology.name }}</h3>
    </div>
  </div>
</template>
