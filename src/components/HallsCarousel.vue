<template>
    <div class="relative lg:hidden max-md:hidden max-sm:block w-full">
      <Carousel v-model="slideIndex" :breakpoints="breakpoints" :wrap-around="true">
        <Slide class="w-[306px] h-[387px] max-md:w-[211px] max-md:h-[250px]" v-for="(slide, index) in halls" :key="index">
          <HallCard :path="slide.path" :image="slide.image" :name="slide.name" />
        </Slide>
      </Carousel>
      <div class="absolute flex justify-between gap-10 inset-0 items-center top-1/2 transform -translate-y-1/2 mx-2 max-md:hidden">
      <div @click="goToPreviousSlide">
        <img class="max-xl:w-16 cursor-pointer hover:scale-105" src="../assets/icons/arrowLeft.svg" alt="previous-icon" />
      </div>
      <div @click="goToNextSlide">
        <img class="max-xl:w-16 cursor-pointer hover:scale-105" src="../assets/icons/arrowRight.svg" alt="next-icon" />
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import 'vue3-carousel/dist/carousel.css'; 
  import { Carousel, Slide } from 'vue3-carousel'; 
  import { halls } from '@/utils/halls'; 
  import HallCard from './HallCard.vue';
  import { ref } from 'vue';

  const slideIndex = ref(1);
  
  const breakpoints = {
    100: {
      itemsToShow: 1.4,
      snapAlign: 'center',
    },
    360: {
      itemsToShow: 1.5,
      snapAlign: 'center',
    },
    380: {
      itemsToShow: 1.6,
      snapAlign: 'center',
    },
    435: {
      itemsToShow: 1.9,
      snapAlign: 'center',
    },
    500: {
      itemsToShow: 2.3,
      snapAlign: 'center',
    },
    550: {
      itemsToShow: 2.6,
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
  
  const goToNextSlide = () => {
  slideIndex.value++;
};

  const goToPreviousSlide = () => {
    slideIndex.value--;
  };
</script>