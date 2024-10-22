<script setup lang="ts">
import ProjectCard from '../components/ProjectCardComponent.vue'
import MainLayout from '../components/MainLayoutComponent.vue'
</script>

<template>
  <MainLayout>
    <div class="min-h-screen flex flex-col pt-20">
      <div id="more-info" class="grid grid-cols-1 lg:flex xl:flex">
        <div id="content" class="flex-grow">
          <main
            class="flex-col flex text-center items-center justify-center text-white"
          >
            <div id="about-me" class="m-4 px-12">
              <h1 class="flex justify-center text-2xl font-bold m-4">
                Sobre mí
              </h1>
              <p class="text-lg text-gray-300 leading-relaxed">
                Soy Pol, estudiante de ingeniería informática con
                especialización en desarrollo web y tecnologías backend. Manejo
                lenguajes como
                <span class="font-semibold text-white"
                  >PHP, HTML, CSS, JavaScript</span
                >
                y <span class="font-semibold text-white">Python</span>, además
                de herramientas como
                <span class="font-semibold text-white">Docker</span> y
                <span class="font-semibold text-white">Kubernetes</span>. Tengo
                experiencia trabajando con frameworks como
                <span class="font-semibold text-white"
                  >Angular, Vue, Laravel, Symfony</span
                >
                y <span class="font-semibold text-white">Django</span>, y
                siempre busco mejorar mis habilidades de programación y resolver
                problemas de manera eficiente. Me apasiona también el uso de IA
                generativa para crear imágenes a través de modelos como
                <span class="font-semibold text-white"
                  >DALLE, Stable Diffusion</span
                >
                y <span class="font-semibold text-white">Midjourney</span>.
              </p>
            </div>

            <div id="my-projects" class="m-4 p-4">
              <ProjectCard />
            </div>
          </main>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
