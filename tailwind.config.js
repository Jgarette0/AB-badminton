/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'dahlia': ['Dahlia Medium', 'sans-serif'],
      },
      
      rotate: {
        '360': '360deg',
      },
      fontSize: {
        '6.5xl' : '3rem',
        '6xl': '3.5rem', // Adjust the value as needed
        '7xl': '9rem'
      },
      colors: {
        beige: "#ebdbc2",
        gold: "#d4b34c",
        plant: "#0d0c22",
        plantito: "#232329",
        lightgold : '#dcbc53',
        'selection': '#ff0000'

      },
      height: {
        'titlesm' : '15rem',
        'title' : '28rem',
        'h-100': '36rem',
        'h-150': '49rem',        
        'h-125': '44rem',
      },
      width: {
        'w-100': '28rem',
        '1k': '1026px',
        '4h' : '480px',
        '3.1h': '330px'
      },
    },
  },
  plugins: [],
};
