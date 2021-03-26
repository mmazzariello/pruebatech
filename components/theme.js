// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  backgroundGray: {
    50: "#F9F9FB",
  },
  mediumGray: {
    50: "#C4C4C4",
  },
  orangeBrand: {
    50: "rgba(255, 135, 23, 0.65)",
    100: "#FF723D",
  },
  blueBrand: {
    100: "#92D2D9",
    200: "#3D7BD8",
  },
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const styles = {
  global: {
    "html, body": {
      fontFamily: "Mulish, Helvetica, Arial, sans-serif",
    },
  },
};

const theme = extendTheme({ colors, styles });

export { theme };
