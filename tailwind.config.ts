import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_success: "#005700",
        primary_yellow: "#D3BB0C",
        primary_green: "#5eb237",
      },
      backgroundColor: {
        btn_primary: "#008300",
        success_opacity: "#CCE6CC",
        yellow_opacity: "#FFF9CC",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        tahooma: "Tahooma",
        raleway: "var(--font-raleway)",
        satoshi: "Satoshi-Medium",
        satoshi_Variable: "Satoshi-Light",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        "::selection": {
          backgroundColor: "#005700", // Highlight background color
          color: "white", // Optional: Text color while highlighted
        },
      });
    },
  ],
} satisfies Config;
