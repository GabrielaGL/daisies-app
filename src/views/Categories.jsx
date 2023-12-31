import React from "react";
import { Pressable, View, Image, StyleSheet } from "react-native";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <Pressable style={styles.btnContainer} onPress={() => navigation.navigate("Jewelery")}>
          <Image
            source={require("../assets/btnJewelery.png")}
            style={styles.imgBtn}
          />
        </Pressable>

        <Pressable style={styles.btnContainer} onPress={() => navigation.navigate("Electronics")} >
          <Image
            source={require("../assets/btnElectronics.png")}
            style={styles.imgBtn}
          />
        </Pressable>
      </View>

      <View style={styles.rows}>
        <Pressable style={styles.btnContainer} onPress={() => navigation.navigate("Men's Clothing")}>
          <Image
            source={require("../assets/btnMensclothing.png")}
            style={styles.imgBtn}
          />
        </Pressable>

        <Pressable style={styles.btnContainer} onPress={() => navigation.navigate("Women's Clothing")}>
          <Image
            source={require("../assets/btnWomensclothing.png")}
            style={styles.imgBtn}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADBDE6",
    
  },
  rows: {
    alignSelf: "center",
    marginTop: 50,
    backgroundColor: "#ADBDE6",
    flexDirection: "row",
  },
  btnContainer: {
    width: 140,
    height: 140,
    margin: 15,
  },
  imgBtn: {
    width: 140,
    height: 140,
  },
});

export default Categories;
