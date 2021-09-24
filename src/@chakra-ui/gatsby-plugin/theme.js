import { extendTheme } from "@chakra-ui/react"

const theme = {
  styles: {
    global: {
      body: {
        fontFamily: "Helvetica Neue, sans-serif",
      },
    },
  },
  colors: {
    bc: {
      teal: {
        primary: "#769DA2",
        secondary: "#5B8B87",
        dark: "#45585A",
        darker: "#222B2C",
      },
      gray: {
        white: "#F7F7F7",
        light: "#ECECEC",
        primary: "#707070",
        dark: "#767676",
      },
      babyBlue: "#A3E9F2",
    },
  },
}

export default extendTheme(theme)
