module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    colors: {
      indigo: {
        brand:'#6970F2',
      },
      green: {
        brand: '#8DF7D7',
      }
    }
  }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}