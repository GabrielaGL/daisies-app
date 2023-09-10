import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  Alert
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../services/db";

const SignUp = ({ navigation }) => {
  const [text, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Registo exitoso", `Bienvenido ${text}`);
      navigation.navigate("BottomNavBar");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Parece que ha ocurrido un error, intentalo de nuevo");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logoSignUp.png")}
          />

          <Text style={styles.principalText}> Regístrate </Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre Completo"
            onChangeText={(text) => setName(text)}
            value={text}
          />

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
            value={password}
            secureTextEntry={true}
          />

          <Pressable style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}> Registrarse </Text>
          </Pressable>

          <Text style={styles.signUpText}> ¿Ya tienes una cuenta? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signUpPress}> Inicia Sesión </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADBDE6",
  },
  contentContainer: {
    width: 350,
    marginTop: 35,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#FEFEFE",
    borderRadius: 13,
  },
  logo: {
    width: 250,
    height: 160,
    marginTop: -24,
    alignSelf: "center",
  },
  principalText: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#333333",
  },
  input: {
    marginTop: 20,
    width: 280,
    height: 50,
    borderWidth: 2,
    borderColor: "#819ADC",
    borderRadius: 8,
    fontSize: 18,
    padding: 13,
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    width: 280,
    height: 45,
    backgroundColor: "#4A71C6",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    padding: 11,
    color: "#FEFEFE",
  },
  signUpText: {
    marginTop: 5,
    fontSize: 18,
    color: "#333333",
    textAlign: "center",
  },
  signUpPress: {
    fontSize: 18,
    color: "#4A71C6",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default SignUp;
