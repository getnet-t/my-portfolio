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
        dark: {
          bg: '#080a0f',
          surface: '#0f1420',
          elevated: '#141c2c',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(255, 255, 255, 0.15)',
          muted: '#8b949e',
        },
        accent: {
          DEFAULT: '#10b981', // Refined Emerald
          light: '#34d399',
          dark: '#059669',
          glow: 'rgba(16, 185, 129, 0.18)',
          cyan: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(16, 185, 129, 0.15)',
        'glow': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
        'glow-lg': '0 0 40px -10px rgba(16, 185, 129, 0.35)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
