import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF8F5",
        ivory2: "#F5EEE5",
        charcoal: "#1E1815",
        rose: {
          DEFAULT: "#B5793D",
          light: "#E8CBA0",
          soft: "#F2E4D0",
        },
        burgundy: {
          DEFAULT: "#2E2119",
          dark: "#1A130D",
        },
        gold: {
          DEFAULT: "#D9A24B",
          soft: "#EFD9AE",
        },
        insta: {
          orange: "#F9CE34",
          pink: "#EE2A7B",
          purple: "#6228D7",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        script: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "satin-sweep":
          "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.55) 40%, transparent 60%)",
        "insta-gradient":
          "linear-gradient(135deg, #F9CE34 0%, #EE2A7B 55%, #6228D7 100%)",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(110, 44, 59, 0.25)",
        card: "0 10px 30px -12px rgba(36, 26, 29, 0.15)",
      },
      keyframes: {
        seal: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        sweep: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(150%) skewX(-20deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        seal: "seal 18s linear infinite",
        sweep: "sweep 1.4s ease-in-out",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
