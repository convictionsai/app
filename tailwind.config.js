/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#141416",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
