/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondaryMedium: ['Ogg-Medium', 'sans-serif'],
        secondaryBold: ['Ogg-Bold', 'sans-serif'],
        tertiary: ['Rufina', 'sans-serif'],
      },
      colors: {
        'light-tan': '#d2b58c',
        tan: '#CAA785',
        darkGray: '#3f444b',
        'black-background': '#080c0f',
        'medium-gray': '#090a0d',
        'dark-gray-background': '#00000057',
        'nav-black':'#101318',
      },
      backgroundImage: {
        welcome: "url('@/assets/backgroundImages/welcomeSection.png')",
        halls: "url('@/assets/backgroundImages/hallsSection.png')",
        menu: "url('@/assets/backgroundImages/menuSection.png')",
        delights: "url('@/assets/backgroundImages/delightsSection.png')",
        story: "url('@/assets/backgroundImages/storySection.png')",
        footer: "url('@/assets/backgroundImages/footer.png')",
        'footer-mobile': "url('@/assets/backgroundImages/mobileFooter.png')",
        'aria-hall': "url('@/assets/ariaHallPage/backgroundImages/ariaHall.png')",
        'aria-hall-welcome': "url('@/assets/ariaHallPage/backgroundImages/welcomeBackground.png')",
        'aria-hall-gallery': "url('@/assets/ariaHallPage/backgroundImages/galleryBackground.png')",
        'private-hall': "url('@/assets/privateHallPage/backgroundImage/privateHall.jpg')",
        'summer-hall': "url('@/assets/summerHallPage/backgroundImages/summerHall.jpg')",
        'summer-hall-welcome': "url('@/assets/summerHallPage/backgroundImages/welcomeBackground.png')",
        'instagram': "url('@/assets/backgroundImages/instagramBackground.png')",
      },
      keyframes: {
        down: {
          '25%': {
            opacity: 1
            },
           '33.3%': {
            opacity: 1,
            transform: 'translateY(0.6 * 5.2)'
           },
           '66.6%': {
            opacity: 1,
            transform: 'translateY(0.6 * 5.2)'
           },
           '100%': {
            opacity: 0,
            transform: 'translateY(0.6 * 8)'
           }
        },
      },
      animation: {
        down1: 'down 3s ease-out 1s infinite',
        down2: 'down 3s ease-out 2s infinite',
      }
    },
  },
  plugins: [],
};
