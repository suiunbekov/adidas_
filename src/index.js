import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./components/routes/MainRoutes";
import ProductContext from "./components/context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContext>
    <BrowserRouter>
      <App />
      <MainRoutes />
    </BrowserRouter>
  </ProductContext>
);
