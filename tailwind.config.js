/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    { pattern: /^bg-/, layers: ['utilities'] },
    { pattern: /^text-/, layers: ['utilities'] },
    { pattern: /^shadow-/, layers: ['utilities'] },
    { pattern: /^cursor-/, layers: ['utilities'] },
  ],
}