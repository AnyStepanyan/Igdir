<template>
  <HallEntrySection 
    background="bg-summer-hall" 
    :title="require('@/assets/summerHallPage/textImages/summerHallText.png')"
    :hallCalrd1="hallCalrd1"
    :hallCalrd2="hallCalrd2" 
  />
  <HallWelcome 
    background="bg-summer-hall-welcome"
    :image="require('@/assets/summerHallPage/images/welcomeImage.png')"
    text1="At its heart, a serene fountain adds to the charm, offering a soothing backdrop of gently flowing water." 
    text2="Whether you are here for a wedding, a corporate event, or a casual gathering, 
      Summer Hall provides a picturesque setting that will leave you and your guests with unforgettable memories."
  />
  <HallGallerySection 
    :titleDesktop="require('@/assets/ariaHallPage/textImages/galleryTextDesktop.png')"
    :titleMobile="require('@/assets/ariaHallPage/textImages/galleryTextMobile.png')"
    :slideImages="summerHallSlider"
    hallName="aria"
  />
</template>
  
<script setup>
import HallEntrySection from '../components/HallEntrySection';
import HallWelcome from '../components/HallWelcome';
import HallGallerySection from '../components/HallGallerySection';
import { summerHallSlider } from '@/utils/summerHallSlider';
import { ref } from 'vue';

const hallCalrd1 =  ref({
  path: '/private-hall/',
  title: require('@/assets/privateHallPage/textImages/privateHallTextCard.svg'),
  image: require('@/assets/privateHallPage/images/privateHallCard.png')
});

const hallCalrd2 = ref({
  path: '/aria-hall/',
  title: require('@/assets/ariaHallPage/textImages/ariaHallTextCard.svg'),
  image: require('@/assets/ariaHallPage/images/ariaHallCard.png')
})
</script>
