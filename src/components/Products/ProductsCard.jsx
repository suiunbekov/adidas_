import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const { readProduct, product, deleteProduct } = useProducts();
  const navigate = useNavigate();
  useEffect(() => {
    readProduct();
  }, []);
  return (
    <div>
      <Typography
        style={{
          fontSize: "40px",
          fontWeight: "900",
          margin: "1pc 0",
        }}
      >
        Still Interested?
      </Typography>
      <div id="product-card">
        {product.map((el) => (
          <div className="product">
            <Card sx={{ width: 500, justifyContent: "center" }}>
              <CardMedia
                sx={{
                  width: 500,
                  height: 600,
                }}
                component="img"
                alt="green iguana"
                height="140"
                image={el.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {el.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {el.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {el.type}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => deleteProduct(el.id)} size="small">
                  <DeleteOutlineOutlinedIcon />
                </Button>
                <Button onClick={() => navigate(`/edite/${el.id}`)}>
                  <ModeEditOutlineOutlinedIcon />
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
