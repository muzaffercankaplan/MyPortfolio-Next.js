/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0B0C10",
      secondry: "#1F2833",
      thirty: "#C5C6C7",
      text: "#66FCF1",
      border: "#45A29E",
    },
  },
  plugins: [],
};
