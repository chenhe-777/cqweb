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
      colors: {
        // Light theme colors
        primary: {
          light: '#0070f3',
          DEFAULT: '#0070f3',
        },
        secondary: {
          light: '#00d9ff',
          DEFAULT: '#00d9ff',
        },
        // Dark theme colors
        'primary-dark': '#00d9ff',
        'secondary-dark': '#ff0080',
        
        // Custom background colors
        'bg-light': '#ffffff',
        'bg-light-secondary': '#f8f9fa',
        'bg-dark': '#0a0a0a',
        'bg-dark-secondary': '#1a1a1a',
        
        // Text colors
        'text-light': '#1a1a1a',
        'text-light-secondary': '#666666',
        'text-dark': '#ffffff',
        'text-dark-secondary': '#cccccc',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Golden ratio scaling from 16px base
        'xs': '0.618rem',
        'sm': '0.764rem',
        'base': '1rem',
        'lg': '1.236rem',
        'xl': '1.528rem',
        '2xl': '1.888rem',
        '3xl': '2.335rem',
        '4xl': '2.886rem',
        '5xl': '3.564rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00d9ff, 0 0 10px #00d9ff, 0 0 15px #00d9ff' },
          '100%': { boxShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 30px #00d9ff' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config 