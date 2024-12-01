import flowbitePlugin from "flowbite/plugin";
import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-05": "#45A135",
        "secondary-04": "#FCCD2A",
        "white-feature": "#FFFBE6",
        "black-neutral08": "#141A1F",
        "gray-neutral03": "#BCC7D2",
        "gray-neutral06": "#627A93",
      },
    },
  },
  plugins: [flowbite.plugin(), flowbitePlugin],
};
