module.exports = {
  purge: [
    './public/index.html',
    './src/*.js',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        widing: '.35em',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
