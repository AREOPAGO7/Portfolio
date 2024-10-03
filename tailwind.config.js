module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust the paths based on your project structure
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 -50px 90px 0 rgba(255, 255, 255, 0.12) !important",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],

      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "San Francisco",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      green: "#32a852",
      black: "#000000",
      gray: "#101725",
      white2: "#121063",
      metal: "#b6b6b6",
      tahiti: "#0e0e0e",
      silver: "#6f747c",
      "bubble-gum": "#e0daff",
      bermuda: "#363636",
      gris: "#686868",
      whiteG: "#f1f0ee",
    },
  },
  plugins: [],
};
