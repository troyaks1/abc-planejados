/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      boxShadow: {
        'upward': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    }
  },
  plugins: [],
  safelist: [ // List for safing dinamic property generation.
    { pattern: /^bg-/, layers: ['utilities'] }, // Danimic background color
    { pattern: /^text-/, layers: ['utilities'] }, // Dinamic text prop
    { pattern: /^shadow-/, layers: ['utilities'] }, // Dinamic shadow
    { pattern: /^cursor-/, layers: ['utilities'] }, // Dinamic cursor
    { pattern: /^h-/, layers: ['utilities'] }, // Dinamic height
    { pattern: /^w-/, layers: ['utilities'] }, // Dinamic width
    { pattern: /^p-/, layers: ['utilities'] }, // Dinamic padding
  ],
}