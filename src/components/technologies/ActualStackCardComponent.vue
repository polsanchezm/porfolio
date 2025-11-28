<script setup lang="ts">
import type { ActualStack } from '@/interfaces/ActualStack';
import { Icon } from '@iconify/vue'

const props = defineProps<{
  actualStack: ActualStack
}>()
</script>

<template>
  <div
    class="text-center bg-gray-950 rounded-3xl p-8 transition-transform shadow-lg duration-300 hover:translate-y-[-5px] hover:shadow-2xl"
  >
    <div class="text-4xl m-2" :style="{ color: actualStack.color }">
      <div class="flex justify-center p-2">
        <Icon :icon="actualStack.icon" />
      </div>
      <div class="flex flex-col justify-center p-2">
        <h3 class="text-xl text-gray-400 font-patua">{{ actualStack.name }}</h3>
        <h3 class="text-base text-gray-600 font-patua">{{ actualStack.language }}</h3>
      </div>
    </div>
  </div>
</template>
