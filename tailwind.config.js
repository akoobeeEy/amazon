/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "376px",
        sml: "500px",
        md: "667px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        titleFont: "Roboto",
        bodyFont: "Poppins",
      },
      colors:{
        amazonBlue: "#131921",
        amazonLightBlue: "#232f3e",
        amazonGreen: "#00453e",
        amazonLightGreen: "#195851",
        amazonLight: "#232F3E",
        amazonYellow: "#febd69",
        whiteText: "#ffffff",
        lightText: "#ccc",
        quantity_box: "#F0F2F2",
        footerBottom: "#131A22",
        bgScreen: "rgba(0,0,0,.8)",
      },
      boxShadow:{
        testShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
        amazonInput: "0 0 3px 2px rgb(228 121 17 / 50%",
      }
    },
  },
  plugins: [],
};
