import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
  googleFonts: [
    {
      name: "Bree Serif",
      styles: ["400"],
    },
    {
      name: "Open Sans",
      styles: ["400"],
    },
    {
      name: "Almendra Display",
      styles: ["400"],
    },
    {
      name: "Julius Sans One",
      styles: ["400"],
    },
  ],
})

export default typography
