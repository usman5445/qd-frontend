/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      "Layout-Blue": "#5541D7",
      "Layout-Gray": "#E2E2EA",
      "Layout-LightGray": "#F7F7FC",
      "Layout-White": "#FFFFFF",
      "Text-DarkBlue": "#11142D",
      "Text-Cyan": "#42BDA1",
      "Text-DarkGray": "#92929D",
    },
    extend: {
      fontFamily: {
        "Mulish-Regular": "Mulish-Regular",
        "Mulish-Bold": "Mulish-Bold",
        "Mulish-Light": "Mulish-Light",
        "Mulish-Italic": "Mulish-Italic",
        "Mulish-ExtraLight": "Mulish-ExtraLight",
        "Mulish-ExtraBold": "Mulish-ExtraBold",
      },
    },
  },
  plugins: [],
};
