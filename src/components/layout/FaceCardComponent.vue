<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import ResumeIcon from '@/components/icons/ResumeIcon.vue'
</script>

<template>
  <div
    id="main-box"
    class="bg-gray-400 rounded-xl shadow-md overflow-hidden max-w-xs mx-auto"
  >
    <div id="content" class="m-3 p-5">
      <div id="profile-image" class="flex justify-center lg:size-60 xl:size-60">
        <img
          src="/images/pfp.webp"
          alt=""
          class="w-64 h-64 mt-4 object-cover rounded-xl mx-auto"
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
      <div id="socials" class="flex justify-center gap-3 mt-14">
        <div id="resume">
          <a
            href="https://drive.google.com/file/d/19LWrcd8_HO1vK3mu_uGNYnvQHHQSl0Be/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ResumeIcon class="w-8 h-8 mr-4 text-black" />
          </a>
        </div>
        <div id="linkedin">
          <a
            href="https://www.linkedin.com/in/pol-s%C3%A1nchez-mart%C3%ADnez-396ba819b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon class="w-8 h-8 mr-4 text-black" />
          </a>
        </div>
        <div id="github">
          <a
            href="https://github.com/polsanchezm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon class="w-8 h-8 mr-4 text-black" />
          </a>
        </div>
        <div id="email">
          <a href="mailto: pol.sm.dev@gmail.com">
            <MailIcon class="w-8 h-8 mr-4 text-black" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
