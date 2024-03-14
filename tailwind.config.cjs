const { parkwindPlugin } = require("@park-ui/tailwind-plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  plugins: [parkwindPlugin],
};
