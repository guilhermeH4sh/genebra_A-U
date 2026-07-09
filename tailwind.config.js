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
        primary: "#D46A43", // Terracota arquitetônico
        "on-primary": "#0A0A0A",
        background: "#0A0A0A", // Preto profundo dominante
        surface: "#121212", // Grafite escuro sutil
        "on-surface": "#F4F2ED", // Off-white editorial
        "on-background": "#F4F2ED", // Off-white editorial
        secondary: "#8E8C87", // Cinza fosco quente
        "on-surface-variant": "#8E8C87",
        "outline-variant": "#1F1F1F", // Borda sutil
        "surface-container-low": "#0F0F0F",
        "surface-container-lowest": "#050505"
      },
      borderRadius: {
        DEFAULT: "0px", // Bordas duras e retas para visual arquitetônico editorial
        lg: "0px",
        xl: "0px",
        full: "9999px"
      },
      spacing: {
        gutter: "24px",
        "section-gap": "160px", // Mais espaço em branco para design editorial
        "margin-mobile": "24px",
        "margin-desktop": "80px",
        unit: "8px"
      },
      fontFamily: {
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-caps": ["Inter", "sans-serif"],
        "headline-lg": ["Fraunces", "serif"],
        "display-xl": ["Fraunces", "serif"],
        "headline-lg-mobile": ["Fraunces", "serif"],
        "mono-label": ["Inter", "sans-serif"]
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
