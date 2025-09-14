/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        instrumentSerif: ['"Instrument Serif"', 'serif'],
        instrumentSans: ['"Instrument Sans"', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
       float: {
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
        float: 'float 10s ease-in-out infinite', // slow drift
      },
    
    },
  
  plugins: [],
}



