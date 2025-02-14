import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      md:'600px',
    },
    extend: {
      colors: {
        background:  "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      times: ["Times New Roman", "serif"],
      courier:["Courier New, Courier, monospace","cour"]
    },
  },
  plugins: [],
} satisfies Config;
