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
  safelist: [
    { pattern: /^bg-/, layers: ['utilities'] },
    { pattern: /^text-/, layers: ['utilities'] },
    { pattern: /^shadow-/, layers: ['utilities'] },
    { pattern: /^cursor-/, layers: ['utilities'] },
  ],
}