/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#4eadb9"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
