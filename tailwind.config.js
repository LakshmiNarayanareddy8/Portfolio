/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00f5a0",
        dark: "#050816",
        card: "#0f1624",
      },
    },
  },
  plugins: [],
};
