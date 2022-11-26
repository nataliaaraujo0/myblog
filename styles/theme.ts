import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    colorCustom: {
      "70": "#000058",
      "90": "#00002c",
    },
  },

  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "purple.900",
        color: "gray.100",
      },
    },
  },
});
