<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import ResumeIcon from '@/components/icons/ResumeIcon.vue'
import MusicComponent from '@/components/music/MusicComponent.vue'
</script>

<template>
  <div
    id="main-box"
    class="bg-gray-400 rounded-3xl shadow-md overflow-hidden max-w-xs mx-auto"
  >
    <div id="content" class="m-3 p-3">
      <MusicComponent />
      <div id="profile-image" class="flex justify-center">
        <img
          src="/images/spring_pfp.webp"
          alt="Foto Pol Sánchez"
          class="w-72 h-64 mt-4 object-cover rounded-full object-center"
        />
      </div>
      <div class="bg-gray-950 rounded-3xl items-center">
        <div
          id="personal-info"
          class="flex flex-col text-center items-center gap-3 mt-4 py-6 px-4"
        >
          <div id="name" class="font-alfa text-xl text-gray-300">
            <h1>Pol Sánchez</h1>
          </div>
          <div id="brief-description" class="font-patua text-gray-400">
            <p>
              {{ $t('facecard.content') }}
            </p>
          </div>
        </div>
      </div>

      <div class="bg-gray-950 rounded-full items-center">
        <div
          id="socials"
          class="grid grid-cols-4 justify-items-center p-4 gap-5 mt-4"
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
                <LinkedinIcon
                  class="w-8 h-8 fill-gray-400 hover:fill-gray-950"
                />
              </div>
            </a>
          </div>
          <div id="resume">
            <a :href="$t('cv')" target="_blank" rel="noopener noreferrer">
              <div class="hover:bg-white/20 p-3 rounded-full">
                <ResumeIcon
                  class="w-8 h-8 stroke-gray-400 hover:stroke-gray-950"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
