/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        watermark: {
          '0%': { transform: 'translateX(0) rotate(45deg)' },
          '100%': { transform: 'translateX(-50%) rotate(45deg)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        'loading-bar': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'text-load': {
          '0%': { 
            transform: 'scale(0.5)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        shimmer: 'shimmer 8s linear infinite',
        watermark: 'watermark 20s linear infinite',
        'slide-in': 'slide-in 5s ease-out forwards',
        typing: 'typing 5s steps(20) forwards',
        blink: 'blink 0.5s step-end infinite',
        'loading-bar': 'loading-bar 5s ease-in-out forwards',
        'text-load': 'text-load 5s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease forwards'
      }
    },
  },
  plugins: [],
};


