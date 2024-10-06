/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'teen': '0.6255rem', // Adiciona um novo tamanho de texto
      },
      screens: {
        'xs': '500px',
      },
      colors: {
        ligth: {
          // Cores para texto
          primary: '#000000',
          secondary: '#BDC2CF',
          tertiary: '#AEAEAE',
          highlight: '#FD5553',
          accent: '#51B156',

          // Cor de fundo
          screen: '#F7F7FA',

          // Cor de fundo dos containers
          container: '#FFFFFF',
          selected: '#F5F5F5',
          detail: '#FBFBFB',
          detailSpan: '#FED4D4',


          // Bordas
          border: '#51B156',
        },
        dark: {
          // Cores para texto
          primary: '#FFFFFF',
          secondary: '#BDC2CF',
          tertiary: '#AEAEAE',
          highlight: '#02AAAC',
          accent: '#02AAAC',

          // Cor de fundo
          screen: '#0F0F0F',

          // Cor de fundo dos containers
          container: '#090809',
          selected: '#1D1D1D',

          detail: '#121012',
          detailSpan: '#002627',
          // Bordas
          border: '#474236',
        }
      }
    },
  },
  plugins: [],
}

// primary: '#ff4500',
//     secondary: '#9ca3af',
//     background: '#1f2937',
//     text: '#f9fafb',