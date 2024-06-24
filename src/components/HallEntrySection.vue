<template>
  <div
    :class="['flex', 'flex-col', 'justify-end', 'mt-neg-36', 'bg-no-repeat', 'bg-cover', 'bg-center', 'h-[860px]', background, 'max-md:justify-around', 'max-md:h-[640px]']">
    <div class="flex justify-between pr-10 pb-10 gap-24 max-lg:pr-5 max-lg:gap-20 max-md:flex-col max-md:gap-36 max-md:p-0 max-md:mt-20">
      <div class="flex flex-col place-self-end ml-52 mb-8 max-lg:ml-16 max-lg:mb-0 max-md:place-self-center max-md:ml-0">
        <div class="flex items-center text-white text-base mb-8">
          <img class="mr-1" src="../assets/icons/star.png" alt="star" />
          <p>Experience best food with the best view</p>
        </div>
        <img class="max-lg:w-[350px] max-md:w-[218px] max-md:place-self-center" :src="title" alt="hall" />
      </div>
      <div class="flex flex-col gap-6 max-md:flex-row max-md:justify-center">
        <HallEntryCard path="/private-hall/"
          :title="require('@/assets/privateHallPage/textImages/privateHallTextCard.svg')"
          :image="require('@/assets/privateHallPage/images/privateHallCard.png')" />
        <HallEntryCard path="/summer-hall/"
          :title="require('@/assets/summerHallPage/textImages/summerHallTextCard.svg')"
          :image="require('@/assets/summerHallPage/images/summerHallCard.png')" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import HallEntryCard from '../components/HallEntryCard';

defineProps({
  background: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },

});
</script>