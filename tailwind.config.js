/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "120px",
        screens: {
          lg: "1500px",
        },
      },
      colors: {
        arapawa: "#274C5B",
        padua: "#7EB693",
        funky_yellow: "#EFD372",
        disco_ball: "#D4D4D4",
        doctor: "#F9F8F8",
        heavy_sugar: "#EFF6F1",
        city_rain: "#525C60",
        dhusar_grey: "rgb(171, 171, 171)",
        dr_white: "rgb(250, 250, 250)",
      },
      textStyles: {
        h1: {
          color: "rgb(39, 76, 91)",
          fontFamily: "Roboto",
          fontSize: "70px",
          fontWeight: "800",
          lineHeight: "82px",
        },
        h2: {
          color: "rgb(39, 76, 91)",
          fontFamily: "Roboto",
          fontSize: "50px",
          fontWeight: "800",
          lineHeight: "48px",
        },
        h3: {
          color: "rgb(39, 76, 91)",
          fontFamily: "Roboto",
          fontSize: "40px",
          fontWeight: "800",
          lineHeight: "47px",
        },
        h4: {
          color: "rgb(39, 76, 91)",
          fontFamily: "Roboto",
          fontSize: "35px",
          fontWeight: "800",
          lineHeight: "41px",
        },
        p: {
          color: "rgb(82, 92, 96)",
          fontFamily: "Open Sans",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "165%",
        },
        li: {
          color: "rgb(39, 76, 91)",
          fontFamily: "Open Sans",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "165%",
        },
      },
    },
  },
  plugins: [],
};
