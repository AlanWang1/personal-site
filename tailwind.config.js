/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      beige: "#FFFCF5",
      ink: "#293053",
      white: "#FFFFFF",
      blue: "#253275",
      green: "#54B079",
    },
    fontFamily: {
      serif: ['"Lora"', "serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
