import {
  ColorModeProvider,
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
} from "@chakra-ui/core";

import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import React from "react";
import { customTheme } from "../../styles/theme";

export const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={customTheme}>
      <ColorModeProvider value="dark">
        <EmotionThemeProvider theme={customTheme}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
};
