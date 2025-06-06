/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'hint-discount-red': '#E97171',
        'hint-new-green': '#2EC1AC',
        'dark-text': '#242424',
        'gray-text': '#898989', 
        'bg-light-cream': '#FAF3EA',
        'golden-brown': '#B88E2F',
        'light-bg-gray': '#F4F5F7',
        'light-gray-line': '#B0B0B0',
        'light-pagination-bg': '#F9F1E7',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      }

    },
  },
  plugins: [],
};
