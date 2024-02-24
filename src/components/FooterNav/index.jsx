import { Box, IconButton, List, ListItem, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import BloodtypeIcon from "@mui/icons-material/ExpandCircleDown";
import { Link } from "react-router-dom";

const FooterNav = () => {
  const storeArr = [
    "Shoes",
    "Clothing",
    "Accessories",
    "Gift Cards",
    "New Arrivals",
    "Best Sellers",
    "Release Dates",
    "Sale",
  ];
  const helpArr = [
    "Soccer",
    "Running",
    "Basketball",
    "Football",
    "Outdoor",
    "Golf",
    "Baseball",
    "Tennis",
    "Skateboarding",
    "Training",
  ];
  const aboutArr = [
    "adicolor",
    "Ultraboost",
    "NMD",
    "Forum",
    "Superstar",
    "Running Shoes",
    "adilette",
    "Stan Smith",
    "adizero",
    "Tiro",
    "Cloudfoam Pure",
  ];

  const footerEndArr = [
    "Your Privacy Choices | Privacy Policy | Terms and Conditions",
  ];
  return (
    <Box id="footer">
      <Box className="container">
        <Box className="footer">
          <Box className="footer_nav">
            <Box>
              <Typography sx={{ color: "#black" }}>PRODUCTS</Typography>

              <List variant="h5" className="content">
                {storeArr.map((i, index) => (
                  <ListItem sx={{ p: "10px 0" }} key={index}>
                    {i}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Typography sx={{ color: "#black" }}>SPORTS</Typography>

              <List variant="h5" className="content">
                {helpArr.map((i, index) => (
                  <ListItem sx={{ p: "10px 0" }} key={index}>
                    {i}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Typography sx={{ color: "#black" }}>COLLECTIONS</Typography>

              <List variant="h5" className="content">
                {aboutArr.map((i, index) => (
                  <ListItem sx={{ p: "10px 0" }} key={index}>
                    {i}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          <Box sx={{}} className="footer_icons">
            <IconButton
              sx={{ background: "#black", width: "30px", height: "30px" }}
            >
              <TwitterIcon className="icon" />
            </IconButton>
            <Box className="whatsApp">
              <IconButton
                sx={{ background: "#black", width: "30px", height: "30px" }}
              >
                <WhatsAppIcon className="icon" />
              </IconButton>
            </Box>
            <Box className="toutobe iconButton">
              <IconButton
                sx={{ background: "#black", width: "30px", height: "30px" }}
              >
                <YouTubeIcon className="icon" />
              </IconButton>
            </Box>
            <IconButton
              sx={{ background: "#black", width: "30px", height: "30px" }}
            >
              <YouTubeIcon className="icon" />
            </IconButton>
            <IconButton
              sx={{ background: "#black", width: "30px", height: "30px" }}
            >
              <WhatsAppIcon className="icon" />
            </IconButton>
          </Box>
        </Box>
        <Box className="corents" sx={{ color: "#black" }}>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <BloodtypeIcon />

            <Typography sx={{ color: "#black" }}>
              © 2024 adidas America, Inc.
            </Typography>
          </Box>
          <Box
            sx={{
              color: "#black",
              display: "flex",
              gap: "30px",
            }}
          >
            {footerEndArr.map((i, index) => (
              <Typography key={index}>{i}</Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterNav;
