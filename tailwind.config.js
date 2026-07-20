/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080b10",
        panel: "#10151f",
        panelSoft: "#151c29",
        line: "#273244",
        cyanBrand: "#28d7c3",
        amberBrand: "#f2b84b",
        roseBrand: "#f45d75"
      },
      boxShadow: {
        glow: "0 24px 70px rgba(40, 215, 195, 0.12)",
        panel: "0 22px 60px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};
