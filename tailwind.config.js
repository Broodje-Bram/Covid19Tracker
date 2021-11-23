module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary' : '#c32865',
      'backgrounddark' : '#212121',
      'lightdark' : '#121212',
      'pinkhover' : '#da2f72'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'upink' : '#c32865',
      'dark' : '#212121',
    }),
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
