<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PlaySolidIcon from '@/components/icons/PlaySolidIcon.vue'
import songs from '../../assets/locales/songs.json'

const randomSong = ref(songs[Math.floor(Math.random() * songs.length)])
const title = ref<HTMLElement | null>(null)
const artist = ref<HTMLElement | null>(null)
const isTitleOverflowing = ref(false)
const isArtistOverflowing = ref(false)

const checkOverflow = (field: HTMLElement | null) => {
  if (field) {
    return field.scrollWidth > field.clientWidth
  }
  return false
}

onMounted(() => {
  isTitleOverflowing.value = checkOverflow(title.value)
  isArtistOverflowing.value = checkOverflow(artist.value)
})
</script>

<template>
  <div
    id="song-day"
    class="flex items-center justify-center sticky bottom-4 z-1"
  >
    <div
      class="flex bg-gray-600 rounded-full p-2 w-96 h-22 justify-start items-center shadow-gray-800 shadow-md border border-gray-900"
    >
      <div class="flex gap-4 items-center flex-grow min-w-0">
        <div class="w-24 h-20 overflow-hidden rounded-xl ml-8 my-2 mr-2 flex-shrink-0">
          <img
            :src="randomSong.cover"
            :alt="'Cover ' + randomSong.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="flex flex-col justify-center overflow-x-hidden min-w-0 h-full"
        >
          <div class="flex flex-col justify-center overflow-x-hidden">
            <span
              ref="title"
              :class="[
                'font-patua text-lg text-gray-100 whitespace-nowrap',
                isTitleOverflowing ? 'animate-marquee' : '',
              ]"
            >
              {{ randomSong.title }}
            </span>
            <span
              ref="artist"
              :class="[
                'font-patua text-base text-gray-400 whitespace-nowrap',
                isArtistOverflowing ? 'animate-marquee2' : '',
              ]"
            >
              {{ randomSong.artist }}
            </span>
          </div>
        </div>
      </div>
      <div class="flex gap-10 items-center">
        <a
          :href="randomSong.link"
          target="_blank"
          class="cursor-pointer p-2 hover:bg-white/20 transition-all rounded-full"
        >
          <PlaySolidIcon class="size-8 stroke-gray-100 fill-gray-100" />
        </a>
      </div>
    </div>
  </div>
</template>
