/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./index.html",
  ],
  theme: {
    extend: {
    colors: {
      "primary": "#1D5101",
    },
    },
  },
  plugins: [],
}

