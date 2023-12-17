# React + Vite

npm create vite@latest your-project-name -- --template react

cd your-project-name

npm install react-router-dom

npm i uuid

# Tailwind + Daisyui

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

npm i -D daisyui@latest

# - IN tailwind.config.js:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["lemonade", "forest", "autumn"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
```

# Repo

git init

git add .

git commit -m "first commit"

# IMAGES

Foto von <a href="https://unsplash.com/de/@dmjdenise?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Denise Jans</a> auf <a href="https://unsplash.com/de/fotos/vier-rollenfilme-liegen-auf-weissem-tisch-Lq6rcifGjOU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
