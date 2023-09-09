import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";

const SignUp = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

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
            onChangeText={onChangeText}
            value={text}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={onChangeEmail}
            value={email}
            keyboardType="email-address"
            inputMode="email"
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={true}
          />

          <Pressable style={styles.button}>
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
