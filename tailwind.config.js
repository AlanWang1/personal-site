/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      beige: "#FFFCF5",
      ink: "#293053",
      white: "#FEFEFC",
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

// tweak around to see if like B as the last digit more (a bit more yellow)
