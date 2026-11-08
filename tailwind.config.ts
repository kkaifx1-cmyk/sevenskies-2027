import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: {
          950: "#08182F", // Deepest Blue canvas (No black)
          900: "#0B2046", // Sapphire base canvas
          850: "#0F2B5C", // Rich card surface
          800: "#163B75", // Deep blue border
          700: "#1D4ED8", // Royal blue core
          600: "#2563EB", // Vibrant electric blue
          500: "#3B82F6", // Bright sky blue
          400: "#60A5FA", // Azure light
          300: "#93C5FD", // Soft sky blue
          200: "#BFDBFE",
          100: "#DBEAFE",
          50: "#EFF6FF",
        },
        skyGlow: {
          600: "#0284C7",
          500: "#0EA5E9",
          400: "#38BDF8",
          300: "#7DD3FC",
          100: "#E0F2FE",
        },
        pureWhite: {
          DEFAULT: "#FFFFFF",
          ice: "#F0F7FF",
          muted: "#E0ECFC",
          dim: "#C3D9F8",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-subtle": "float 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
