/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'green': '#27A376',
        'lightblue': '#A0AEC0',
        'subtitle': '#687588',
        'error': '#E03137'
      },
      borderColor: {
        'input': '#E9EAEC ',
        'blue': '#111827 '
      },
      backgroundColor: {
        'blue': '#111827 ',
        'green': '#27A376',
        'graylight': '#FAFAFA',
        'view': '#27A376',
        'edit': '#2F78EE',
        'delete': '#E03137'
      },
    },
  },
  plugins: [],
}


