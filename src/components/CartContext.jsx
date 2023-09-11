import React, { createContext, useContext, useState } from "react";
import { Alert } from "react-native";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    Alert.alert("Product added successfully");
  };

  const deleteProductCart = (productName) => {
    const updatedCart = cart.filter((product) => product.title !== productName);
    setCart(updatedCart);
    Alert.alert("Product deleted successfully");
  };

  const totalProducts = () => {
    cart.price.reduce((acumulador, actualProduct) => acumulador + actualProduct, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteProductCart, totalProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};
