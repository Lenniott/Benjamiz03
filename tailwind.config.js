/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        // Light colors
        "primary-light": "#F8FAFC",
        "secondary-light": "#F8FAFC",
        "ternary-light": "#F1F5F9",

        // Dark colors
        "primary-dark": "#1E293B",
        "secondary-dark": "rgb(30 41 59)",
        "ternary-dark": "#0F172A",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [],
};
