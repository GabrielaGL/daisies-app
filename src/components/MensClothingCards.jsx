import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Pressable } from "react-native";

import ApiService from "../services/api";

const MensClothingCards = ({navigation}) => {
  const api = ApiService();

  const renderMensClothingCards = ({ item, index }) => {
    if (index === 0) {
      return (
        <View style={styles.firstCard}>
          <Image />
          <Text> Esta caja es diferente </Text>
        </View>
      );
    } else {
      return (
        <View style={[styles.productRow, index % 2 === 0 && styles.evenRow]}>
          <Pressable
            onPress={() =>
              navigation.navigate("Details", {
                title: item.title,
                image: item.image,
                price: item.price,
                description: item.description,
              })
            }
          >
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.price}>
                {" "}
                USD $ <Text style={styles.priceNum}>{item.price} </Text>{" "}
              </Text>
              <Text style={styles.title}> {item.title.slice(0, 30)} </Text>
            </View>
          </Pressable>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={api.mensClothing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMensClothingCards}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    margin: 10,
    alignSelf: "center",
  },
  evenRow: {
    marginTop: -57,
  },
  firstCard: {
    backgroundColor: "#FEFEFE",
    width: 170,
    height: 200,
    margin: 13,
    padding: 5,
    borderRadius: 13,
  },
  card: {
    backgroundColor: "#FEFEFE",
    width: 170,
    height: 260,
    margin: 13,
    padding: 5,
    borderRadius: 13,
  },
  image: {
    alignSelf: "center",
    marginTop: 7,
    marginBottom: 15,
    width: "80%",
    height: 150,
    resizeMode: "contain",
  },
  price: {
    paddingLeft: 7,
    fontSize: 13,
    fontWeight: "bold",
    color: "#333333",
  },
  priceNum: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
  },
  title: {
    paddingLeft: 7,
    marginTop: 5,
    color: "#727272",
  },
  category: {
    paddingLeft: 7,
    marginTop: 5,
    color: "#727272",
  },
});

export default MensClothingCards;
