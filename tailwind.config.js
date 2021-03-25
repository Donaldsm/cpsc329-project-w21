module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fira: [
          "FiraCode"
        ]
      }
    },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
