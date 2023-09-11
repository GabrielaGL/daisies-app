import React from "react";
import { Pressable, View, Image, StyleSheet } from "react-native";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <Pressable style={styles.btnContainer} onPress={() => navigation.navigate("Joyería")}>
          <Image
            source={require("../assets/btnJewelery.png")}
            style={styles.imgBtn}
          />
        </Pressable>

        <Pressable style={styles.btnContainer} onPress={() => navigation.navigate("Electrónica")} >
          <Image
            source={require("../assets/btnElectronics.png")}
            style={styles.imgBtn}
          />
        </Pressable>
      </View>

      <View style={styles.rows}>
        <Pressable style={styles.btnContainer} onPress={() => navigation.navigate("Ropa de Hombre")}>
          <Image
            source={require("../assets/btnMensclothing.png")}
            style={styles.imgBtn}
          />
        </Pressable>

        <Pressable style={styles.btnContainer} onPress={() => navigation.navigate("Ropa de Mujer")}>
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
    alignSelf: "center",
    marginTop: 50,
    backgroundColor: "#ADBDE6",
  },
  rows: {
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
