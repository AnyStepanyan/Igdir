<template>
  <div class="flex items-center place-self-end w-11/12 mb-10 max-md:w-full max-md:mb-5">
    <div class="shrink basis-3/12 max-md:basis-4/12 max-md:hidden" @click="goToNextSlide">
      <img class="w-52 max-xl:w-44" src="../assets/icons/next.svg" alt="next-icon" />
    </div>
    <Carousel class="basis-9/12 max-md:basis-full" v-model="slideIndex" :breakpoints="breakpoints" :wrap-around="true">
      <Slide class="px-2" v-for="(slide, index) in delightsSlider" :key="index">
        <img class="border-[1px] border-tan" :src="slide.image" alt="delights" />
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';  
import { Carousel, Slide } from 'vue3-carousel';
import { delightsSlider } from '@/utils/delightsSlider';
import { ref } from "vue";

const slideIndex = ref(1)

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
    itemsToShow: 2,
    snapAlign: 'start',
  },
  1020: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
};

const goToNextSlide = () => {
  slideIndex.value++;
}
</script>