/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00FF94',
        'neon-pink': '#FF2E63',
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'monospace'],
        // Optional: Override default sans so `font-sans` bhi Orbitron ho
        sans: ['var(--font-orbitron)', 'monospace'],
      },
    },
  },
  plugins: [],
};
