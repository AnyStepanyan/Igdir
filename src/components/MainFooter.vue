<template>
  <div class="flex justify-center items-center bg-footer-section bg-no-repeat bg-cover bg-center h-[220px]">
    <div class="flex justify-center items-center border-[2px] border-tan backdrop-blur-[2px] min-h-[150px] w-10/12 max-xl:w-11/12" >
      <div class="grid grid-cols-4 text-white text-base items-center gap-10 mx-5 max-xl:gap-7 max-lg:text-sm" style="grid-template-columns: 1fr 1fr 1.8fr 0.5fr;">
        <div>
          <img src="../assets/logo/logo.png" alt="logo" />
        </div>

        <div class="flex justify-between">
          <ul>
            <li>
              <router-link to="">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="">
                Our Halls
              </router-link>
            </li>
            <li>
              <router-link to="">
                Our Menu
              </router-link>
            </li>
          </ul>
          <div>
            <ul>
              <li>
                <router-link to="">
                  Aria Hall
                </router-link>
              </li>
              <li>
                <router-link to="">
                  Private Hall
                </router-link>
              </li>
              <li>
                <router-link to="">
                  Summer Hall
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="ml-8 max-xl:ml-0">
          <div class="flex items-center">
            <img src="../assets/icons/phoneFooter.svg" alt="phone-icon" />
            <p class="mx-2">+374 96 64-55-34</p>
          </div>
          <div class="flex items-center">
            <img src="../assets/icons/mail.svg" alt="mail-icon" />
            <p class="mx-2">info@igdir.am</p>
          </div>
          <div class="flex items-center">
            <img src="../assets/icons/map-pin.svg" alt="map-pin-icon" />
            <p class="mx-2">24/1 Hovhannisyan str., 0076 Yerevan, RA</p>
          </div>
        </div>

        <div>
          <div class="flex flex-col">
            <div>
              <p class="text-lg mb-4 max-lg:text-base">Follow Us</p>
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
  </div>
</template>

<script setup>
</script>