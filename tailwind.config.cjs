/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Futura', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        mosBlue: {
          900: '#213b90',
        },
        mosRose: {
          500: '#EC4437',
        },
      }
    },
  },
  plugins: [],
}
