/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        display: ["Chillax-Medium"],
        body:["Mulish"],
        mulishBold:['MulishBold'],
        mulishRegular:['MulishRegular'],
      },
      fontSize:{
        point: '2.375rem',
        input: '1.25rem',
        subHeader: '1rem',
        selector : '1rem',
        button: '1rem',
        pointNotes: '0.875rem',
        body: '0.875rem',
      },
      colors: {
        "blue": "#2962F5",
        "blue-light": "#94B1FA",
        "blue-faded": "#D4E0FD",
        "orange": "#ED860E",
        "green": "#0C4E1A",
        "green-light": "#85A78C",
        "green-faded": "#CEDCD1",
        red: "#EB2B2B",
        grey: "#BFC1C5"
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
