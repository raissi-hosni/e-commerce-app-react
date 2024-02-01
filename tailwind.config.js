import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'm':'285px',
      'xm': '379px',
      'xsm':'435px',
      'sm': '640px',
      'md': '768px',
      'lmd':'871px',
      'lg': '1024px',
      'lxmd': '1067px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      keyframes: {
        robanim: {
          '0%': {right:"-250px"}, 
          '100%':{ transform:"translateX(-120vh)" }
        }
      },
      animation: {
        robanim: 'robanim 20s linear infinite',
      }
    },
  },
  plugins: [],
}