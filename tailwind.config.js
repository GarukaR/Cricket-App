module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        web1: "#311d3f",
        web2: "#522546",
        web3: "#88304e",
        web4: "#e23e57",
      },
    },
    fontFamily: {
      cursive: ["Lobster", "cursive"],
      sans: ["Montserrat", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
