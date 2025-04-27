<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import es from '@/assets/locales/es.json'
import en from '@/assets/locales/en.json'
import ca from '@/assets/locales/ca.json'
import ProjectCardComponent from '@/components/projects/ProjectCardComponent.vue'
import type { Project } from '@/interfaces/Project'

const projects = ref<Project[]>([])
const { locale } = useI18n()

const loadProjects = (lang: string) => {
  try {
    const response = lang === 'es' ? es : lang === 'ca' ? ca : en
    projects.value = response.projects.list.map(project => ({
      ...project,
      latest: project.latest ?? false,
    }))
  } catch (error) {
    console.error('Error loading projects:', error)
  }
}

watch(
  () => locale.value,
  newLang => {
    loadProjects(newLang)
  },
  { immediate: true },
)
</script>

<template>
  <div id="projects" class="m-4 p-4">
    <h1 class="text-center text-gray-300 border-b-4 border-gray-400 pb-4 w-1/2 mx-auto text-2xl font-alfa mb-6">
      {{ $t('projects.content') }}
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectCardComponent
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />
    </div>
  </div>
</template>
