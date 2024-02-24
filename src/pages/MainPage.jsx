import React from "react";
import { Box } from "@mui/material";
import "./MainPage.css";
import Hero from "../components/footerHeaader";
import Section from "../Section/Section";
import Text from "../components/UP";
import FooterNav from "../components/FooterNav";
import ProductCard from "../components/Products/ProductsCard";

const MainPage = () => {
  return (
    <Box id="pages">
      <Box className="container">
        <Box classname="pages">
          <Section />
          <ProductCard />
          <Hero />
          <Text />
          <FooterNav />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
