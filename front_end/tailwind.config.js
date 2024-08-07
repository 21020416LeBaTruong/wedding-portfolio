/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

module.exports = {
  content: ["./src/**/*.{html,js,jsx}", flowbite.content(),],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
      animation: {
        'loop-scroll': 'loop-scroll 25s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },  
      scrollBehavior: {
        smooth: 'smooth',
      }, 
    },
  },
  plugins: [flowbite.plugin(),],
}

