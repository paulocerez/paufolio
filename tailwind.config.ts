import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-bricolage)', 'sans-serif'],
        'serif': ['var(--font-bricolage)', 'sans-serif'],
        'bricolage': ['var(--font-bricolage)', 'sans-serif'],
      },
      colors: {
        'cream': '#F2F7EC',
        'peach': '#C5D9B0',
        'coral': '#89A878',
        'gold': '#5C7A4E',
        'warm-dark': '#162414',
        'warm-brown': '#1E3318',
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '1rem',
        md: 'calc(1rem - 2px)',
        sm: 'calc(1rem - 4px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
export default config
