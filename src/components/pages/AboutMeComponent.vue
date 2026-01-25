<script setup lang="ts">
import SocialGrid from '@/components/layout/SocialGridComponent.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col pt-20">
    <main class="flex-col flex text-left items-center justify-center">
      <div
        id="about-me"
        class="flex items-center justify-center min-h-screen m-4 max-w-4xl mx-auto"
      >
        <div
          class="w-full mx-auto mt-10 bg-gray-400 rounded-3xl shadow-lg p-6 text-center"
        >
          <div class="bg-gray-950 rounded-3xl p-4 m-4 leading-relaxed">
            <h1
              class="flex justify-center text-gray-300 text-2xl font-alfa m-4"
            >
              {{ $t('about.title') }}
            </h1>

            <p class="text-gray-500 font-patua p-4">
              <span v-html="$t('about.content')"></span>
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
