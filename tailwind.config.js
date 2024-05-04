/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          light: "#198754",
          DEFAULT: "#198754",
          dark: "#198754",
        },
        "gray-100": {
          light: "#F8F9FA",
          DEFAULT: "#F8F9FA",
          dark: "#F8F9FA",
        },
        white: {
          light: "#FFFFFF",
        },
        "gray-600": {
          light: "#6C757D",
        },
        "gray-400": {
          light: "#CED4DA",
        },
        "gray-900": {
          light: "#212529",
        },
      },
    },
  },
  darkMode: false,
  plugins: [require("daisyui")],
};
