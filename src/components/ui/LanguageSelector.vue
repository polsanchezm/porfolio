<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'
import type { Project } from '@/interfaces/Project'

const props = defineProps<{
  es: { projects: { content: string; list: Project[] } }
  en: { projects: { content: string; list: Project[] } }
  ca: { projects: { content: string; list: Project[] } }
}>()

const { locale, setLocaleMessage } = useI18n()

const changeLanguage = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const lang = target.value
  locale.value = lang
  localStorage.setItem('language', lang)
  const newMessages =
    lang === 'es' ? props.es : lang === 'ca' ? props.ca : props.en
  setLocaleMessage(lang, newMessages)
}

onMounted(() => {
  const savedLanguage = localStorage.getItem('language') || 'en'
  locale.value = savedLanguage
  const newMessages =
    savedLanguage === 'es'
      ? props.es
      : savedLanguage === 'ca'
        ? props.ca
        : props.en
  setLocaleMessage(savedLanguage, newMessages)
})
</script>

<template>
  <div class="relative">
    <select
      name="lang"
      id="lang"
      @change="changeLanguage"
      class="bg-transparent p-2 focus:outline-none"
    >
      <option value="es" :selected="locale === 'es'">Español</option>
      <option value="ca" :selected="locale === 'ca'">Català</option>
      <option value="en" :selected="locale === 'en'">English</option>
    </select>
  </div>
</template>
