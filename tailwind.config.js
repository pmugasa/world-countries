/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px", // mobile breakpoint
        lg: "1440px", // desktop breakpoint
      },
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue": "hsl(207, 26%, 17%)",
        white: " hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
