/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe-magnolia': {
          primary: '#4CAF50', 
          secondary: '#6B7280',
          dark: '#1F2937',   
          light: '#F9FAFB',  
          accent: '#F59E0B',   
        },
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'], 
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe')",
      },
      borderRadius: {
        'custom': '30% 100% 0 0 / 100px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('tailwind-scroll-behavior')(), 
  ],
}
