// react
import React from "react";
import ReactDOM from "react-dom/client";
// components
import App from "./App";
// chakra ui
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
