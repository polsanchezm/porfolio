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
  <div id="song-day" class="flex items-center justify-center">
    <div
      class="flex bg-gray-950 rounded-3xl p-2 w-64 h-24 justify-between items-center"
    >
      <div class="w-16 h-16 overflow-hidden rounded-2xl m-2 flex-shrink-0">
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
              'font-alfa text-md text-gray-400 whitespace-nowrap',
              isTitleOverflowing ? 'animate-marquee' : '',
            ]"
          >
            {{ randomSong.title }}
          </span>
          <span
            ref="artist"
            :class="[
              'font-alfa text-sm text-gray-600 whitespace-nowrap',
              isArtistOverflowing ? 'animate-marquee2' : '',
            ]"
          >
            {{ randomSong.artist }}
          </span>
        </div>
      </div>
      <div class="flex gap-10 items-center">
        <a
          :href="randomSong.link"
          target="_blank"
          class="cursor-pointer p-2 hover:bg-black/20 transition-all rounded-full group/play"
        >
          <PlaySolidIcon class="size-8 fill-white stroke-white" />
        </a>
      </div>
    </div>
  </div>
</template>
