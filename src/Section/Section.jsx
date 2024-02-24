import React from "react";
import { Box } from "@mui/material";
import logo_Adidas2 from "../Image/adidas_brand_flagship_store_in_shanghai_1.jpg";

const Section = () => {
  return (
    <Box className="header_img">
      <img
        style={{ width: "100%", height: "35pc" }}
        src={logo_Adidas2}
        alt="adidas"
      />
    </Box>
  );
};

export default Section;
