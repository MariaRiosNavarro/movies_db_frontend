/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#283A45",
          primary: "#2A9D8F",
          secondary: "#E9C46A",
          accent: "#A16171",
        },
      },
      "dark",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
