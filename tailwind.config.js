/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: '#050510',
        card: '#0c0c1e',
        cyan: '#00d4ff',
        purple: '#8b5cf6',
        emerald: '#10b981',
        amber: '#f59e0b',
      },
    },
  },
  plugins: [],
}
