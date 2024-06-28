<template>
  <div 
    class="relative w-[416px] h-[516px] max-[1460px]:w-[365px] max-[1460px]:h-[427px] max-[1300px]:w-[306px] 
    max-[1300px]:h-[387px] max-[1130px]:w-[290px] max-[1130px]:h-[360px] max-lg:w-[306] max-lg:h-[387px] max-md:w-[200px] max-md:h-[250px]"
  >
    <router-link :to="path">
      <img class="w-full h-full object-cover" :src="image" :alt="name" />
      <div class="absolute top-0 w-full h-4/5 border-x-[1px] border-t-[1px] border-transparent hover:border-tan"></div>
      <div
        class="absolute flex justify-center items-center w-full h-1/5 px-6 bottom-0 border-[1px] border-tan backdrop-blur-sm max-md:px-2 max-md:justify-between lg:justify-between">
        <p class="text-2xl text-tan font-secondaryBold font-medium max-[1130px]:text-base max-lg:text-lg max-md:text-base">
          {{ name }}
        </p>
        <img class="w-14 max-md:w-10 md:hidden lg:block" src="../assets/icons/enter.svg" alt="enter-icon" />
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  path: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
</script>