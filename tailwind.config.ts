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
        foreground: "var(--foreground)",
        contactButton: "#25d342 ",
        description: "#868686",
        title: "#FFB910",
        cardBackground: "#FFFFFF",
        cardBorder: "#E9EFF3",
      },
    },
  },
  plugins: [],
};
export default config;
