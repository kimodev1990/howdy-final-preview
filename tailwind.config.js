/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        bauhaus: ["bauhaus", "sans-serif"],
      },
      colors: {
        bgWebsite: "#4D4D4D",
        labelColor: "#8FADAE",
        buttonColor: "#F4EAD4",
        emailColor: "#F4EAD4",
        popButtonBG: "#8FADAE",
        signupColor: "#4D4D4D",
        bgWhilePopUp: "#CAC2B2",
      },
    },
  },
  plugins: [],
};
