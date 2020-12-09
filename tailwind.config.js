module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screen: {
      xs: "300px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1800px",
    },
    color: {
      black: "#000000",
      white: "#FFFFFF",
    },
    gray: {
      darkest: '#1f2d3d',
      dark: '#3c4858',
      DEFAULT: '#c0ccda',
      light: '#e0e6ed',
      lightest: '#f9fafc',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
