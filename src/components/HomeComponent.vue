<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow flex items-center justify-center bg-gray-100">
      <section class="text-center">
        <h1 class="text-4xl font-bold text-gray-800">¡Hola! Soy Pol</h1>
        <p class="mt-4 text-lg text-gray-600">
          Estudiante de ingeniería informática y desarrollador apasionado por la
          programación.
        </p>
        <a
          href="#contact"
          class="mt-6 inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-all"
        >
          Contáctame
        </a>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/HeaderComponent.vue'
import Footer from '../components/FooterComponent.vue'
</script>

<style scoped>
/* No se necesita estilo adicional porque todo está hecho con Tailwind */
</style>
