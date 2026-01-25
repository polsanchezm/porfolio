<script setup lang="ts">
import SocialListComponent from '../layout/SocialListComponent.vue'
import SocialGridComponent from '../layout/SocialGridComponent.vue'
</script>

<template>
  <main class="flex-col flex text-left items-center justify-center">
    <div
      id="contact-me"
      class="w-full mx-auto mt-10 bg-gray-400 rounded-3xl shadow-lg p-6 text-center"
    >
      <div class="bg-gray-950 rounded-3xl p-6 m-6 leading-relaxed">
        <h2 class="text-2xl font-alfa text-gray-400 mb-4">
          {{ $t('contact.title') }}
        </h2>
        <SocialGridComponent />
        <SocialListComponent />
      </div>
    </div>
  </main>
</template>
