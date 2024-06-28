<template>
  <div :class="['flex', 'bg-no-repeat', 'bg-cover', 'bg-center', 'h-[950px]', background, 'w-full', 'max-lg:h-[550px]', 'max-xl:h-[700px]', 'max-2xl:h-[800px]',
    text3 ? 'max-md:h-[850px]' : 'max-md:h-[760px]', 
    text3 ? 'max-sm:h-[780px]' : 'max-sm:h-[700px]', 
    text3 ? 'max-[520px]:h-[700px]' : 'max-[520px]:h-[620px]']"
  >
    <div class="flex items-center ml-8 gap-8 max-md:flex-col-reverse max-md:ml-0">
      <div class="flex shrink basis-[45%] max-md:basis-0 max-md:w-8/12">
        <img  :src="image" alt="aria-hall" />
      </div>
      <div class="flex shrink flex-col justify-end text-white basis-2/5 text-right gap-6 
      max-lg:gap-4 max-md:basis-0 max-md:w-4/5 max-md:text-center max-sm:w-4/5 max-lg:w-[400px]">
        <div>
          <p class="text-6xl max-lg:text-5xl max-md:text-3xl">Welcome</p>
        </div>
        <div class="flex justify-end max-md:justify-center">
          <img class="max-md:hidden" src="../assets/lines/lineStarLeft.png" alt="line" />
          <img class="md:hidden" src="../assets/lines/lineStarCenter.png" alt="line" />
        </div>
        <div class="text-lg max-lg:text-sm max-md:text-sm">
          <p class="mb-3.5">
            {{ text1 }}
          </p>
          <p class="mb-3.5">
            {{ text2 }}
          </p>
          <p class="mb-3.5">
            {{ text3 }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  background: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  text1: {
    type: String,
    required: true
  },
  text2: {
    type: String,
    required: true
  },
  text3: {
    type: String,
    required: false
  },
});
</script>