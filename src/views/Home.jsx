import React from "react";
import { View, StyleSheet } from "react-native";

import CardOfProducts from "../components/CardOfProducts";

const Home = () => { 

  return (
    <View style={styles.container}>
      <CardOfProducts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
  },
});

export default Home;
