<template>
  <HallEntrySection 
    background="bg-aria-hall" 
    :title="require('@/assets/ariaHallPage/textImages/ariaHallText.png')"
    :hallCalrd1="hallCalrd1"
    :hallCalrd2="hallCalrd2" 
  />
  <HallWelcome 
    background="bg-aria-hall-welcome"
    :image="require('@/assets/ariaHallPage/images/welcomeImage.png')"
    text1="Aria Hall is a beautiful and spacious venue, perfect for hosting a variety of events. 
      Its elegant design combines modern luxury with classic charm, creating a stunning setting for weddings, 
      corporate events, parties, and more." 
    text2="The hall can accommodate both small gatherings and large celebrations, offering flexibility for any occasion."
    text3="With top-notch facilities and a dedicated team, Aria Hall ensures a memorable experience for all guests."
  />
  <HallGallerySection 
    :titleDesktop="require('@/assets/ariaHallPage/textImages/galleryTextDesktop.png')"
    :titleMobile="require('@/assets/ariaHallPage/textImages/galleryTextMobile.png')"
    :slideImages="ariaHallSlider"
    hallName="aria"
  />
</template>
  
<script setup>
import HallEntrySection from '../components/HallEntrySection';
import HallWelcome from '../components/HallWelcome';
import HallGallerySection from '../components/HallGallerySection';
import { ariaHallSlider } from '@/utils/ariaHallSlider';
import { ref } from 'vue';

const hallCalrd1 =  ref({
  path: '/private-hall/',
  title: require('@/assets/privateHallPage/textImages/privateHallTextCard.svg'),
  image: require('@/assets/privateHallPage/images/privateHallCard.png')
});

const hallCalrd2 = ref({
  path: '/summer-hall/',
  title: require('@/assets/summerHallPage/textImages/summerHallTextCard.svg'),
  image: require('@/assets/summerHallPage/images/summerHallCard.png')
})
</script>
