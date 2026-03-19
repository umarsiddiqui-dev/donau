/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { inter: ['Inter', 'sans-serif'] },
      colors: {
        primary: { 
          50:'#EFF6FF',
          100:'#DBEAFE',
          200:'#BFDBFE',
          300:'#93C5FD',
          400:'#60A5FA',
          500:'#4A96EC',
          600:'#3F8AE2',
          700:'#3577C8' 
        },
        dark: { 
          800:'#1E293B',
          900:'#0F172A' 
        }
      }
    },
  },
  plugins: [],
}
