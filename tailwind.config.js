/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#102033",
        harbor: "#28708a",
        sage: "#5f8f7b",
        sand: "#d6c7aa",
        fog: "#eef6f4",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.09)",
      },
    },
  },
  plugins: [],
};
