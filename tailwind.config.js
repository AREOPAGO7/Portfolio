module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the paths based on your project structure
  ],
  theme: {
    extend: {

      boxShadow: {
        'custom': '0 4px 60px 0 rgba(255, 255, 255, 0.2) !important',
      },
      

    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'Roboto': ['Roboto', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#101725',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#1a1a1a',
      'silver': '#6f747c',
      'bubble-gum': '#ff77e9',
      'bermuda': '#363636',}
  },
  plugins: [],
}
