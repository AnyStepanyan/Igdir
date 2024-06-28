<template>
  <header class="flex bg-black bg-opacity-10 font-sans min-h-24 tracking-wide fixed z-50 w-full backdrop-blur-2xl">
    <div class="flex flex-wrap justify-around py-3 gap-4 w-full items-center max-lg:justify-between">
      <router-link to="/" class="ml-6 max-md:ml-2">
        <img class="w-64 h-auto max-md:hidden max-xl:w-40 max-lg:w-60" src="../assets/logo/logo.svg" alt="logo" />
        <img class="w-36 h-auto md:hidden" src="../assets/logo/logoMobile.svg" alt="logo" />
      </router-link>
      <div>
        <button
          v-if="showMenu"
          class="lg:hidden fixed top-7 right-2 z-50 p-3"
          @click="showMenu = !showMenu"
        >
        <img class="w-4" src="../assets/icons/close.svg"  alt="close-icon" /> 
        </button>
        <nav>
          <ul class="flex max-lg:hidden">
            <li class="mt-3 mr-16">
              <router-link
                to="/"
                class="pb-3 text-white text-sm font-bold block relative 
                before: content-[''] before:absolute before:block before:w-full before:h-[2px]
                before:bottom-0 before:left-0 before:bg-tan before:scale-x-0  before:hover:scale-x-100
                before:origin-top-left before:transition before:ease-in before:duration-500"
                :class="$route.path === '/' && !isHovered ? 'before:scale-x-100' : ''"
                @mouseenter="handleMouseEnter" 
                @mouseleave="handleMouseLeave"
              >
                HOME
              </router-link>
            </li>
            <li class="mt-3 mr-16">
              <router-link
                to="/menu/"
                class="pb-3 text-white text-sm font-bold block relative
                before: content-[''] before:absolute before:block before:w-full before:h-[2px]
                before:bottom-0 before:left-0 before:bg-tan before:scale-x-0 before:hover:scale-x-100
                before:origin-top-left before:transition before:ease-in-out before:duration-500"
                :class="$route.path === '/menu/' && !isHovered  ? 'before:scale-x-100' : ''"
                @mouseenter="handleMouseEnter" 
                @mouseleave="handleMouseLeave"
              >
                MENU
              </router-link>
            </li>

            <li class="group/item pb-3 mt-3 mr-16 text-white text-sm font-bold block relative 
                before: content-[''] before:absolute before:block before:w-full before:h-[2px]
                before:bottom-0 before:left-0 before:bg-tan before:hover:scale-x-100 before:scale-x-0
                before:origin-top-left before:transition before:ease-in-out before:duration-300"
                :class="($route.path === '/aria-hall/' 
                || $route.path === '/private-hall/'
                || $route.path === '/summer-hall/') 
                && !isHovered  ? 'before:scale-x-100' : 'before:scale-x-0'"
                @mouseenter="handleMouseEnter" 
                @mouseleave="handleMouseLeave"
              >
                HALLS
              <img class="ml-1 inline-block" src="../assets/icons/downArrowhead.svg" alt="down-arrowhead" />
              <ul
                class="absolute mt-9 invisible opacity-0 bg-opacity-70 transition-all duration-700 rounded-xl shadow-lg bg-black space-y-3 -left-1 min-w-56 z-50 overflow-hidden px-4 py-2 border border-tan group-hover/item:visible group-hover/item:opacity-100"
              >
                <li class="py-1">
                  <router-link
                    to="/aria-hall/"
                    class="text-white text-sm font-bold block"
                  >
                    Aria hall
                  </router-link>
                </li>
                <li class="py-2">
                  <router-link
                    to="/private-hall/"
                    class="text-white text-sm font-bold block"
                  >
                    Private hall
                  </router-link>
                </li>
                <li class="py-2">
                  <router-link
                    to="/summer-hall/"
                    class="text-white text-sm font-bold block"
                    >Summer hall
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="mt-3">
              <router-link
                to="/blog/"
                class="pb-3 text-white text-sm font-bold block relative
                before: content-[''] before:absolute before:block before:w-full before:h-[2px]
                before:bottom-0 before:left-0 before:bg-tan before:hover:scale-x-100 before:scale-x-0
                before:origin-top-left before:transition before:ease-in-out before:duration-500"
                :class="$route.path === '/blog/' && !isHovered  ? 'before:scale-x-100' : ''"
                @mouseenter="handleMouseEnter" 
                @mouseleave="handleMouseLeave"
              >
                BLOG
              </router-link>
            </li>
          </ul>
      </nav>
      </div>

      <div class="flex max-lg:hidden">
        <a href="https://www.facebook.com/aria.hallbyigdir/" class="mr-3">
          <img src="../assets/icons/facebookLogo.svg" alt="facebook-logo" />
        </a>
        <a href="https://www.instagram.com/ariabyigdir/">
          <img src="../assets/icons/instagramLogo.svg" alt="instagram-logo" />
        </a>
        <div class="relative z-50 ml-12">
          <a href="tel:+37496645534" class="flex mr-8">
            <img src="../assets/icons/phone.svg" alt="phone-icon" />
            <p class="text-white pl-4">+374 (96) 64 55 34</p>
            </a>
          </div>
      </div>

      <div class="flex lg:hidden mr-3">
        <button @click="showMenu = !showMenu"> 
          <img src="../assets/icons/hamburger.svg" alt="hamburger" />
        </button>
      </div>
    </div>
    <MobileMenu v-if="showMenu" @close-menu="handleCloseMenu"/>
  </header> 
</template>
  
<script setup>
  import { ref } from 'vue';
  import MobileMenu from './MobileMenu'

  const showMenu = ref(false)
  const isHovered = ref(false)

  const handleMouseEnter = () => {
    isHovered.value = true;
  };

  const handleMouseLeave = () => {
    isHovered.value = false;
  };

  const handleCloseMenu = () => {
    showMenu.value = false;
};
</script>
  
  <style scoped>
</style>