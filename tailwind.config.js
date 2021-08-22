module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '128': '32rem'
      }      
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
  ],
}