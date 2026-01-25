<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
import es from '@/assets/locales/es.json'
import en from '@/assets/locales/en.json'
import ca from '@/assets/locales/ca.json'
import type { WorkExperience } from '@/interfaces/WorkExperience'
import WorkExperienceCardComponent from '@/components/experience/WorkExperienceCardComponent.vue'

const workExperience = ref<WorkExperience[]>()

const loadWorkExperiences = (lang: string) => {
  try {
    const response: WorkExperience[] =
      lang === 'es'
        ? es.workExperience.list
        : lang === 'ca'
          ? ca.workExperience.list
          : en.workExperience.list
    workExperience.value = response
  } catch (error) {
    console.error('Error loading technologies:', error)
  }
}

watch(
  () => locale.value,
  newLang => {
    loadWorkExperiences(newLang)
  },
  { immediate: true },
)
</script>

<template>
  <div id="work-experience" class="flex items-center justify-center pb-20">
    <div
      class="flex items-center justify-center min-h-screen m-4 max-w-4xl mx-auto"
    >
      <div
        class="w-full mx-auto mt-10 bg-gray-400 rounded-3xl shadow-lg p-6 text-center"
      >
        <div class="rounded-3xl p-4 m-4 leading-relaxed bg-gray-950">
          <h1
            class="flex justify-center text-gray-300 text-2xl font-alfa mb-4 mr-4 ml-4"
          >
            {{ $t('workExperience.title') }}
          </h1>
          <div class="grid grid-cols-1 gap-6 justify-center">
            <WorkExperienceCardComponent
              v-for="value in workExperience"
              :key="value.jobTitle"
              :workExperience="value"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
