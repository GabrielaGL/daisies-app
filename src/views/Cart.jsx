import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

import { useCart } from "../components/CartContext";

const Cart = () => {
  const { cart, deleteProductCart, totalProducts } = useCart();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerCart}>
        {cart.map((product) => (
          <View key={product.title} style={styles.singleProduct}>
            <Image source={{ uri: product.image }} style={styles.image} />

            <View style={styles.textContainer}>
              <Text style={styles.price}>
                {" "}
                USD $ <Text style={styles.priceNum}> {product.price} </Text>
              </Text>

              <Text style={styles.title}> {product.title}</Text>

              <Pressable
                style={styles.btnContainer}
                onPress={() => deleteProductCart(product.title)}
              >
                <Text style={styles.btnText}> Delete from Cart </Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.subtotal}> Subtotal </Text>
        <Text style={styles.total}> Total </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCart: {
    marginTop: 5,
    padding: 10,
    width: 350,
    backgroundColor: "#FEFEFE",
    alignSelf: "center",
    borderRadius: 13,
  },
  singleProduct: {
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    marginTop: 10,
  },
  textContainer: {
    marginTop: 20,
    paddingLeft: 15,
  },
  price: {
    fontWeight: "bold",
    color: "#333333",
  },
  priceNum: {
    fontSize: 20,
  },
  title: {
    color: "#727272",
  },
  btnContainer: {
    marginTop: 15,
    backgroundColor: "#819ADC",
    borderRadius: 7,
    height: 28,
    width: 150,
    marginLeft: 20,
  },
  btnText: {
    textAlign: "center",
    color: "#FEFEFE",
    marginTop: 2,
    fontSize: 17,
  },
  totalContainer: {
    height: 60,
    backgroundColor: "#FEFEFE",
    padding: 10,
    paddingLeft: 250,
    alignContent: "flex-end",
  },
  subtotal: {
    color: "#333333",
  },
  total: {
    color: "#333333",
    fontSize: 20,
  },
});

export default Cart;
