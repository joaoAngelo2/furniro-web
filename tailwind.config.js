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
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
