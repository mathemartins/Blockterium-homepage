/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2B3589",
        blue: "#1C2DC7",
        primaryFontColor: "#E2E5FF",
        secondaryColor: "#000",
        secondaryFontColor: "#c1c3d1",
        grey: "rgba(255, 255, 255, 0.5)",
        Lightgrey: "rgba(255, 255, 255, 0.8)",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        LightBlue: "#4a59e6",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        darkOrange: "#EB5757",
        darkestGrey: "#1E1E1E",
        darkestBlue: "#17152C",
        GreyOne: "#1E1F34",
        GreyTwo: "#41424F",
      },
      fontFamily: {
        assistant: ["Assistant"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1400px",
      xl: "1900px",
    },
  },
  plugins: [],
};
