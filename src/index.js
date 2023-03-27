// react
import React from "react";
import ReactDOM from "react-dom/client";
// components
import Home from "./App";
// chakra ui
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
// react router dom
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <Router>
      <Home />
    </Router>
  </ChakraProvider>
);
