module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        campushub: {
          navy: '#1F3A5F',
          orange: '#F28C28',
          white: '#FFFFFF'
        }
      },
      boxShadow: {
        premium: '0 15px 45px rgba(31, 58, 95, 0.12)'
      }
    }
  },
  plugins: []
};
