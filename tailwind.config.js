const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        default: "0 0 12px 0 rgb(62 28 131 / 10%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
