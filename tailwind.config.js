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
        'welcome-section': "url('@/assets/backgroundImages/welcomeSection.png')",
        'halls-section': "url('@/assets/backgroundImages/hallsSection.png')",
        'menu-section': "url('@/assets/backgroundImages/menuSection.png')",
        'footer-section': "url('@/assets/backgroundImages/footer.png')",
      }
    },
  },
  plugins: [],
}
