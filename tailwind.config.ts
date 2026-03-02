import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        header: 'var(--color-header)',
        body: 'var(--color-body)',
        accent: 'var(--color-accent)',
        primary: 'var(--color-primary-button)',
        'primary-hover': 'var(--color-primary-button-hover)',
        'button-text': 'var(--color-button-text)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        serif: ['var(--font-serif)'],
        body: ['var(--font-body)'],
      },
      maxWidth: {
        content: '1100px',
      },
      boxShadow: {
        calm: '0 8px 30px rgba(46, 58, 77, 0.08)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
