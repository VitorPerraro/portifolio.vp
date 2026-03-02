/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        electric: '#FF0000',
        pitch: '#000000',
        pure: '#FFFFFF',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(255, 0, 0, 0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(255, 0, 0, 0.7)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-red': 'linear-gradient(90deg, transparent, #FF0000, transparent)',
        'border-red': 'linear-gradient(90deg, transparent, #FF0000, transparent, #FF0000, transparent)',
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(255, 0, 0, 0.3)',
        'red-glow-lg': '0 0 40px rgba(255, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
