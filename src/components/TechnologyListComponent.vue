<script setup lang="ts">
import type { Technology } from '@/interfaces/Technology'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import es from '../assets/locales/es.json'
import en from '../assets/locales/en.json'
import ca from '../assets/locales/ca.json'
import TechnologyCardComponent from './TechnologyCardComponent.vue'

const technologies = ref<Technology[]>([])

const loadTechnologies = (lang: string) => {
  try {
    const response: Technology[] =
      lang === 'es'
        ? es.technologies.list
        : lang === 'ca'
          ? ca.technologies.list
          : en.technologies.list
    technologies.value = response.map(tech => ({
      ...tech,
    }))
  } catch (error) {
    console.error('Error loading technologies:', error)
  }
}

watch(
  () => locale.value,
  newLang => {
    loadTechnologies(newLang)
  },
  { immediate: true },
)
const groupedTechnologies = computed(() => {
  return technologies.value.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = []
      }
      acc[tech.category].push(tech)
      return acc
    },
    {} as Record<string, Technology[]>,
  )
})
</script>

<template>
  <div id="technologies" class="max-w-6xl mx-auto p-8" ref="target">
    <div>
      <h1 class="text-4xl text-gray-300 font-alfa text-center mb-12">
        {{ t('technologies.title') }}
      </h1>

      <div class="grid gap-16 ">
        <div
          v-for="(techs, category) in groupedTechnologies"
          :key="category"
          class="space-y-8"
        >
          <h2
            class="text-2xl text-gray-300 font-alfa border-b-4 border-gray-800 pb-4 text-center w-1/2 mx-auto"
          >
            {{ category }}
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TechnologyCardComponent
              v-for="tech in techs"
              :key="tech.name"
              :technology="tech"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
