<template>
  <HallEntrySection 
    background="bg-private-hall" 
    :title="require('@/assets/privateHallPage/textImages/privateHallText.png')"
    :hallCalrd1="hallCalrd1"
    :hallCalrd2="hallCalrd2"  
  />
  <div v-for="(slideInfo, index) in privateHallSliders" :key="index">
    <HallGallerySection 
      :slideNumber="slideInfo.number"
      :slideiIntro="slideInfo.intro"
      :slideImages="slideInfo.images"
      hallName="private"
    />
  </div>
  <ReservationSection />

</template>
  
<script setup>
import HallGallerySection from '../components/HallGallerySection';
import ReservationSection from '../components/ReservationSection';
import HallEntrySection from '../components/HallEntrySection';
import { privateHallSliders } from '@/utils/privateHallSliders';
import { ref } from 'vue';

const hallCalrd1 =  ref({
  path: '/aria-hall/',
  title: require('@/assets/ariaHallPage/textImages/ariaHallTextCard.svg'),
  image: require('@/assets/ariaHallPage/images/ariaHallCard.png')
});

const hallCalrd2 = ref({
  path: '/summer-hall/',
  title: require('@/assets/summerHallPage/textImages/summerHallTextCard.svg'),
  image: require('@/assets/summerHallPage/images/summerHallCard2.png')
})
</script>
  