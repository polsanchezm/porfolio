<script setup lang="ts">
import type { Technology } from '../interfaces/Technology'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  technology: Technology
}>()
</script>

<template>
  <div
    class="text-center bg-gray-800 justify-items-center rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl border-x-4"
    :style="{ borderColor: technology.color }"
  >
    <div class="text-3xl m-2" :style="{ color: technology.color }">
      <Icon :icon="technology.icon" />
    </div>
    <div>
      <h3 class="text-xl text-white">{{ technology.name }}</h3>
    </div>
  </div>
</template>
