import { theme, DefaultTheme } from "@chakra-ui/core";

export const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: "5px",
    md: "8px",
  },
  fontSizes: {
    ...theme.fontSizes,
    "2xl": "54px",
  },
  colors: {
    ...theme.colors,
  },
};
