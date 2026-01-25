<script setup lang="ts">
import type { WorkExperience } from '@/interfaces/WorkExperience'

defineProps<{
  workExperience: WorkExperience
}>()
</script>

<template>
  <div
    class="relative text-center bg-gray-800 rounded-3xl p-8 transition-transform shadow-lg duration-300 hover:translate-y-[-5px] hover:shadow-2xl"
  >
    <div class="flex justify-center items-center">
      <span
        class="absolute -left-12 w-16 h-16 flex leading-none items-center justify-center rounded-full bg-gray-600 text-gray-300 shadow-sm font-patua z-10"
      >
        {{ workExperience.shortStartDate }}
      </span>
      <span
        v-if="workExperience.isLast"
        class="absolute top-full left-1/2 -translate-x-1/2 w-2 h-10 bg-gray-600"
      ></span>
      <div class="text-4xl m-2">
        <div class="flex flex-col justify-center p-2">
          <h3 class="text-xl text-gray-200 font-patua">
            {{ workExperience.jobTitle }}
          </h3>
          <h3 class="text-base text-gray-400 font-patua">
            {{ workExperience.company }}
          </h3>
          <h3 class="text-base text-gray-400 font-patua">
            {{ workExperience.startDate }} - {{ workExperience.endDate }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
