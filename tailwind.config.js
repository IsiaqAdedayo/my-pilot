module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin:{
        "md": '-336px',
        "mlc": "36%",
      },
      inset:{
        "cus": "85%"
      },
      height:{
        "cusHe": "83.3vh"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
