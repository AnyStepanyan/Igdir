<template>
  <div
    :class="['flex', 'flex-col', 'justify-end', 'mt-neg-36', 'bg-no-repeat', 'bg-cover', 'bg-center', 'h-screen', 'w-full',  background, 'max-md:justify-center']">
    <div class="flex justify-between pr-10 pb-10 gap-24 max-lg:px-5 max-lg:gap-20 max-md:flex-col max-mlg:gap-28 max-md:p-0 max-md:mt-20">
      <div class="flex flex-col place-self-end mb-8 ml-12 max-lg:mb-0 max-md:place-self-center max-md:ml-0 max-md:mt-28">
        <div class="flex items-center text-white text-base mb-8">
          <img class="mr-1" src="../assets/icons/star.png" alt="star" />
          <p>Experience best food with the best view</p>
        </div>
        <img class="max-lg:w-[350px] max-md:w-[218px] max-md:place-self-center" :src="title" alt="hall" />
      </div>
      <div class="flex flex-col gap-6 max-md:flex-row max-md:justify-center max-[580px]:hidden">
        <HallEntryCard 
          :path="hallCalrd1?.path"
          :title="hallCalrd1?.title"
          :image="hallCalrd1?.image" 
        />
        <HallEntryCard 
          :path="hallCalrd2?.path"
          :title="hallCalrd2?.title"
          :image="hallCalrd2?.image" 
        />
      </div>
      <div class="relative w-full my-24 min-[580px]:hidden">
        <HallCardSlider :hallCalrd1="hallCalrd1" :hallCalrd2="hallCalrd2" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import HallEntryCard from '../components/HallEntryCard';
import HallCardSlider from '../components/HallCardSlider';

defineProps({
  background: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  hallCalrd1: {
    type: Object,
    required: true
  },
  hallCalrd2: {
    type: Object,
    required: true
  }
});
</script>
