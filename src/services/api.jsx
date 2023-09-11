import React, { useEffect, useState } from "react";

const ApiService = () => {
  const api_url = "https://fakestoreapi.com";

  const [products, setProducts] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [electronic, setElectronic] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);


  
  const getProducts = () => {
    fetch(api_url + "/products?limit=20")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error(error));
  };

  const getJeweleryCategory = () => {
    fetch(api_url + "/products/category/jewelery")
    .then((res) => res.json())
      .then((json) => setJewelery(json))
      .catch((error) => console.error(error));
  };

  const getElectronicCategory = () => {
    fetch(api_url + "/products/category/electronics")
    .then((res) => res.json())
      .then((json) => setElectronic(json))
      .catch((error) => console.error(error));
  };

  const getMensClothingCategory = () => {
    fetch(api_url + "/products/category/men's%20clothing")
    .then((res) => res.json())
      .then((json) => setMensClothing(json))
      .catch((error) => console.error(error));
  };

  const getWomensClothingCategory = () => {
    fetch(api_url + "/products/category/women's%20clothing")
    .then((res) => res.json())
      .then((json) => setWomensClothing(json))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getJeweleryCategory();
    getElectronicCategory();
    getMensClothingCategory();
    getWomensClothingCategory();
  }, []);

  return {
    products,
    jewelery,
    electronic,
    mensClothing,
    womensClothing,
  };
};

export default ApiService;
