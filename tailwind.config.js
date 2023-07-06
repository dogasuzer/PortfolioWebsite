/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#B76EFF',
        accent: ' #3D85C6',
        highlight: 'rgb(255, 215, 0)',
        light: '#f4f5f4', // Light mode background color
        dark: '#333333' // Dark mode background color
      },
      textColor: {
        primary: '#B76EFF',
        accent: ' #3D85C6',
        highlight: '#FFD700',
        light: '#f4f5f4', // Light mode background color
        dark: '#333333' // Dark mode background color
      },
      ringColor: {
        primary: '#B76EFF',
        accent: ' #3D85C6',
        highlight: '#FFD700',
        light: '#f4f5f4', // Light mode background color
        dark: '#333333' // Dark mode background color
      },
      perspective: {
        none: 'none',
        sm: '500px',
        md: '1000px',
        lg: '2000px',
        xl: '4000px'
      },
      rotate: {
        0: '0',
        45: '45deg',
        90: '90deg',
        180: '180deg',
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg'
      }
    }
  },
  plugins: []
};
