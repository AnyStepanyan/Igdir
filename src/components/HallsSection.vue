<template>
  <div class="flex items-center bg-halls bg-no-repeat bg-cover bg-top h-[950px] max-lg:h-[850px] w-full">

    <div class="flex flex-col items-center gap-4 text-white mt-10">
      <div class="flex flex-col justify-between w-fit text-6xl max-lg:text-3xl max-md:text-xl">
        <h2>Our Halls</h2>
      </div>
      <div>
        <img class="max-md:w-24" src="../assets/lines/lineCenter.svg" alt="line">
      </div>
      <div class="text-center text-lg w-5/12 mb-7 max-lg:w-7/12 max-md:text-xs max-md:w-11/12">
        <p>
          We present to your attention the various halls of our complex for organizing events and gatherings in all the
          seasons of the year. Depending on the occasion and the number of guests, you can choose our restaurant halls,
          private halls, tavern or Aria hall where you will seem to have gone back to the old days’ Armenia.
        </p>
      </div>

      <HallsCarousel />

      <div class="grid grid-cols-3 gap-x-20 w-fit max-[1080px]:gap-x-12 max-lg:hidden">
        <div v-for="(item, index) in halls" :key="index">
          <HallCard :path="item.path" :image="item.image" :name="item.name" />
        </div>
      </div>

      <div class="py-12 max-md:w-4/5">
        <img src="../assets/lines/lineEnd.svg" alt="line" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { halls } from '@/utils/halls';
import HallCard from '../components/HallCard';
import HallsCarousel from './HallsCarousel.vue';
</script>