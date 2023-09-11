import React from "react";
import { View, Text } from "react-native";

import { useCart } from "../components/CartContext";

const Cart = () => {
  const { cart, deleteProductCart } = useCart();
  console.log(cart);

  return (
    <View>
      <Text> Carrito se ve así </Text>
      {cart.map((product) => (
        <View key={product.title}>
          <Text>Nombre: {product.title}</Text>
          <Text>Precio: ${product.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default Cart;
