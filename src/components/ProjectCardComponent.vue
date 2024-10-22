<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

interface Project {
  title: string
  description: string
  image: string
  link: string
  demoLink?: string
  finished: boolean
  latest: boolean
}

const projects = ref<Project[]>([])

onMounted(async () => {
  const response = await fetch('/assets/projects.json')
  projects.value = await response.json()
})

// Computed properties to filter finished and in-progress projects
const finishedProjects = computed(() =>
  projects.value.filter(project => project.finished),
)
const inProgressProjects = computed(() =>
  projects.value.filter(project => !project.finished),
)
</script>

<template>
  <div id="all-projects" class="grid grid-flow-col">
    <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
      <div id="my-projects" class="m-4 p-4">
        <h1 class="flex justify-center text-center text-2xl font-bold m-4">
          Proyectos Acabados
        </h1>
        <div
          class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-4"
        >
          <div
            v-for="project in finishedProjects"
            :key="project.title"
            :class="project.latest ? 'lg:col-span-1 sm:col-span-2 md:col-span-2 xl:col-span-1 2xl:col-span-2' : 'col-span-1'"
            class="bg-white shadow-md rounded-lg overflow-hidden transition transform duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-40 object-cover"
            />
            <div class="p-4">
              <h2 class="text-gray-600 text-lg font-bold text-center">
                {{ project.title }}
              </h2>
              <p class="text-gray-600 text-center">{{ project.description }}</p>
              <div class="flex justify-center mt-6">
                <a
                  :href="project.link"
                  type="button"
                  class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <div v-if="project.demoLink">
                  <a
                    :href="project.demoLink"
                    class="flex text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="in-progress" class="m-4 p-4">
        <h1 class="flex justify-center text-center text-2xl font-bold m-4">
          Proyectos En Progreso
        </h1>
        <div class="grid grid-cols-1 gap-5">
          <div
            v-for="project in inProgressProjects"
            :key="project.title"
            class="bg-white shadow-md rounded-lg overflow-hidden transition transform duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-40 object-cover"
            />
            <div class="p-4">
              <h2 class="text-gray-600 text-lg font-bold text-center">
                {{ project.title }}
              </h2>
              <p class="text-gray-600 text-center">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
