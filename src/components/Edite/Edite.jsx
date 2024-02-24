import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { useProducts } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import "./Edite.css";

const Edite = () => {
  const { mainProduct, getProduct, editMainProduct } = useProducts();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getProduct(id);
  }, []);

  useEffect(() => {
    if (mainProduct) {
      setName(mainProduct.name);
      setPrice(mainProduct.price);
      setType(mainProduct.type);
      setImage(mainProduct.image);
    }
  }, [mainProduct]);

  function handleChande() {
    let editeObj = {
      name: name,
      price: price,
      type: type,
      image: image,
    };
    editMainProduct(id, editeObj);
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Box
          sx={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            EDITE
          </Typography>
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={price}
          />
          <TextField
            onChange={(e) => setType(e.target.value)}
            id="outlined-basic"
            label="Type"
            variant="outlined"
            value={type}
          />
          <TextField
            onChange={(e) => setImage(e.target.value)}
            id="outlined-basic"
            label="Image"
            variant="outlined"
            value={image}
          />
          <Link style={{ width: "100%" }} to="/">
            <Button
              onClick={handleChande}
              sx={{
                width: "100%",
                color: "#000",
                border: "1px solid blue",
                fontWeight: "bold",
                background: "transparent",
                "&:hover": {
                  background: "blue",
                  color: "#fff",
                },
              }}
              variant="contained"
            >
              Save
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Edite;
