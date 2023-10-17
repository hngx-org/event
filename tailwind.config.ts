import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fae9ef",
          75: "#eba4be",
          100: "#e37ea3",
          200: "#d6467b",
          300: "#ce2060",
          400: "#901643",
          500: "#7e143b",
        },
        secondary: {
          50: "#f2e6e6",
          75: "#cb9696",
          100: "#b56b6b",
          200: "#962b2b",
          300: "#800000",
          400: "#5a0000",
          500: "#4e0000",
        },
        grey: {
          10: "#fafafa",
          20: "#f5f5f5",
          30: "#ebebeb",
          40: "#dedede",
          50: "#bfbfbf",
          60: "#b0b0b0",
          70: "#a3a3a3",
          80: "#949494",
          90: "#858585",
          100: "#757575",
          200: "#666666",
          300: "#575757",
          400: "#4a4a4a",
          500: "#3b3b3b",
          600: "#2e2e2e",
          700: "#1c1c1c",
          800: "#0d0d0d",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
