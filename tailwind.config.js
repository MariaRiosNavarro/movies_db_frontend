/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["dark"],
  },
  theme: {
    extend: {
      colors: {
        bgColor_darkgreen: "#283A45",
        primaryColor_green: "#2A9D8F",
        secondaryColor_red: "#A16171",
        accentColor_yellow: "#E9C46A",
      },
    },
  },
  plugins: [require("daisyui")],
};
