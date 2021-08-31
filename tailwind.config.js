const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-lg": "url('/src/assets/svg/background.svg')",
      },
    },
    colors: {
      emc: {
        black: "#212429",
        white: "#FFFFFF",
        brokenWhite: "#F6F6F6",
        green: "#23E09C",
        gray: "#7F7F7F",
        background: "#E5E5E5",
        lightGray: "#BABABA",
      },
    },

    screens: {
      phone: { max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      laptop: { min: "1024px", max: "1279px" },
      desktop: { min: "1280px", max: "1535px" },
      desktopxl: { min: "1536px" },
    },
    borderRadius: {
      "explore": "30px",
      "xl": "0.75rem"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
