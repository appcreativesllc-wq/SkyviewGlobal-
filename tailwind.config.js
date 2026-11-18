module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-navy': '#11243A',
        'dark-navy': '#0C1930',
        'premium-blue': '#1769E0',
        'cloud-bg': '#F3F5F8',
        'subtle-gray': '#EAEDF1',
        'primary-text': '#111827',
        'secondary-text': '#566273',
        'border-color': '#E3E7EC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '5rem',
      },
    },
  },
  plugins: [],
};
