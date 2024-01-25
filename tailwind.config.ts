import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dGray: "#F2F3F5",
        purple: "#8372BF",
        lightPurple: "#EFEFF7",
        boldPurple: "#7825C6",
        gray: {
          200: "#93929B",
        },
        black: {
          100: "#white",
          200: "#1f1b2d",
          500: "#1F1B2D",
        },
        borderColor: "#474553",
        blue: "#3B76F2",
        green: "#03C98B",
        red: "red",
        white: "#FFFFFF",
        redOrange: "#FC2E20",
      },
    },
  },
  plugins: [],
};
export default config;
