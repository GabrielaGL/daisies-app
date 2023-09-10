import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../services/db";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const logged = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Iniciando Sesión", "Espere un momento");
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "El usuario o la contraseña son incorrectos");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Image
          source={require("../assets/logoLogin.png")}
          style={styles.logo}
        />
        <Text style={styles.principalText}> Inicia Sesión </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          inputMode="email"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <Pressable style={styles.button} onPress={logged}>
          <Text style={styles.buttonText}> Iniciar Sesión </Text>
        </Pressable>

        <Image
          source={require("../assets/separatorBtns.png")}
          style={styles.separator}
        />

        <Pressable style={styles.buttonGoogle}>
          <Text style={styles.buttonTextG}> Inicia Sesión con Google </Text>
        </Pressable>

        <Text style={styles.registerText}> ¿No tienes una cuenta? </Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.registerPress}> Regístrate </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADBDE6",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 160,
    marginTop: 30,
    alignSelf: "center",
  },
  principalText: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },
  input: {
    marginTop: 20,
    width: 280,
    height: 50,
    borderWidth: 2,
    borderColor: "#EFEFEF",
    borderRadius: 8,
    fontSize: 18,
    padding: 13,
  },
  separator: {
    width: 270,
    height: 15,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
    width: 280,
    height: 45,
    backgroundColor: "#FFF9F6",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    padding: 11,
    color: "#333333",
  },
  buttonGoogle: {
    marginTop: 15,
    marginBottom: 10,
    width: 280,
    height: 45,
    backgroundColor: "#4A71C6",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonTextG: {
    fontSize: 18,
    padding: 11,
    color: "#FFF9F6",
  },
  registerText: {
    marginTop: 5,
    fontSize: 18,
    color: "#333333",
    textAlign: "center",
  },
  registerPress: {
    fontSize: 18,
    color: "#4A71C6",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Login;
