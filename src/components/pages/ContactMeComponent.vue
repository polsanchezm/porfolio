<script setup lang="ts">
import MailIcon from '@/components/icons/MailIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import ResumeIcon from '@/components/icons/ResumeIcon.vue'
</script>

<template>
  <div class="flex items-center justify-center mx-16 my-16 min-h-screen">
    <div
      id="contact-me"
      class="w-full mx-auto mt-10 bg-gray-400 rounded-3xl shadow-lg p-6 text-center"
    >
      <div class="bg-gray-950 rounded-3xl p-6 m-6 leading-relaxed">
        <h2 class="text-2xl font-alfa text-gray-400 mb-4">
          {{ $t('contact.title') }}
        </h2>

        <div class="space-y-3">
          <div class="flex justify-center">
            <a
              href="mailto: pol.sm.dev@gmail.com"
              class="text-gray-300 hover:text-gray-950 font-bold flex hover:bg-white/20 px-3 py-2 rounded-full"
            >
              <MailIcon class="w-6 h-6 mr-4 fill-gray-300 hover:fill-gray-950" />
              pol.sm.dev@gmail.com
            </a>
          </div>
          <div class="flex justify-center">
            <a
              class="text-gray-300 hover:text-gray-950 font-bold flex hover:bg-white/20 px-3 py-2 rounded-full"
              href="https://www.linkedin.com/in/polsanchezm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon class="w-6 h-6 mr-4 fill-gray-300 hover:fill-gray-950" />
              Pol Sánchez
            </a>
          </div>

          <div class="flex justify-center">
            <a
              class="text-gray-300 hover:text-gray-950 font-bold flex hover:bg-white/20 px-3 py-2 rounded-full"
              href="https://github.com/polsanchezm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon class="w-6 h-6 mr-4 fill-gray-300 hover:fill-gray-950" />
              polsanchezm
            </a>
          </div>

          <div class="flex justify-center">
            <a
              class="text-gray-300 hover:text-gray-950 font-bold flex hover:bg-white/20 px-3 py-2 rounded-full"
              href="https://drive.google.com/file/d/19LWrcd8_HO1vK3mu_uGNYnvQHHQSl0Be/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ResumeIcon class="w-6 h-6 mr-4 stroke-gray-300 hover:stroke-gray-950" />
              Curriculum
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
