import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        serif: ['var(--font-playfair)'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
      },
      borderRadius: {
        'custom': '30% 100% 0 0 / 100px',
      },
    },
  },
  plugins: [],
}
export default config