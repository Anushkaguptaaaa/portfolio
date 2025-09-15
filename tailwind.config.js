/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-soft': '#FFC0CB',
        'pink-light': '#FFD1DC',
        'rose-blush': '#F8B3C5',
        'cream': '#FFFDD0',
        'lavender': '#E6E6FA',
        'gold-subtle': '#D4AF37',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'fraunces': ['Fraunces', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'coquette': '0 4px 10px rgba(248, 179, 197, 0.2)',
      },
      borderRadius: {
        'coquette': '1rem',
      },
    },
  },
  plugins: [],
}