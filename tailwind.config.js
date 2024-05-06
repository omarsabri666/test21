import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        header: ["Tajawal", "sans-serif"],
        number: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
