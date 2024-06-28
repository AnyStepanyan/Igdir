<template>
  <div class="flex justify-end max-[500px]:justify-start w-full pl-2">
    <Carousel class="w-4/5 max-[500px]:w-full" :breakpoints="breakpoints" :wrap-around="true">
      <Slide class="pr-2 max-[500px]:pr-1">
        <HallEntryCard 
          :path="hallCalrd1?.path"
          :title="hallCalrd1?.title"
          :image="hallCalrd1?.image" 
        />
      </Slide> 
      <Slide class="pr-2 max-[500px]:pr-1">
        <HallEntryCard 
          :path="hallCalrd2?.path"
          :title="hallCalrd2?.title"
          :image="hallCalrd2?.image" 
        />
      </Slide> 
    </Carousel>
  </div>   
</template>
  
<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { defineProps } from 'vue';
import HallEntryCard from '../components/HallEntryCard';

defineProps({
  hallCalrd1: {
    type: Object,
    required: true
  },
  hallCalrd2: {
    type: Object,
    required: true
  }
});
  
const breakpoints = {
  100: {
    itemsToShow: 1.3,
    snapAlign: 'start',
  },
  380: {
    itemsToShow: 1.4,
    snapAlign: 'start',
  },
  440: {
    itemsToShow: 1.5,
    snapAlign: 'start',
  },
};
</script>