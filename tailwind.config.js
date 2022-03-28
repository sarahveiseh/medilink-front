module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  mode: "jit",
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#6EC5E9",
        secondary: "#003A6F",
        danger: "#FF5959",
        warning: "#FFC56C",
        fade: "#F2F1F1",
        disabledInput: "#e4ddee",
        lightBlue: "#b0ceff",
        darkBlue: "#2763c5",
        flashBtnLight: "#00ccf2",
        flashBtnDark: "#3a86fe",
        flashPrimary: "#3b86ff",

        formPrimary: "#3B86FF",
        formSecondary: "#c2daff",
        formText: "#000d4d",
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
        bounce800: "bounce 2s infinite 600ms",
        pulse200: "pulse 1s linear infinite 20ms",
      },
      transitionProperty: {
        width: "width",
        spacing: "padding",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(+100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(+300px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s ease-out",
        "fade-in-right": "fade-in-right 0.4s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
