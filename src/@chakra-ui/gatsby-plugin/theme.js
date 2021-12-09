import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  xs: "21em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

const theme = {
  breakpoints,
  styles: {
    global: {
      body: {
        fontFamily: "Helvetica Neue, sans-serif",
        color: "#707070",
      },
    },
  },
  colors: {
    bcon: {
      teal: {
        primary: "#769DA2",
        secondary: "#5B8B87",
        dark: "#45585A",
        darker: "#222B2C",
      },
      black: "#3B3A3A",
      gray: {
        white: "#F7F7F7",
        light: "#ECECEC",
        primary: "#707070",
        dark: "#565656",
      },
      babyBlue: "#A3E9F2",
    },
  },
}

export default extendTheme(theme)
