<template>
  <div class="lg:hidden">
 
    <nav
      class="fixed flex flex-col justify-around items-start bg-nav-black right-0 top-0 w-96 h-screen overflow-hidden pt-32 max-[570px]:w-screen">
      <div class="absolute flex z-50  top-20 left-1/2 and transform -translate-x-1/2">
        <img class="w-60 h-auto" src="../assets/logo/logoMobile.svg" alt="logo" />
      </div>
      <ul class="place-self-center text-center">
        <li class="">
          <router-link to="/" class="text-lg py-4 font-bold block hover:opacity-50"
            :class="$route.path === '/' ? 'text-tan' : 'text-white'" @click="handleLinkClick">
            HOME
          </router-link>
        </li>
        <li class="">
          <router-link to="/menu/" class="text-lg py-4 font-bold blocK hover:opacity-50"
            :class="$route.path === '/menu/' ? 'text-tan' : 'text-white'" @click="handleLinkClick">
            MENU
          </router-link>
        </li>

        <li class="accordion-item text-lg py-4 ml-7 font-bold block hover:opacity-50" :class="$route.path === '/aria-hall/'
              || $route.path === '/private-hall/'
              || $route.path === '/summer-hall/'
              ? 'text-tan' : 'text-white'" @click="toggle">
          HALLS
          <img class="ml-1 inline-block" src="../assets/icons/downArrowhead.svg" alt="down-arrowhead" />
        </li>
        <ul class="text-white text-base ml-1" v-if="isOpen">
          <li class="">
            <router-link to="/aria-hall/" class="pb-2 block hover:opacity-50"
              @click="handleLinkClick">
              Aria hall
            </router-link>
          </li>
          <li class="">
            <router-link to="/private-hall/" class="py-2 block hover:opacity-50"
              @click="handleLinkClick">
              Private hall
            </router-link>
          </li>
          <li class="">
            <router-link to="/summer-hall/" class="pt-2 pb-4 block hover:opacity-50"
              @click="handleLinkClick">
              Summer hall
            </router-link>
          </li>
        </ul>
        <li class="">
          <router-link to="/blog/" class="text-lg font-bold block hover:opacity-50"
            :class="$route.path === '/blog/' ? 'text-tan' : 'text-white'" @click="handleLinkClick">
            BLOG
          </router-link>
        </li>
      </ul>
      <div class="relative z-50 place-self-center">
        <a href="tel:+37496645534" class="flex justify-center border-t border-tan py-10 px-10">
          <img src="../assets/icons/phone.svg" alt="phone-icon" />
          <p class="text-white pl-4">+374 (96) 64 55 34</p>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value;
}

import { defineEmits } from 'vue';


const emit = defineEmits(['close-menu'])

const handleLinkClick = () => {
  emit('close-menu'); // Emit custom event to close menu in parent
};

</script>