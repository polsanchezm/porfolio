<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSelector from '@/components/ui/LanguageSelector.vue'
import es from '@/assets/locales/es.json'
import en from '@/assets/locales/en.json'
import ca from '@/assets/locales/ca.json'
import { Icon } from '@iconify/vue/dist/iconify.js'

const { t, locale } = useI18n()

const navItems = ref([
  { title: t('navbar.home'), label: 'home', url: '/#' },
  { title: t('navbar.about'), label: 'about-me', url: '/#about-me' },
  { title: t('navbar.projects'), label: 'projects', url: '/#projects' },
  {
    title: t('navbar.technologies'),
    label: 'technologies',
    url: '/#technologies',
  },
  { title: t('navbar.contact'), label: 'contact', url: '/#contact-me' },
])

watch(
  () => locale.value,
  () => {
    navItems.value = [
      { title: t('navbar.home'), label: 'home', url: '/#' },
      { title: t('navbar.about'), label: 'about-me', url: '/#about-me' },
      { title: t('navbar.projects'), label: 'projects', url: '/#projects' },
      {
        title: t('navbar.technologies'),
        label: 'technologies',
        url: '/#technologies',
      },
      { title: t('navbar.contact'), label: 'contact', url: '/#contact-me' },
    ]
  },
)

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

  onBeforeUnmount(() => {
    observer.disconnect()
  })

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

<template>
  <header
    class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2"
  >
    <nav
      class="flex px-3 text-sm font-medium rounded-full text-gray-700 justify-center items-center align-middle"
    >
      <div class="hidden sm:flex space-x-4">
        <a
          v-for="link in navItems"
          :key="link.label"
          :href="link.url"
          class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
          :aria-label="link.label"
        >
          {{ link.title }}
        </a>
        <LanguageSelector :es="es" :en="en" :ca="ca" />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger class="xl:hidden lg:hidden md:hidden sm:hidden">
          <Icon icon="material-symbols:menu" class="w-6 h-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem v-for="link in navItems" :key="link.label">
            <a
              :href="link.url"
              class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
              :aria-label="link.label"
            >
              {{ link.title }}
            </a>
          </DropdownMenuItem>
          <LanguageSelector :es="es" :en="en" :ca="ca" />
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  </header>
</template>

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
