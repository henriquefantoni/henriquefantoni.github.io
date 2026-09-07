/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./games/**/*.{html,js}",
    "./main.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00aaff",
          hover: "#0090d9",
        },
        secondary: {
          DEFAULT: "#ffaa00",
          hover: "#e69900",
        },
        tiktok: {
          DEFAULT: "#fe2c55",
          hover: "#e02447",
        },
        background: "#121212",
        surface: "#1e1e1e",
        "surface-dark": "#0d0d0d",
        "text-light": "#f0f0f0",
        "text-dimmed": "#aaaaaa",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
