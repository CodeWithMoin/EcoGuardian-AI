/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "poppins-regular": ["Poppins-Regular"],
        "poppins-bold": ["Poppins-Bold"],
        "poppins-medium": ["Poppins-Medium"],
        "poppins-semibold": ["Poppins-SemiBold"],
        "poppins-thin": ["Poppins-Thin"],
      },
    },
    colors: {
      primary: {
        DEFAULT: "#009C82",
        light: "#04C8A3",
      },
      grey: {
        DEFAULT: "#CCCCCC",
        100: '#AAAAAA'
      },
      black: {
        DEFAULT: "#333333",
        600: "#666666",
        100: "#000000",
      },
      accent: {
        DEFAULT: "#FFFFFF",
        light: "#F5F5F5",
      },
      danger: {
        DEFAULT: "#FF3126",
        light: "#FF5C50",
      },
    },
  },
  plugins: [],
};