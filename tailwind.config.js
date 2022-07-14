/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": {
          DEFAULT: "#4EADB9",
          50: "#D2EAED",
          100: "#C3E3E7",
          200: "#A6D6DC",
          300: "#88C8D0",
          400: "#6BBBC5",
          500: "#4EADB9",
          600: "#3B8A94",
          700: "#2B656C",
          800: "#1B3F44",
          900: "#0B1A1C"
        },
        "custom-red": {
          DEFAULT: "#F64C51",
          50: "#FFFBFB",
          100: "#FEE7E8",
          200: "#FCC1C2",
          300: "#FA9A9D",
          400: "#F87377",
          500: "#F64C51",
          600: "#F3171D",
          700: "#C80A10",
          800: "#92070B",
          900: "#5D0507"
        },
        "custom-beige": "#F6F4E9"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
