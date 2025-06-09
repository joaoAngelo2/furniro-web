/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hint-discount-red": "#E97171",
        "hint-new-green": "#2EC1AC",
        "dark-text": "#242424",
        "gray-text": "#898989",
        "bg-light-cream": "#FAF3EA",
        "golden-brown": "#B88E2F",
        "light-bg-gray": "#F4F5F7",
        "light-gray-line": "#B0B0B0",
        "light-pagination-bg": "#F9F1E7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "fundo-home":
          "url('/src/assets/98fb219fa11f805aade2224f1d6658764a2395df.jpg')",
        "dining-img": "url('/src/assets/home-1.png')",
        "living-img":
          "url('/src/assets/b7e392a7f3961ca2b1edab00f7a7640b3c2ed666.png')",
        "bedroom-img": "url('/src/assets/bedroom.png')",
        "inner-peace": "url('/src/assets/living.png')",
        "beatiful-room-2":
          "url('/src/assets/acc48179d1b18b523420e79dda1e92951ecde49b.png')",
      },
      colors: {
        "amarelo-bloco": "#FFF3E3",
        "amarelo-botoes": "#B88E2F",
        primary: "#F9F1E7",
        secundary: "#B88E2F",
        prata: "#9F9F9F",
        cinza: "#D9D9D9",
      },
      spacing: {
        62.99563: "62.99563rem",
        44.75: "44.75rem",
        "altura-browser": "30rem",
        "bloco-home-largura": "40.1875rem",
        "bloco-home-altura": "27.687rem",
      },
    },
  },
  plugins: [],
};
