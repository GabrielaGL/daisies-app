import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const Details = ({ route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: route.params.image }} style={styles.image} />
        <Text style={styles.price}> USD $ <Text style={styles.priceNum}> {route.params.price} </Text> </Text>
        <Text style={styles.title}> {route.params.title} </Text>
        <Text style={styles.description}> {route.params.description} </Text>

        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}> Add to Cart </Text>
        </Pressable>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  card: {
    alignSelf: "center",
    marginTop: 25,
    padding: 10,
    backgroundColor: "#FEFEFE",
    width: 350,
    borderRadius: 13,
  },
  image: {
    alignSelf: "center",
    marginTop: 10,
    width: "80%",
    height: 250,
  },
  price: {
    marginTop: 10,
    fontSize: 19,
    fontWeight: "bold",
    color: "#333333",
  },
  priceNum: {
    fontSize: 25,
  },
  title: {
    marginTop: 5,
    color: "#727272",
  },
  description: {
    marginTop: 10,
    paddingLeft: 8,
    color: "#727272",
    fontSize: 12,
  },
  btnContainer: {
    alignSelf: "flex-end",
    marginTop: 22,
    marginBottom: 10,
    marginRight: 5,
    backgroundColor: "#FFD83A",
    borderRadius: 7,
    width: 160,
    height: 43,
  },
  btnText: {
    marginTop: 5,
    textAlign: "center",
    color: "#333333",
    fontSize: 22,
  },
});

export default Details;
