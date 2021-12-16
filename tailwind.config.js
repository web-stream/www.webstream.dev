const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      webstream: {
        light: "#5BB7D0",
        DEFAULT: "#132B33",
        dark: "#032733",
        darker: "#021921",
        gray: "#D3D3D3",
      },
    },
    fontFamily: {
      DMSans: ["DM Sans", "Arial", "sans-serif"],
      SourceSansPro: ["Source Sans Pro", "Arial", "sans-serif"],
      Code: [
        "Fira code",
        "Fira Mono",
        "Consolas",
        "Menlo",
        "Courier",
        "monospace",
      ],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["even"],
      backgroundOpacity: ["even"],
    },
  },
};
