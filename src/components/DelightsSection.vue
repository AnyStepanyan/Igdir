<template>
  <div class="flex flex-col justify-between bg-delights bg-no-repeat bg-cover bg-center h-[991px] max-md:h-[475px]">
    <div class="text-6xl pt-40 ml-24 font-semibold max-lg:text-3xl max-lg:pt-20 max-lg:ml-20 max-md:text-xl max-md:pt-6 max-md:ml-6">
      <div>
        <h2 class="text-white ">GASTRONOMIC DELIGHTS</h2>
      </div>
      <div>
        <h2 class="text-tan">A FLAVORSPHERE</h2>
      </div>
      <div>
        <h2 class="text-tan">JOURNEY</h2>
      </div>
    </div>
    <DelightsCarousel />
  </div>

</template>
<script setup>
import DelightsCarousel from './DelightsCarousel .vue';
</script>