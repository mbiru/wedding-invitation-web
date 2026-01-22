/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding-pink': '#FFE4E1',
        'wedding-rose': '#FFB6C1',
        'wedding-lavender': '#E6E6FA',
        'wedding-cream': '#FFF8DC',
        'wedding-sky': '#87CEEB',
        'wedding-gold': '#FFD700',
      },
      fontFamily: {
        'elegant': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
