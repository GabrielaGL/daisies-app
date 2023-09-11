import React, { useEffect, useState } from "react";

const ApiService = () => {
  const api_url = "https://fakestoreapi.com";

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(api_url + "/products?limit=20")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
  };
};

export default ApiService;
