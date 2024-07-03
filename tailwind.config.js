const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(52, 50, 104)', // Define primary color
        textPrimaryColor: 'rgba(52, 50, 104, 0.8)', // Define primary color
      },
      fontFamily: {
        Inter: '"Inter", sans-serif',
        // Prata: '"Prata", serif',
        // Oswald: '"Oswald", sans-serif'
      }
    },
  },
  plugins: [flowbite.plugin()],
}

