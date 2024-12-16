<script setup lang="ts">
import type { Project } from '@/interfaces/Project'
import ProjectBadgeComponent from '@/components/projects/ProjectBadgeComponent.vue'
import ProjectLinksComponent from '@/components/projects/ProjectLinksComponent.vue'

const project = defineProps<Project>()
</script>

<template>
  <article class="bg-gray-400 group/card relative overflow-hidden rounded-lg">
    <div v-show="project.latest" class="absolute top-2 right-2 z-30">
      <ProjectBadgeComponent
        :text="$t('badge.latest')"
        badgeColor="bg-green-600"
        noPulse
      />
    </div>
    <div v-show="!project.finished" class="absolute top-2 left-2 z-30">
      <ProjectBadgeComponent :text="$t('badge.working')" />
    </div>

    <img
      v-show="project.image"
      :src="project.image"
      class="w-full h-64 object-cover group-hover/card:scale-125 transition-all duration-1000"
      alt="Project Image"
    />

    <div
      class="-bottom-full group-hover/card:bottom-0 duration-300 w-full absolute transition-all bg-gray-600 p-4 rounded-t-lg flex"
    >
      <div>
        <p class="text-xl font-alfa">{{ project.title }}</p>
        <p class="leading-tight text-sm">{{ project.description }}</p>
      </div>
      <ProjectLinksComponent
        :githubLink="project.link"
        :demoLink="project.demoLink"
      />
    </div>
  </article>
</template>
