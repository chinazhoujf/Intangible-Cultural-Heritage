/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f4e4dc',
        'cream-soft': '#faf0e8',
        'cream-edge': '#e8d5c8',
        ink: '#3d1f1f',
        'ink-soft': '#5c2a2a',
        'ink-muted': '#7a4a4a',
        'ink-subtle': '#a07868',
        vermilion: '#b8392c',
        'vermilion-deep': '#9a2e22',
        'vermilion-soft': '#d45a4e',
        'vermilion-light': '#e8b8a8',
        bronze: '#8a7a5c',
        'bronze-soft': '#a89578',
        'bronze-faint': '#d8ccb0',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Cormorant Garamond"', 'STZhongsong', 'serif'],
        sans: ['"Noto Sans SC"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', '"Noto Serif SC"', 'serif'],
      },
      letterSpacing: {
        ultra: '0.3em',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        32: '8rem',
        40: '10rem',
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft-card': '0 1px 0 rgba(255,255,255,0.9), 0 20px 60px rgba(184,57,44,0.12)',
        'soft-ink-card': '0 1px 0 rgba(255,255,255,0.04), 0 20px 60px rgba(61,31,31,0.25)',
      },
    },
  },
  plugins: [],
}
