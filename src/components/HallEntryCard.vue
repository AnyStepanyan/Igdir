<template>
  <router-link class="hover:shadow-lg hover:shadow-tan" :to="path">
    <div class="flex justify-between border-[1px] w-[328px] h-[189px] opacity-60 hover:opacity-100 backdrop-blur-[2px] max-lg:w-[250px] max-lg:h-[145px] max-md:opacity-85">
      <div class="basis-2/5 place-self-center">
        <img class="mx-auto max-lg:h-10" :src="title" alt="hall-name" />
      </div>
      <div class="relative basis-3/5">
        <img :src="image" alt="hall-image" />
        <img class="absolute right-3 top-1/2 transform -translate-y-1/2 max-lg:w-14" src="../assets/icons/enter.svg" />
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  path: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
});
</script>