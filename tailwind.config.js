/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#030303',
          dark: '#0a0a0a',
          card: 'rgba(10, 10, 10, 0.65)',
          border: 'rgba(255, 255, 255, 0.05)',
          cyan: 'hsl(180, 100%, 50%)',
          purple: 'hsl(270, 90%, 60%)',
          emerald: 'hsl(142, 70%, 50%)',
          text: '#94a3b8',
          light: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'grid-scroll': 'grid-scroll 20s linear infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 10px rgba(6, 182, 212, 0.15), 0 0 20px rgba(6, 182, 212, 0.05)' },
          '100%': { boxShadow: '0 0 25px rgba(168, 85, 247, 0.3), 0 0 45px rgba(168, 85, 247, 0.15)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        'grid-scroll': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' }
        }
      }
    },
  },
  plugins: [],
}
