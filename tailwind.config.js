import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: `#93989d`,
        accent: `#01bfd3`,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        marquee: `marquee 30s linear infinite`,
      },
      keyframes: {
        marquee: {
          from: {
            backgroundPosition: "0 bottom",
          },
          to: {
            backgroundPosition: "100% bottom",
          },
        },
      },
    },
  },
  plugins: [typography],
};
