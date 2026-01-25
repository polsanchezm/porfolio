<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import ResumeIcon from '@/components/icons/ResumeIcon.vue'
</script>

<template>
  <div class="block sm:hidden bg-gray-950 rounded-full items-center">
    <div
      class="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 justify-items-center p-4 gap-5 mt-4"
    >
      <div id="email">
        <a href="mailto: pol.sm.dev@gmail.com">
          <div class="hover:bg-white/20 p-3 rounded-full">
            <MailIcon class="w-8 h-8 fill-gray-400 hover:fill-gray-950" />
          </div>
        </a>
      </div>
      <div id="github">
        <a
          href="https://github.com/polsanchezm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="hover:bg-white/20 p-3 rounded-full">
            <GithubIcon class="w-8 h-8 fill-gray-400 hover:fill-gray-950" />
          </div>
        </a>
      </div>
      <div id="linkedin">
        <a
          href="https://www.linkedin.com/in/polsanchezm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="hover:bg-white/20 p-3 rounded-full">
            <LinkedinIcon class="w-8 h-8 fill-gray-400 hover:fill-gray-950" />
          </div>
        </a>
      </div>
      <div id="resume">
        <a :href="$t('cv')" target="_blank" rel="noopener noreferrer">
          <div class="hover:bg-white/20 p-3 rounded-full">
            <ResumeIcon class="w-8 h-8 stroke-gray-400 hover:stroke-gray-950" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
