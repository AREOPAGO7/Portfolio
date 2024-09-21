module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the paths based on your project structure
  ],
  theme: {
    extend: {

      boxShadow: {
        'custom': '0 4px 60px 0 rgba(255, 255, 255, 0.3) !important',
      },
      

    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': '#32a852',
      'black': '#000000',
      'gray': '#101725',
      'white2': '#121063',
      'metal': '#b6b6b6',
      'tahiti': '#0e0e0e',
      'silver': '#6f747c',
      'bubble-gum': '#ff77e9',
      'bermuda': '#363636',}
  },
  plugins: [],
}
