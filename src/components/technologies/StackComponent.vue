<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import es from '@/assets/locales/es.json'
import en from '@/assets/locales/en.json'
import ca from '@/assets/locales/ca.json'
import type { Stack } from '@/interfaces/Stack'
import StackCardComponent from '@/components/technologies/StackCardComponent.vue'

const stack = ref<Stack[]>()

const loadTechnologies = (lang: string) => {
  try {
    const response: Stack[] =
      lang === 'es'
        ? es.stack.list
        : lang === 'ca'
          ? ca.stack.list
          : en.stack.list
    stack.value = response
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
</script>

<template>
  <div id="stack" class="max-w-6xl mx-auto p-8" ref="target">
    <div>
      <h1 class="text-4xl text-gray-300 font-alfa text-center mb-12">
        {{ t('stack.title') }}
      </h1>

      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center"
      >
        <StackCardComponent
          v-for="value in stack"
          :key="value.name"
          :stack="value"
        />
      </div>
    </div>
  </div>
</template>
