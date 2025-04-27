<template>
  <div class="min-h-screen flex flex-col pt-20">
    <div id="more-info" class="grid grid-cols-1 lg:flex xl:flex">
      <div id="content" class="flex-grow">
        <main class="flex-col flex text-left items-center justify-center">
          <div
            id="about-me"
            class="flex items-center justify-center min-h-screen m-4 px-4 max-w-4xl mx-auto"
          >
            <div
              class="w-full mx-auto mt-10 bg-gray-400 rounded-3xl shadow-lg p-6 text-center"
            >
              <div class="bg-gray-950 rounded-3xl p-6 m-6 leading-relaxed">
                <h1
                  class="flex justify-center text-gray-300 text-2xl font-alfa m-4"
                >
                  {{ $t('about.title') }}
                </h1>
                <p class="text-gray-500 font-patua p-12">
                  <span v-html="$t('about.content')"></span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
