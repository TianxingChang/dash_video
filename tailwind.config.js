/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        main: "rgb(247,247,248)",
        button: "rgb(239,239,241)",
        videoborder: "rgb(84,100,123)",
        purplelight: "rgb(108,102,132)",
      },
      screens: {
        half: "900px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
