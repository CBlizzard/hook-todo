import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ultraTheme from "./style/theme.ts";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme(ultraTheme);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Box bg="baseBG" minH="100vh">
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
