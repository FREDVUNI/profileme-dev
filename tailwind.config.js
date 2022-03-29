module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        9.5: "2.375rem",
        14: "3.5rem",
        18: "4.5rem",
        19: "4.75rem",
        22: "5.5rem",
        56: "14rem",
        58: "14.5rem",
        62: "15.5rem",
        66: "16.5rem",
        68: "17rem",
        70: "17.5rem",
        74: "18.5rem",
        76: "19rem",
        78: "19.5rem",
        82: "20.5rem",
        84: "21rem",
        86: "21.5rem",
        88: "22.0rem",
        90: "22.5rem",
        92: "23rem",
        94: "23.5rem",
        128: "32rem",
      },
      transitionProperty: {
        height: "height",
      },
      colors: {
        brand: "#0891b2",
        "brand-alt": "#06b6d4",
        dark: {
          300: "#b5b9d6",
          400: "#53566b",
          500: "#45455f",
          600: "#393950",
          700: "#29293b",
          800: "#1d1d2b",
          900: "#181824",
        },
        light: {
          100: "#f8f8f8",
          200: "#dee1e6",
          300: "#c9ced6",
          400: "#9ba1ab",
          500: "#6f7580",
          600: "#4d525c",
          700: "#3c414a",
          800: "#1e2126",
          900: "#0d0f12",
        },
      },
      fontFamily: {
        display: ["aktiv-grotesk-extended", "sans-serif"],
        body: ["aktiv-grotesk", "sans-serif"],
        code: ["source-code-pro", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
