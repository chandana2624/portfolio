/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          lavender: "#E6E6FA",
          "light-blue": "#ADD8E6",
          "soft-pink": "#FFB6C1",
          mint: "#98FF98",
          peach: "#FFE5B4",
          sky: "#87CEEB"
        }
      },
      borderRadius: {
        xl: "20px"
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};
