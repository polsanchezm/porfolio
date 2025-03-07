<script setup lang="ts">
import MailIcon from '@/components/icons/MailIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
</script>

<template>
  <div class="flex items-center justify-center mx-16 my-16 min-h-screen">
    <div
      id="contact-me"
      class="w-full mx-auto mt-10 bg-gray-400 rounded-lg shadow-lg p-6 text-center"
    >
      <h2 class="text-2xl font-alfa text-gray-900 mb-4">
        {{ $t('contact.title') }}
      </h2>

      <div class="space-y-3">
        <div class="flex justify-center">
          <MailIcon class="w-6 h-6 mr-4 text-black" />
          <a
            href="mailto: pol.sm.dev@gmail.com"
            class="text-gray-900 hover:text-gray-50 font-bold"
            >pol.sm.dev@gmail.com</a
          >
        </div>

        <div class="flex justify-center">
          <GithubIcon class="w-6 h-6 mr-4 text-black" />
          <a
            class="text-gray-900 hover:text-gray-50 font-bold"
            href="https://github.com/polsanchezm"
            target="_blank"
            rel="noopener noreferrer"
          >
            polsanchezm
          </a>
        </div>

        <div class="flex justify-center">
          <LinkedinIcon class="w-6 h-6 mr-4 text-black" />
          <a
            class="text-gray-900 hover:text-gray-50 font-bold"
            href="https://www.linkedin.com/in/polsanchezm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pol Sánchez
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
