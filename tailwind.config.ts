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
        'crimson': ['var(--font-crimson)', 'serif'],
        'source-serif': ['var(--font-source-serif)', 'serif'],
        'rock-salt': ['var(--font-rock-salt)', 'cursive'],
      },
      colors: {
        'bw': {
          'white': '#ffffff',
          'black': '#000000',
          'gray-50': '#fafafa',
          'gray-100': '#f5f5f5',
          'gray-200': '#e5e5e5',
          'gray-300': '#d4d4d4',
          'gray-400': '#a3a3a3',
          'gray-500': '#737373',
          'gray-600': '#525252',
          'gray-700': '#404040',
          'gray-800': '#262626',
          'gray-900': '#171717',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
