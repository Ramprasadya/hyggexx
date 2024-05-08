/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xsm: "340px",
      xsm2: "420px",
      sm: "568px",
      sm2: "650px",
      md: "768px",
      md2: "800px",
      md3: "860px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}
