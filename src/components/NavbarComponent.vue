<template>
  <header
    class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2"
  >
    <nav
      class="flex px-3 text-sm font-medium rounded-full text-gray-700 justify-center items-center"
    >
      <a
        v-for="link in navItems"
        :key="link.label"
        :href="link.url"
        class="relative block px-2 py-2 transition hover:text-gray-300"
        :aria-label="link.label"
      >
        {{ link.title }}
      </a>
      <ThemeToggle />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const navItems = ref([
  { title: 'Inicio', label: 'inicio', url: '/#' },
  { title: 'Sobre mí', label: 'sobre-mi', url: '/#about-me' },
  { title: 'Proyectos', label: 'proyectos', url: '/#projects' },
  { title: 'Contacto', label: 'contacto', url: '/#contact-me' },
])

onMounted(() => {
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll('header nav a')

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(item => {
          if (item.getAttribute('aria-label') === entry.target.id) {
            item.classList.add('text-blue-500')
          } else {
            item.classList.remove('text-blue-500')
          }
        })
      }
    })
  }

  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  })

  sections.forEach(section => {
    observer.observe(section)
  })

  // Cleanup al desmontar
  onBeforeUnmount(() => {
    observer.disconnect()
  })

  // Manejo de visibilidad
  document.onvisibilitychange = () => {
    if (document.visibilityState === 'hidden') {
      observer.disconnect()
    } else {
      sections.forEach(section => {
        observer.observe(section)
      })
    }
  }
})
</script>

<style scoped>
nav {
  animation: nav-shadown 1s linear both;
  animation-timeline: scroll();
  animation-range: 0 100px;
}

nav {
  @apply bg-white/50;
}

@keyframes nav-shadown {
  0% {
    @apply bg-white/0;
  }
  to {
    @apply shadow-lg ring-1 backdrop-blur ring-white/10;
  }
}
</style>
