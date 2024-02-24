import axios from "axios";
import React, { createContext, useState } from "react";
import { useContext } from "react";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const ProductContext = ({ children }) => {
  let API_PRODUCT = "http://localhost:3000/data";

  const [product, setPoduct] = useState([]);
  const [mainProduct, setMainPoduct] = useState({});

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCT, newProduct);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCT}/${id}`);
    readProduct();
  }

  async function readProduct() {
    const { data } = await axios(API_PRODUCT);
    setPoduct(data);
  }

  async function getProduct(id) {
    const { data } = await axios(`${API_PRODUCT}/${id}`);
    setMainPoduct(data);
  }

  async function editMainProduct(id, editedProduct) {
    await axios.patch(`${API_PRODUCT}/${id}`, editedProduct);

    readProduct();
  }

  let values = {
    addProduct,
    readProduct,
    product,
    deleteProduct,
    mainProduct,
    getProduct,
    setPoduct,
    editMainProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
