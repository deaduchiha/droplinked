// react
import React from "react";
import ReactDOM from "react-dom/client";
// components
import App from "./pages/App";
// chakra ui
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
