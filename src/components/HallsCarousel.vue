<template>
    <div class="lg:hidden w-full">
      <Carousel :breakpoints="breakpoints" :wrap-around="true">
        <Slide class="w-[306px] h-[387px]" v-for="(slide, index) in halls" :key="index">
          <HallCard :path="slide.path" :image="slide.image" :name="slide.name" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </template>
  
  <script setup>
  import 'vue3-carousel/dist/carousel.css'; 
  import { Carousel, Navigation, Slide } from 'vue3-carousel'; 
  import { halls } from '@/utils/halls'; 
  import HallCard from './HallCard.vue';
  
  const breakpoints = {
    100: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    680: {
      itemsToShow: 2.2,
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
    1000: {
      itemsToShow: 2.7,
      snapAlign: 'center',
    },
  };  
</script>