<template>
  <div class="min-h-screen flex flex-col pt-20">
    <div id="more-info" class="grid grid-cols-1 lg:flex xl:flex">
      <div id="content" class="flex-grow">
        <main
          class="flex-col flex text-left items-center justify-center text-white"
        >
          <div
            id="about-me"
            class="flex items-center justify-center min-h-screen m-4 px-4 max-w-4xl mx-auto"
          >
            <div class="text-lg text-gray-300 leading-relaxed">
              <h1 class="flex justify-center text-2xl font-alfa m-4">
                {{ $t('about.title') }}
              </h1>
              <p v-html="$t('about.content')"></p>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
