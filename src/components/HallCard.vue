<template>
  <div
    class="relative w-[416px] h-[516px] max-[1460px]:w-[365px] max-[1460px]:h-[427px] border-[1px]
      max-[1300px]:w-[306px] max-[1300px]:h-[387px] max-[1130px]:w-[290px] max-[1130px]:h-[360px] max-lg:w-[306] 
      max-lg:h-[387px] border-transparent hover:border-tan"
  >
    <router-link :to="path">
      <img class="w-full h-full object-cover" :src="image" :alt="name" />
      <div
        class="flex justify-between items-center relative bottom-20 px-6 py-[18px] border-[1px] border-tan backdrop-blur-sm">
        <p class="text-2xl text-white font-medium max-[1130px]:text-sm max-lg:text-lg">{{ name }}</p>
        <img class="w-14 h-11" src="../assets/icons/enter.svg" alt="enter-icon" />
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