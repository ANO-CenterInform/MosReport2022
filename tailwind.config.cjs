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
          900: '#1A3055',
        },
        mosRose: {
          500: '#EC4437',
        },
      },
      maxWidth: {
        'bootstrap-full': '1140px',
        'bootstrap-md': '785px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
