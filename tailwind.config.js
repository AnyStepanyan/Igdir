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
        footer: "url('@/assets/backgroundImages/footer.png')",
        'footer-mobile': "url('@/assets/backgroundImages/mobileFooter.png')",
        'aria-hall': "url('@/assets/ariaHallPage/backgroundImages/ariaHall.png')",
        'private-hall': "url('@/assets/backgroundImages/privateHall.jpg')",
        'summer-hall': "url('@/assets/backgroundImages/summerHall.jpg')",
      },
    },
  },
  plugins: [],
};
