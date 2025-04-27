<template>
  <header
    class="bg-transparent h-screen flex flex-col justify-center items-center text-gray-300 text-center"
  >
    <div class="max-w-3xl">
      <h1 class="text-left text-2xl md:text-6xl sm:text-4xl mb-8 font-alfa">
        <p v-html="$t('header.content')"></p>
      </h1>
      <a
        href="#about-me"
        class="bg-gray-300 text-gray-800 hover:bg-gray-400 focus:outline-none font-alfa rounded-full text-sm md:text-lg lg:text-xl px-6 py-3 transition duration-200"
      >
        {{ $t('header.button') }}
      </a>
    </div>
  </header>
</template>
