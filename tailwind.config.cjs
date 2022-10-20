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
          100: '#C0E0F7',
          700: '#0C4E98',
          900: '#213b90',
        },
        mosRose: {
          500: '#EC4437',
        },
      },
      maxWidth: {
        'bootstrap': '1140px',
      },
    },
  },
  plugins: [],
}
