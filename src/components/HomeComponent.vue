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
                ¡Hola! Soy <span class="font-semibold text-white">Pol</span>,
                desarrollador web. Me especializo en
                <span class="font-semibold text-white">Laravel</span> y
                <span class="font-semibold text-white">Vue.js</span>, aunque
                también tengo experiencia con frameworks de
                <span class="font-semibold text-white">front-end</span>, como
                <span class="font-semibold text-white">Angular</span> y
                <span class="font-semibold text-white">Node.js</span>, así como
                en <span class="font-semibold text-white">back-end</span> con
                <span class="font-semibold text-white">Symfony</span> y
                <span class="font-semibold text-white">Django</span>. Además,
                cuento con habilidades en tecnologías de contenedorización como
                <span class="font-semibold text-white">Docker</span> y
                <span class="font-semibold text-white">Kubernetes</span>.
                <br />
                <br />
                <span
                  >Actualmente, estoy trabajando en un emocionante proyecto
                  individual: una
                  <span class="font-semibold text-white"
                    >plataforma de streaming y videos</span
                  >
                  que busca ofrecer una experiencia enriquecedora tanto al
                  usuario individual como a sus comunidades.
                </span>
                <br />
                <br />
                <span>
                  Me apasiona aprender y desarrollar mis habilidades en el
                  proceso, enfrentando nuevos desafíos que me permitan seguir
                  creciendo como profesional.
                </span>
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
