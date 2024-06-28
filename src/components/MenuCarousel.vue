<template>
  <div class="relative bg-black-background pt-4 h-[290px]">
    <Carousel v-model="slideIndex" :breakpoints="breakpoints" :wrap-around="true">
      <Slide class="w-[329px] h-[261px]" v-for="(slide, index) in menuSlider" :key="index">
        <img class="sm:grayscale sm:hover:grayscale-0 border-[1px] border-tan md:hover:scale-105 transition ease-in duration-500 max-sm:px-2" :src="slide.image" alt="menu" />
      </Slide>
    </Carousel>
        <div @click="goToPreviousSlide">
          <img class="absolute flex justify-between gap-10 left-0 items-center top-1/2 transform -translate-y-1/2 mx-2 max-md:hidden max-xl:w-16 cursor-pointer hover:scale-105" src="../assets/icons/arrowLeft.svg" alt="previous-icon" />
        </div>
        <div @click="goToNextSlide">
          <img class="absolute flex justify-between gap-10 right-0 items-center top-1/2 transform -translate-y-1/2 mx-2 max-md:hidden max-xl:w-16 cursor-pointer hover:scale-105" src="../assets/icons/arrowRight.svg" alt="next-icon" />
        </div>
  </div>

</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { menuSlider } from '@/utils/menuSlider';
import { ref } from 'vue';

const slideIndex = ref(1);

const breakpoints = {
  100: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  550: {
    itemsToShow: 1.9,
    snapAlign: 'center',
  },
  670: {
    itemsToShow: 2.1,
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

const goToNextSlide = () => {
  slideIndex.value++;
};

const goToPreviousSlide = () => {
  slideIndex.value--;
};
</script>