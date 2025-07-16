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
        background: "var(--background)",
        foreground: "#3B3B3B",
        contactButton: "#25d342 ",
        description: "#868686",
        title: "#FFB910",
        cardBackground: "#FFFFFF",
        cardBorder: "#E9EFF3",
        slideImage:"#0000007a",
      },
    },
  },
  plugins: [],
};
export default config;
