import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../components/context/ProductContext";
import { useState } from "react";
import { useEffect } from "react";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const { setPoduct, product, readProduct } = useProducts();
  const [search, setSearch] = useState("");

  function searchProduct() {
    const result = product.filter(
      (el) =>
        el.name.toLowerCase().includes(search) ||
        el.price.toString().includes(search)
    );
    setPoduct(result);
  }

  useEffect(() => {
    if (search && search.trim() !== "") {
      searchProduct();
    } else {
      readProduct();
    }
  }, [search, readProduct, setPoduct]);

  return (
    <Box id="header">
      <Box sx={{ width: "90%" }} className="container">
        <Box className="header">
          <Box className="header-top">
            <Button onClick={() => navigate("/")}>
              <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
                  fill="black"
                ></path>
              </svg>
            </Button>
            <Box className="header_nav">
              <IconButton onClick={() => navigate("/admin")}>
                <AddOutlinedIcon />
              </IconButton>
              <Typography>MEN</Typography>
              <Typography>WOMEN</Typography>
              <Typography>KIDS</Typography>
              <Typography>SALE</Typography>
              <Typography>3 STRIPE LIFE</Typography>
            </Box>
            <Box className="header_search">
              {" "}
              <Box className="input_box">
                <input
                  style={{ width: "190px", height: "30px" }}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="search"
                />
                <button>
                  <SearchOutlinedIcon />
                </button>
              </Box>
              <PermIdentityOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
              <WorkOutlineOutlinedIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
