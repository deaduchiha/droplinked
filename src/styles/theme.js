import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // for custom breakPoints
  breakpoints: {},
  // fonts
  fonts: {
    body: "Avenir Next",
  },
  // styles
  styles: {
    global: {
      // styles for the `*`
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        transition: "0.6s",
      },

      // styles for the `body`
      body: {
        bg: "#1C1C1C",
        maxW: "100vw",
        color: "#fff",
      },
      // styles for the `a`
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
  colors: {},
});

export default theme;
