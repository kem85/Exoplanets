/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#CD5C08", // Strong orange
        "background-cream": "#FFF5E4", // Soft cream
        "light-green": "#C1D8C3", // Muted light green
        "dark-green": "#6A9C89", // Saturated dark green
      },
    },
  },
  plugins: [],
};
