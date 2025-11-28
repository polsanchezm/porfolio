<template>
  <div class="christmas-snow-overlay" aria-hidden="true">
    <div
      v-for="flake in flakes"
      :key="flake.id"
      class="flake"
      :style="flake.style"
    >
      {{ flake.icon }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Flake } from '@/interfaces/Flake'
import { ref, onMounted } from 'vue'

const FLAKE_COUNT = 60
const ICONS = ['❄️', '❅', '🌟', '🎄', '🎁', '🍭']
const flakes = ref<Flake[]>([])

onMounted(() => {
  generateFlakes()
})

const generateFlakes = () => {
  const newFlakes: Flake[] = []

  for (let i = 0; i < FLAKE_COUNT; i++) {
    const duration = Math.random() * 10 + 8
    const delay = Math.random() * -20
    const size = Math.random() * 16 + 12
    const leftPosition = Math.random() * 100
    const opacity = Math.random() * 0.6 + 0.4

    newFlakes.push({
      id: i,
      icon: ICONS[Math.floor(Math.random() * ICONS.length)],
      style: {
        left: `${leftPosition}vw`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        fontSize: `${size}px`,
        opacity: opacity,
        filter: size < 18 ? 'blur(1px)' : 'none',
      },
    })
  }
  flakes.value = newFlakes
}
</script>

<style scoped>
.christmas-snow-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 9999;
  pointer-events: none;
}

.flake {
  position: absolute;
  top: -50px;
  color: #fff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
  user-select: none;
  will-change: transform;
  animation-name: snowfall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes snowfall {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  50% {
    transform: translateY(55vh) translateX(25px) rotate(180deg);
  }
  100% {
    transform: translateY(105vh) translateX(0) rotate(360deg);
  }
}
</style>
