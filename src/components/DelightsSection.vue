<template>
  <div class="flex flex-col justify-between bg-delights bg-no-repeat bg-cover bg-center h-[700px] lg:h-[900px] max-md:h-[475px]">
    <div
      class="text-[50px] font-secondaryBold pt-40 ml-24 max-lg:text-3xl lg:pt-10 max-lg:ml-20 max-md:text-xl max-md:pt-6 max-md:ml-0 max-md:text-center">
      <h2 class="text-white ">GASTRONOMIC DELIGHTS</h2>
      <h2 class="text-tan ">A FLAVOURSPHERE</h2>
      <h2 class="text-tan">JOURNEY</h2>
    </div>
    <DelightsCarousel />
  </div>

</template>
<script setup>
import DelightsCarousel from './DelightsCarousel .vue';
</script>