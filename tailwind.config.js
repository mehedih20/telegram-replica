/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "color-blue": "#3390ec",
        "color-dark": "#212121",
        "color-purple": "#766ac8",
      },
      backgroundColor: {
        "color-blue": "#3390ec",
        "color-dark": "#212121",
        "color-purple": "#766ac8",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "overflow-y": "scroll",
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none" /* WebKit browsers */,
        },
      });
    },
  ],
};
