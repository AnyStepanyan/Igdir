<template>
  <div class="relative flex flex-col justify-center gap-5 w-full">
    <Carousel class="basis-4/5 mb-5" v-model="slideIndex" :breakpoints="breakpoints" :wrap-around="true">
      <Slide class="pr-14 max-md:px-2" v-for="(slide, index) in slideImages" :key="index">
        <img 
          class="w-full h-4/5 border-[1px] border-tan max-md:h-auto object-cover max-xl:h-full" 
          :src="slide.image" 
          alt="aria-hall" 
        />
      </Slide> 
    </Carousel>
    <div class="absolute -bottom-8 flex justify-end gap-10 right-20 max-2xl:-bottom-16 max-md:hidden">
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
import { ref } from "vue";
import { defineProps } from 'vue';
  
defineProps({
  slideImages: {
    type: Array,
    required: true
  },
});

const slideIndex = ref(1);

const breakpoints = {
  100: {
    itemsToShow: 1.2,
    snapAlign: 'center',
  },
  767: {
    itemsToShow: 1.3,
    snapAlign: 'start',
  },
};

const goToNextSlide = () => {
  slideIndex.value++;
};

const goToPreviousSlide = () => {
  slideIndex.value--;
};
</script>