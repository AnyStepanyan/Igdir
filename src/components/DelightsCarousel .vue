<template>
  <div class="flex items-center place-self-end w-11/12 mb-10 max-md:w-full max-md:mb-5">
    <div class="shrink basis-3/12 max-md:basis-4/12" @click="goToNextSlide">
      <img class="w-52 max-xl:w-44" src="../assets/icons/next.svg" alt="next-icon" />
    </div>
    <Carousel class="basis-9/12 max-md:7/12" v-model="slideIndex" :breakpoints="breakpoints" :wrap-around="true">
      <Slide class="pl-3" v-for="(slide, index) in delightsSlider" :key="index">
        <img :src="slide.image" alt="delights" />
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
    itemsToShow: 1,
    snapAlign: 'start',
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