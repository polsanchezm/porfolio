<script setup lang="ts">
import type { Snowflake } from '@/interfaces/Snowflake'
import { onMounted, onBeforeUnmount, ref } from 'vue'


const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let flakes: Snowflake[] = []
let animationFrameId: number

const createFlakes = (num: number) => {
  flakes = []
  if (!canvas.value) return
  for (let i = 0; i < num; i++) {
    flakes.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      r: Math.random() * 3 + 1,
      d: Math.random(),
    })
  }
}

const resizeCanvas = () => {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  createFlakes(150)
}

const updateFlakes = () => {
  if (!canvas.value) return
  for (const f of flakes) {
    f.y += Math.pow(f.d, 2) + 1
    if (f.y > canvas.value.height) {
      f.y = 0
      f.x = Math.random() * canvas.value.width
    }
  }
}

const drawFlakes = () => {
  if (!ctx || !canvas.value) return
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  ctx.fillStyle = 'white'
  ctx.beginPath()
  for (const f of flakes) {
    ctx.moveTo(f.x, f.y)
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
  }
  ctx.fill()
  updateFlakes()
}

const animate = () => {
  drawFlakes()
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  animate()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas)
  cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <canvas ref="canvas" class="snow-canvas"></canvas>
</template>

<style scoped>
.snow-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
}
</style>
