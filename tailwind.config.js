module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxl: { max: "1440px" },

      xxll: { max: "1300px" },

      xl: { max: "1279px" },

      lgg: { max: "1150px" },

      lg: { max: "1023px" },

      mdd: { max: "870px" },

      md: { max: "767px" },

      sm: { max: "639px" },
      smm: { max: "501px" },
      xs: {max: "426px"},
      xss: {max: "351px"},
    },
    extend: {
      fontFamily: {
        noto: ["Noto Serif", "serif"],
      },
      padding: {
        285: "285px",
        30: "120px",
        31: "124px",
        21.5: "86px",
        17.5: "70px",
        4.5: "18px",
        2.5: "10px",
        7.5: "30px",
        11.5: "46px",
        22.5: "90px",
        15: "60px",
        11: "44px",
        25: "100px",
        45: "180px",
      },
      margin: {
        0.25: "1px",
        30: "120px",
        7.5: "30px",
        15: "60px",
        411: "411px",
        45: "180px",
        19: "76px",
        37: "148px",
        25: "100px",
        37.5: "150px",
        67.5: "270px",
      },
      backgroundImage: {
        "hero-img": "url('./components/assets/image/homePage/hero_bg.png')",
        dropDown_arrow:
          "url('/src/components/assets/image/homePage/down_arrow.svg')",
        calendar: "url('/src/components/assets/image/homePage/calender.svg')",
        dollar: "url('/src/components/assets/image/homePage/dollar_sign.svg')",
        testimonial_bg:
          "url('/src/components/assets/image/homePage/bg_testimonials.png')",
        download_bg:
          "url('./components/assets/image/homePage/bg_download.png')",
        offering_bg: "url('./components/assets/image/homePage/house.png')",
      },
      height: {
        1000: "1000px",
        9.5: "38px",
        208: "832px",
        207.5: "830px",
        100: "400px",
      },
      width: {
        22: "88px",
        420: "26.25rem",
        58.5: "234px",
        690: "43.125rem",
        50: "200px",
        90: "360px",
        144: "576px",
        172.5: "690px",
        192.5: "770px",
        300: "300px",
        330: "330px",
        620: "620px",
        960: "960px",
        100: "400px",
        112.5: "450px",
      },
      maxWidth: {
        "2.5xl": "690px",
        "4xxl": "1000px",
        "8xl": "1460px",
      },
      lineHeight: {
        110: "110px",
        65: "65px",
      },
      spacing: {
        19.5: "79px",
        50: "200px",
        12.125: "50px",
        30: "120px",
        21: "84px",
        41: "164px",
      },
      fontSize: {
        xxl: ["28px", "38px"],
        xxll: ["28px", "26px"],
      },
      boxShadow: {
        "3xxl": "0px 10px 15px rgba(255, 113, 91, 0.25)",
        "3xxll": "0px 10px 15px rgba(255, 113, 91, 0.7)",
        "3xxxl": "0px 10px 25px rgba(215, 190, 190, 0.2)",
        phoneShadow: "20px 40px 30px rgba(178, 193, 110, 0.4)",
      },
      border: {
        15: "15px",
      },
      keyframes: {
        dropDown: {
          "0%": {
            opacity: 0,
            transform: "scale(0.9)",
          },
          "50%": {
            opacity: 0.3,
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        show: {
          "0%": {
            opacity: 0,
            transform: "translateX(240px)",
          },
          "50%": {
            opacity: 0.3,
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        hide: {
          "0%": {
            opacity: 0,
            transform: "translateX(0px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(-240px)",
          },
        },
        rotateLoader: {
          "0%": {
            opacity: 0.5,
            transform: "rotate(0deg)",
          },
          "100%": {
            opacity: 1,
            transform: "rotate(1turn)",
          },
        },
      },
      animation: {
        dropDown: "dropDown 0.35s ease-in-out",
        show: "show 1s ease-in-out",
        hide: "hide 1s ease-in-out",
        rotateLoader: "rotateLoader 2.5s infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundPosition: {
        100: "100%",
      },
    },
  },
  plugins: [],
};
