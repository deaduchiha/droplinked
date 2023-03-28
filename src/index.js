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
// layout
import Layout from "./components/shared/layout";
// redux
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Home />
        </Layout>
      </Router>
    </ChakraProvider>
  </Provider>
);
