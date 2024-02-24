import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { addProduct } = useProducts();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [image, setImg] = useState("");

  function hendleChane() {
    let newObj = {
      name: name,
      price: price,
      type: type,
      image: image,
    };
    addProduct(newObj);
  }

  const navigate = useNavigate();
  return (
    <>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
        mt={15}
        pb={4}
      >
        ADDITION
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            autoComplete="off"
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            autoComplete="off"
          />

          <TextField
            onChange={(e) => setType(e.target.value)}
            id="outlined-basic"
            label="Type"
            variant="outlined"
            autoComplete="off"
          />
          <TextField
            onChange={(e) => setImg(e.target.value)}
            id="outlined-basic"
            label="Image"
            variant="outlined"
            autoComplete="off"
          />
          <Button
            onClick={() => (hendleChane(), navigate("/"))}
            sx={{
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
            add Shoes
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
