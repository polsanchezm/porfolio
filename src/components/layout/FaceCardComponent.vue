<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import ResumeIcon from '@/components/icons/ResumeIcon.vue'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import FaceCardIcon from '../icons/FaceCardIcon.vue'
</script>

<template>
  <div class="bg-gray-950 rounded-full items-center">
    <div
      id="socials"
      class="grid grid-cols-5 justify-items-center p-4 gap-5 mt-4"
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
      <div id="profile-image" class="flex justify-center">
        <Popover>
          <PopoverTrigger>
            <div class="hover:bg-white/20 p-3 rounded-full">
              <FaceCardIcon class="w-8 h-8 fill-gray-400 hover:fill-gray-950" />
            </div>
          </PopoverTrigger>
          <PopoverContent
            align-flip
            class="bg-gray-950 border-none rounded-3xl"
          >
            <img
              src="/images/spring_pfp.webp"
              alt="Foto Pol Sánchez"
              class="w-64 h-64 mt-4 object-cover rounded-full object-center"
            />
          </PopoverContent>
        </Popover>
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
