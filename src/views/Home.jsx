import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text> Home funciona </Text>
      <View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
  },
  navContainer: {
    flex: 1,
    backgroundColor: "#FEFEFE",
    borderColor: "#E6E6E6",
    borderWidth: 1,
    height: 30,
    alignSelf: "flex-end",
  },
  imgNavBar: {
    height: 25,
    width: 20,
  },
});

export default Home;
