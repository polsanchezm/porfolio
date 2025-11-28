<script setup lang="ts">
import Header from '@/components/layout/HeaderComponent.vue'
import Footer from '@/components/layout/FooterComponent.vue'
import ProjectGrid from '@/components/projects/ProjectGridComponent.vue'
import AboutMe from '@/components/pages/AboutMeComponent.vue'
import Navbar from '@/components/layout/NavbarComponent.vue'
import ContactMe from '@/components/pages/ContactMeComponent.vue'
import TechnologiesComponent from '@/components/technologies/TechnologyListComponent.vue'
import StackComponent from '@/components/technologies/StackComponent.vue'
import ChristmasSnowflakes from '@/components/ui/ChristmasSnowflakes.vue'
</script>

<template>
  <main>
    <ChristmasSnowflakes />
    <Navbar />
    <div class="justify-center items-center min-h-screen">
      <section class="p-6">
        <Header />
        <AboutMe />
        <ProjectGrid />
        <StackComponent />
        <TechnologiesComponent />
        <ContactMe />
        <Footer />
      </section>
    </div>
  </main>
</template>
