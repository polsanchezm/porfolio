<script setup lang="ts">
import type { Technology } from '@/interfaces/Technology'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  technology: Technology
}>()
</script>

<template>
  <div
    class="text-center bg-gray-900 justify-items-center rounded-3xl p-8 transition-transform shadow-lg duration-300 hover:translate-y-[-5px] hover:shadow-2xl"
  >
    <div class="text-4xl m-2" :style="{ color: technology.color }">
      <Icon :icon="technology.icon" />
    </div>
    <div>
      <h3 class="text-2xl text-white font-bold">{{ technology.name }}</h3>
    </div>
  </div>
</template>
