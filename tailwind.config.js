/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#feffc2', 
        secondary:"#fef08a",  
        button: '#0c0c0c',
        

      },
       backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #ffff99, #ffffff)',

      },
      
    },
  },
  plugins: [],
}

