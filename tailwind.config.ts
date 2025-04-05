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
        warning: "#EED202",
        warning100: "#FAF8E0",
        neutralBase: "#F7F7F7",
        neutrals100: "#EAEAEA",
        neutrals200: "#CCCBCB",
        neutrals300: "#B5B3B3",
        neutrals500: "#898384",
        neutrals600: "#726C6C",
        neutrals700: "#5A5555",
        neutrals900: "#2B2829",
        primary_success: "#005700",
        primary_yellow: "#D3BB0C",
        primary_green: "#5eb237",
        primary: "#5EB237",
        primary100: "#EFF7EB",
        primary200: "#DFF0D7",
        primary600: "#55A132",
        secondary: "#4D76CE",
        secondary200: "#DBE4F5",
        error100: "#FBE8E8",
        error500: "#DD0000",
        error900: "#DD0000",
      },
      backgroundColor: {
        btn_primary: "#008300",
        success_opacity: "#CCE6CC",
        yellow_opacity: "#FFF9CC",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        tahooma: "Tahooma",
        inter: "var(--font-inter)",
        satoshi: "Satoshi-Medium",
        satoshi_Variable: "Satoshi-Light",
        clash_display: "Clash Display",
        clash_display_medium: "Clash-Display-Medium",
        clash_display_semibold: "Clash-Display-Semibold",
        clash_display_bold: "Clash-Display-Bold",
        bricolage: "var(--font-bricolage)",
      },
      backgroundImage: {
        hero: "url('/World-Map-1.png')",
        // hero: "url('/8.jpg')",
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
