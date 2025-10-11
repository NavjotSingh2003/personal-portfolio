// tailwind.config.js
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "#6366f1", // Indigo
      accent: "#c026d3", // Pink
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
},

theme: {
    extend: {
      colors: {
        primary: "#6366F1", // Indigo-500
      },
      boxShadow: {
        glow: "0 0 15px rgba(99, 102, 241, 0.6)",
        glowSm: "0 0 8px rgba(99, 102, 241, 0.4)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
