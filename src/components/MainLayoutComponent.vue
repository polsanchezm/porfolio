<script setup lang="ts">
import Header from '../components/HeaderComponent.vue'
import Footer from '../components/FooterComponent.vue'
import FaceCard from '../components/FaceCardComponent.vue'
import ProjectCard from '../components/ProjectCardComponent.vue'
import AboutMe from '../components/AboutMeComponent.vue'
import Navbar from '../components/NavbarComponent.vue'
import ContactMe from '../components/ContactMeComponent.vue'
</script>

<template>
  <Navbar />
  <div
    class="flex min-h-screen bg-gradient-to-b from-gray-900 to-gray-500 text-white"
  >
    <aside
      class="hidden lg:hidden xl:flex lg:sticky lg:top-0 lg:w-1/4 lg:h-screen lg:flex-col lg:justify-center ml-24"
    >
      <FaceCard />
    </aside>

    <div class="flex-grow flex flex-col">
      <Header />
      <div class="xl:hidden lg:flex">
        <FaceCard />
      </div>
      <div class="flex-grow flex flex-col justify-center">
        <AboutMe />
        <div id="projects" class="m-4 p-4">
          <ProjectCard />
        </div>
      </div>
      <ContactMe/>
      <Footer />
    </div>
  </div>
</template>
