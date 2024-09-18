/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          5: "#A00B0E80",
          10: "#A00B0E",
        },
        header: {
          10: "#000000"
        },
        text: {
          10: "#FFFFFF"
        },
        card: {
          10: "#EAEAEA",
          20: "#C1BABA4D",
          30: "#D9D9D9",
        },
      }
    },
  },
  plugins: [],
};
