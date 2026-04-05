import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        script: ["'Great Vibes'", "cursive"],
        body: ["'Jost'", "sans-serif"],
        sanskrit: ["'Tiro Devanagari Hindi'", "serif"],
      },
      colors: {
        cream: {
          50: "#FDFAF4",
          100: "#FAF4E8",
          200: "#F5E8D0",
          300: "#EDD5B0",
        },
        gold: {
          50: "#FDF8EC",
          100: "#F9EDD0",
          200: "#F1D898",
          300: "#E8C060",
          400: "#D4A030",
          500: "#B8860B",
          600: "#9A6F08",
          700: "#7A5506",
          800: "#5C3F04",
          900: "#3D2A02",
        },
        maroon: {
          50: "#FDF2F4",
          100: "#F9E0E5",
          200: "#F2B8C4",
          300: "#E8849A",
          400: "#D94F6F",
          500: "#C41E3A",
          600: "#A01830",
          700: "#7D1225",
          800: "#5C0D1B",
          900: "#3D0812",
        },
        rose: {
          blush: "#F2B8C4",
          deep: "#C41E3A",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "petal-fall": "petalFall 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        petalFall: {
          "0%": { transform: "translateY(-10px) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4A030 0%, #F1D898 40%, #D4A030 60%, #B8860B 100%)",
        "maroon-gradient": "linear-gradient(135deg, #7D1225 0%, #C41E3A 50%, #7D1225 100%)",
        "cream-gradient": "linear-gradient(180deg, #FDFAF4 0%, #FAF4E8 50%, #F5E8D0 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
