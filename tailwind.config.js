module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/typography"),require('daisyui')],
  daisyui: {
    themes: ["emerald"],
  },
};