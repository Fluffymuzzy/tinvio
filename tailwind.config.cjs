/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF474D",
        main: "#212121",
        white: "#FFFFFF",
        second: "#5C5C5C",
        placeholder: "#BDBDBD",
        input: "#F3F4F5",
        bg_grey: "#F6F6F6",
        bg_black: "#363636",
        btn_second: "#FFFFFF",
        btn_text: "#212121",
        primary_hover: "#ff474dcc",
      },
      backgroundImage: {
        "radial-gray15": "radial-gradient(circle, #DADADA 0%, #FAFAFA 100%);",
        "radial-white20": "radial-gradient(circle, #FFFFFF 0%, #FAFAFA 100%);",
        "radial-white60": "radial-gradient(circle, #FFFFFF 0%, #FAFAFA 100%);",
        "radial-gray50": "radial-gradient(circle, #F6F5F5 0%, #FAFAFA 100%);",
        "red-100": "linear-gradient(#FB242B 100%, #FB242B 100%)",
        "red-60": "linear-gradient(#FB242B 60%, #FB242B 60%)",
        "black-50": "linear-gradient(#6D6D6D 0%, #FFFFFF 100%)",
      },
      boxShadow: {
        "gray-10": "0 0 0 1px rgba(33, 33, 33, 0.1)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
      fontSize: {
        // gilroy
        title1: ["48px", "59px"],
        title2: ["44px", "54px"],
        title3: ["36px", "44px"],
        title4: ["32px", "39px"],
        title5: ["28px", "34px"],
        subtitle1: ["24px", "29px"],
        subtitle2: ["20px", "29px"],
        description: ["14px", "24px"],
        btn_main: ["16px", "20px"],
        header_tabs: ["16px", "19px"],
        header_btn: ["14px", "17px"],
        // inter
        body1: ["18px", "14px"],
        body2: ["16px", "23px"],
        error: ["12px", "15px"],
        placeholder: ["14px", "17px"],
        tabs: ["16px", "17px"],
        lang: ["16px", "27px"],
      },
      screens: {
        xs: "375px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1440px",
        xxl: "1920px",
      },
    },
  },
  plugins: [],
};
