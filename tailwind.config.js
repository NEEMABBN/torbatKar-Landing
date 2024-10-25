/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#006EFF",
        Base: "#F5F7fa"
      }
    },
  },
  plugins: [],
}
