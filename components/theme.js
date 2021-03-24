// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  backgroundGray: {
    50: "#F9F9FB",
  },
  orangeBrand: {
    100: "#FF723D",
  },
  blueBrand: {
    100: "#92D2D9",
  },
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

export { theme };
