<script setup lang="ts">
import type { Technology } from '@/interfaces/Technology'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  technology: Technology
}>()
</script>

<template>
  <div
    class="text-center bg-gray-950 rounded-3xl p-8 transition-transform shadow-lg duration-300 hover:translate-y-[-5px] hover:shadow-2xl"
  >
    <div class="text-4xl m-2" :style="{ color: technology.color }">
      <div class="flex justify-center p-2">
        <Icon :icon="technology.icon" />
      </div>
      <div class="flex justify-center p-2">
        <h3 class="text-xl text-gray-400 font-patua">{{ technology.name }}</h3>
      </div>
    </div>
  </div>
</template>
