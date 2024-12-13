<script setup lang="ts">
import type { Technology } from '../interfaces/Technology'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  technology: Technology
}>()

const progressStyle = computed(() => ({
  width: `${props.technology.proficiency}%`,
  backgroundColor: props.technology.color || '#3498db',
}))
</script>

<template>
  <div
    class="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl border-l-8"
    :style="{ borderColor: technology.color }"
  >
    <div class="text-3xl mb-2" :style="{ color: technology.color }">
      <Icon :icon="technology.icon" />
    </div>
    <div>
      <h3 class="text-xl text-white mb-2">{{ technology.name }}</h3>
      <p class="text-sm text-white mb-4">{{ technology.description }}</p>
      <div class="h-2.5 bg-gray-900 rounded-full relative overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-1000 ease-in-out"
          :style="progressStyle"
        ></div>
      </div>
    </div>
  </div>
</template>
