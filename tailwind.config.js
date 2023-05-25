const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./src/**/*.{js,ts,jsx,tsx}','node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}"','node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'],
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
});