/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E29A67", // Cobre sofisticado
        "on-primary": "#0E0E0E",
        background: "#0E0E0E", // Preto profundo uniforme
        surface: "#161616", // Grafite escuro para blocos
        "on-surface": "#F5F5F5", // Off-white para títulos/textos principais
        "on-background": "#F5F5F5", // Off-white
        secondary: "#A3A3A3", // Cinza médio para textos secundários
        "on-surface-variant": "#A3A3A3", // Compatibilidade
        "outline-variant": "#2A2A2A", // Borda nítida
        "surface-container-low": "#121212", // Seções ligeiramente destacadas
        "surface-container-lowest": "#060606" // Footer profundo
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        gutter: "24px",
        "section-gap": "120px",
        "margin-mobile": "24px",
        "margin-desktop": "80px",
        unit: "8px"
      },
      fontFamily: {
        "body-lg": ["Montserrat", "sans-serif"],
        "body-md": ["Montserrat", "sans-serif"],
        "label-caps": ["Montserrat", "sans-serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "display-xl": ["Playfair Display", "serif"],
        "headline-lg-mobile": ["Playfair Display", "serif"],
        "mono-label": ["Space Grotesk", "monospace"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "32px", letterSpacing: "0.01em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "28px", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.2em", fontWeight: "700" }],
        "headline-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-xl": ["84px", { lineHeight: "96px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["36px", { lineHeight: "44px", fontWeight: "600" }],
        "mono-label": ["11px", { lineHeight: "14px", fontWeight: "500" }]
      }
    },
  },
  plugins: [],
}
