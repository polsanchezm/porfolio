<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import ResumeIcon from '@/components/icons/ResumeIcon.vue'
</script>

<template>
  <div class="hidden sm:block space-y-3">
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
        :href="$t('cv')"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ResumeIcon
          class="w-6 h-6 mr-4 stroke-gray-300 hover:stroke-gray-950"
        />
        CV
      </a>
    </div>
  </div>
</template>
