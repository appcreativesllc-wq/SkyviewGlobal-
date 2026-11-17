module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-navy': '#0B1728',
        'premium-blue': '#1769E0',
        'cloud-bg': '#F5F7FA',
        'slate-gray': '#667085',
        'dark-text': '#172033',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '5rem',
      },
    },
  },
  plugins: [],
};
