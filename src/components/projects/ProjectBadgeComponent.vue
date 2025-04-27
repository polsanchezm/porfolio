<script setup lang="ts">
defineProps<{
  text: string
  badgeColor?: string
  noPulse?: boolean
}>()
</script>

<template>
  <div
    :class="[
      'rounded-full z-30 py-0.5 px-2 text-gray-300 text-sm font-semibold',
      badgeColor || 'bg-red-600',
      !noPulse && 'animate-pulse',
    ]"
  >
    {{ text }}
  </div>
</template>
