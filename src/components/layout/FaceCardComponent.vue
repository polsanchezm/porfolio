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
    <div id="content" class="m-3 p-5">
      <MusicComponent />
      <div id="profile-image" class="flex justify-center">
        <img
          src="/images/pfp.webp"
          alt="Foto Pol Sánchez"
          class="w-64 h-64 mt-4 object-cover rounded-3xl mx-auto"
        />
      </div>

      <div
        id="personal-info"
        class="flex flex-col text-center items-center gap-3 mt-14"
      >
        <div id="name" class="font-alfa text-xl text-gray-900">
          <h1>Pol Sánchez</h1>
        </div>
        <div id="brief-description" class="font-alfa text-sm text-gray-600">
          <p>
            {{ $t('facecard.content') }}
          </p>
        </div>
      </div>

      <div
        id="socials"
        class="grid grid-cols-4 justify-items-center gap-5 mt-14"
      >
        <div id="email">
          <a href="mailto: pol.sm.dev@gmail.com">
            <div class="hover:bg-black/20 p-3 rounded-full">
              <MailIcon class="w-8 h-8 hover:fill-white" />
            </div>
          </a>
        </div>
        <div id="github">
          <a
            href="https://github.com/polsanchezm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="hover:bg-black/20 p-3 rounded-full">
              <GithubIcon class="w-8 h-8 hover:fill-white" />
            </div>
          </a>
        </div>
        <div id="linkedin">
          <a
            href="https://www.linkedin.com/in/polsanchezm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="hover:bg-black/20 p-3 rounded-full">
              <LinkedinIcon class="w-8 h-8 hover:fill-white" />
            </div>
          </a>
        </div>
        <div id="resume">
          <a
            href="https://drive.google.com/file/d/19LWrcd8_HO1vK3mu_uGNYnvQHHQSl0Be/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="hover:bg-black/20 p-3 rounded-full">
              <ResumeIcon class="w-8 h-8 hover:stroke-white" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
