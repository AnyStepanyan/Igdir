<template>
  <div
    class="flex justify-center items-center bg-footer bg-no-repeat bg-cover bg-center h-[220px] max-md:h-[500px] max-md:bg-footer-mobile"
  >
    <div 
      class="flex justify-center items-center border-[2px] [border-image:linear-gradient(to_right,#CAA78541,#caa785,#CAA78536,#caa785,#CAA78530)_30] 
      backdrop-blur-[2px] min-h-[150px] w-11/12 max-2xl:w-10/12 max-xl:w-[98%] max-md:w-11/12 max-md:h-[90%]"
    >
      <div 
        class="flex justify-between items-center text-white text-base w-full gap-1 mx-16 max-2xl:mx-8 
        max-lg:text-sm max-xl:mx-2 max-lg:gap-0 max-md:flex-col max-md:gap-y-7"
      >
        <div class="shrink basis-1/4 max-lg:basis-1/6">
          <img class="max-md:w-44 max-md:hidden" src="../assets/logo/logo.svg" alt="logo" />
          <img class="w-44 h-auto md:hidden" src="../assets/logo/logoMobile.svg" alt="logo" />
        </div>

        <div class="flex shrink gap-36 basis-1/4 max-2xl:gap-20 max-lg:gap-9 max-md:gap-5">
          <ul class="max-md:grid max-md:text-right max-md:gap-4">
            <li>
              <router-link to="/">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="">
                Our Halls
              </router-link>
            </li>
            <li>
              <router-link to="/menu/">
                Our Menu
              </router-link>
            </li>
          </ul>
          <ul class="max-md:grid max-md:gap-4">
            <li>
              <router-link to="/aria-hall/">
                Aria Hall
              </router-link>
            </li>
            <li>
              <router-link to="/private-hall/">
                Private Hall
              </router-link>
            </li>
            <li>
              <router-link to="/summer-hall/">
                Summer Hall
              </router-link>
            </li>
          </ul>
        </div>

        <div class="shrink basis-4/12 max-lg:basis-5/12 max-md:grid max-md:gap-4">
          <div class="flex items-center max-md:justify-center">
            <img class="w-3.5 h-3.5" src="../assets/icons/phoneFooter.svg" alt="phone-icon" />
            <p class="ml-2">+374 96 64-55-34</p>
          </div>
          <div class="flex items-center max-md:justify-center">
            <img class="w-3.5 h-3.5" src="../assets/icons/mail.svg" alt="mail-icon" />
            <p class="ml-2">info@igdir.am</p>
          </div>
          <div class="flex items-center max-md:justify-center">
            <img class="w-3.5 h-3.5" src="../assets/icons/map-pin.svg" alt="map-pin-icon" />
            <p class="ml-2">24/1 Hovhannisyan str., 0076 Yerevan, RA</p>
          </div>
        </div>

        <div class="flex flex-col basis-1/12 max-lg:basis-[10%]">
          <div>
            <p class="text-lg mb-4 max-lg:text-base max-lg:mb-2">Follow Us</p>
          </div>
          <div class="flex">
            <a href="https://www.facebook.com/aria.hallbyigdir/" class="mr-3">
              <img src="../assets/icons/facebookLogo.svg" alt="facebook-logo" />
            </a>
            <a href="https://www.instagram.com/ariabyigdir/">
              <img src="../assets/icons/instagramLogo.svg" alt="instagram-logo" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>