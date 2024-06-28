<template>
  <div class="flex flex-col justify-end bg-no-repeat bg-cover bg-center bg-aria-hall-gallery w-full">
    <div class="flex justify-between items-center h-4/5 gap-20  max-md:flex-col max-md:gap-8"
    :class="[ hallName === 'private' ? ['my-20', 'gap-3', 'max-md:mt-8', 'max-md:mb-0']:  ['mb-20', 'mt-10', 'max-xl:mt-20', 'max-md:mb-8'] ]">
      <div v-if="hallName === 'aria' || hallName === 'summer'" class="shrink ml-24 basis-1/4 h-auto max-md:ml-0">
      <img class="max-md:hidden w-full" :src="titleDesktop" alt="title" />
      <img class="md:hidden" :src="titleMobile" alt="title" />
      </div>  
      <div v-else class="flex flex-col shrink ml-16 h-auto basis-5/12 max-md:ml-0 text-white gap-5 max-lg:ml-6 max-lg:gap-3
      max-md:text-center max-md:w-4/5 max-md:justify-center max-md:gap-2">
        <p class="text-6xl max-lg:text-4xl font-tertiary">{{ slideNumber }}</p>
        <img class="w-52 max-md:hidden max-lg:w-40" src="../assets/lines/lineLeft.svg" alt="line" />
        <img class=" w-24 md:hidden place-self-center" src="../assets/lines/lineCenter.svg" alt="line" />
        <p class="text-lg max-md:text-sm max-lg:text-base">{{ slideiIntro }}</p>
      </div>
      <HallSlider :slide-images="slideImages" />
    </div>
  </div>
</template>
  
 <script setup>
import { defineProps } from 'vue';
import HallSlider from './HallSlider.vue';

  
defineProps({
  titleDesktop: {
    type: String,
    required: true
  },
  titleMobile: {
    type: String,
    required: false
  },
  slideImages: {
    type: String,
    required: false
  },
  hallName: {
    type: String,
    required: true
  },
  slideNumber: {
    type: String,
    required: false
  },
  slideiIntro: { 
    type: String,
    required: false
  }
});
</script>