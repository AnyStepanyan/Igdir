<template>
  <div>
    <nav
      class="fixed flex flex-col justify-around items-end bg-nav-black right-0 top-0 w-96 h-screen overflow-hidden pt-32 pr-5">
      <ul class="">
        <li class="">
          <router-link to="/" class="text-lg py-4 font-bold block hover:bg-darkGray"
            :class="$route.path === '/' ? 'text-tan' : 'text-white'" @click="handleLinkClick">
            HOME
          </router-link>
        </li>
        <li class="">
          <router-link to="/menu/" class="text-lg py-4 font-bold block hover:bg-darkGray"
            :class="$route.path === '/menu/' ? 'text-tan' : 'text-white'" @click="handleLinkClick">
            MENU
          </router-link>
        </li>

        <li class="accordion-item text-lg py-4 font-bold block hover:bg-darkGray" :class="$route.path === '/aria-hall/'
              || $route.path === '/private-hall/'
              || $route.path === '/summer-hall/'
              ? 'text-tan' : 'text-white'" @click="toggle">
          HALLS
          <img class="ml-1 inline-block" src="../assets/icons/downArrowhead.svg" alt="down-arrowhead" />
        </li>
        <ul v-if="isOpen">
          <li class="">
            <router-link to="/aria-hall/" class="text-white text-lg py-4 pl-2 font-bold block hover:bg-darkGray"
              @click="handleLinkClick">
              Aria hall
            </router-link>
          </li>
          <li class="">
            <router-link to="/private-hall/" class="text-white text-lg py-4 pl-2 font-bold block hover:bg-darkGray"
              @click="handleLinkClick">
              Private hall
            </router-link>
          </li>
          <li class="">
            <router-link to="/summer-hall/" class="text-white text-lg py-4 pl-2 font-bold block hover:bg-darkGray"
              @click="handleLinkClick">
              Summer hall
            </router-link>
          </li>
        </ul>
        <li class="">
          <router-link to="/blog/" class="text-white text-lg py-4 font-bold block hover:bg-darkGray"
            :class="$route.path === '/blog/' ? 'text-tan' : 'text-white'" @click="handleLinkClick">
            BLOG
          </router-link>
        </li>
      </ul>
      <div class="relative z-50 ">
        <a href="tel:+37496645534" class="flex justify-center border-t border-tan py-10 px-10">
          <img src="../assets/icons/phone.svg" alt="phone-icon" />
          <p class="text-white pl-4">+374-96-64-55-34</p>
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