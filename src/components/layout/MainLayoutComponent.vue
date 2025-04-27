<script setup lang="ts">
import Header from '@/components/layout/HeaderComponent.vue'
import Footer from '@/components/layout/FooterComponent.vue'
import FaceCard from '@/components/layout/FaceCardComponent.vue'
import ProjectGrid from '@/components/projects/ProjectGridComponent.vue'
import AboutMe from '@/components/pages/AboutMeComponent.vue'
import Navbar from '@/components/layout/NavbarComponent.vue'
import ContactMe from '@/components/pages/ContactMeComponent.vue'
import TechnologiesComponent from '@/components/technologies/TechnologyListComponent.vue'
</script>

<template>
  <main>
    <Navbar />
    <div class="flex min-h-screen">
      <aside
        class="hidden xl:flex lg:sticky lg:top-0 lg:w-1/4 lg:h-screen lg:flex-col lg:justify-center ml-24"
      >
        <FaceCard />
      </aside>

      <section class="p-6">
        <Header />
        <div class="xl:hidden lg:flex">
          <FaceCard />
        </div>
        <AboutMe />
        <ProjectGrid />
        <TechnologiesComponent />
        <ContactMe />
        <Footer />
      </section>
    </div>
  </main>
</template>
