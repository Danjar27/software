module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans"],
      },
      colors: {
        blue: {
          DEFAULT: "#0063A3",
          light: "#5B96DD",
          super: "#D6F2FF",
        },
        accent: {
          DEFAULT: "#2F2E41",
          light: "#454057",
        },
        red: {
          DEFAULT: "#E71D36",
          hover: "#ff5359",
          light: "#FFF0F2",
        },
        gray: {
          DEFAULT: "#B9B9B9",
          light: "#D5D5D5",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
