<template>
  <div class="bg-black-background pt-4 h-[290px]">
    <Carousel :breakpoints="breakpoints" :wrap-around="true">
      <Slide class="w-[329px] h-[261px]" v-for="(slide, index) in menuSlider" :key="index">
        <img class="grayscale hover:grayscale-0 border-[1px] border-transparent hover:border-tan hover:scale-105 transition ease-in duration-500" :src="slide.image" alt="menu" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>

</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'; // Import carousel CSS
import { Carousel, Navigation, Slide } from 'vue3-carousel'; // Import carousel components
import { menuSlider } from '@/utils/menuSlider'; // Import menuSlider utility function

const breakpoints = {
  // Breakpoint for 700px and up
  100: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  767: {
    itemsToShow: 2.3,
    snapAlign: 'center',
  },
  820: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
  900: {
    itemsToShow: 2.8,
    snapAlign: 'center',
  },
  1000: {
    itemsToShow: 3.1,
    snapAlign: 'center',
  },
  1060: {
    itemsToShow: 3.3,
    snapAlign: 'center',
  },
  1140: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  1300: {
    itemsToShow: 4.1,
    snapAlign: 'center',
  },
  1460: {
    itemsToShow: 4.5,
    snapAlign: 'center',
  },
  1550: {
    itemsToShow: 4.7,
    snapAlign: 'center',
  },
  1650: {
    itemsToShow: 5.2,
    snapAlign: 'center',
  },
};

// Any other logic or setup code can go here

</script>