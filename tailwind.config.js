/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'fundo-home' :  "url('/src/assets/98fb219fa11f805aade2224f1d6658764a2395df.jpg')",
        'dining-img' :  "url('/src/assets/home-1.png')",
        'living-img' : "url('/src/assets/b7e392a7f3961ca2b1edab00f7a7640b3c2ed666.png')",
        'bedroom-img': "url('/src/assets/bedroom.png')",
        'inner-peace': "url('/src/assets/living.png')",
        'beatiful-room-2': "url('/src/assets/acc48179d1b18b523420e79dda1e92951ecde49b.png')",
      },
      colors: {
       'amarelo-bloco': '#FFF3E3',
       'amarelo-botoes':'#B88E2F',
      },
      spacing: {
        '62.99563' : '62.99563rem',
        '44.75': '44.75rem',
        'altura-browser': '30rem', 
        'bloco-home-largura':'40.1875rem',
        'bloco-home-altura':'27.687rem',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
