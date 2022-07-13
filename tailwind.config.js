/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#4eadb9",
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
        }
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
