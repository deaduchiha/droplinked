// react
import React from "react";
// chakra ui
import { Container } from "@chakra-ui/react";
// components
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">{children}</Container>
    </>
  );
};

export default Layout;
