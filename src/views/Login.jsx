import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Pressable } from "react-native";

const Login = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>


      <Text style={styles.principalText}> Inicia Sesión </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={onChangeText}
        value={text}
        keyboardType="email-address"
        inputMode="email"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={onChangeText}
        value={text}
        secureTextEntry={true}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}> Iniciar Sesión </Text>
      </Pressable>

      <Text style={styles.oText}>
        {' '}
        ------------------------- o -------------------------{' '}
      </Text>

      <Pressable style={styles.buttonGoogle}>
        <Text style={styles.buttonTextG}> Inicia Sesión con Google </Text>
      </Pressable>

      <Text style={styles.registerText}> ¿No tienes una cuenta? </Text>
      <Pressable>
        <Text style={styles.registerPress}> Regístrate </Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADBDE6',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 160,
    marginTop: 50,
  },
  principalText: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
  },
  input: {
    marginTop: 20,
    width: 280,
    height: 50,
    borderWidth: 2,
    borderColor: '#EFEFEF',
    borderRadius: 8,
    fontSize: 18,
    padding: 13,
  },
  oText: {
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
    width: 280,
    height: 45,
    backgroundColor: '#FFF9F6',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    padding: 11,
    color: '#333333',
  },
  buttonGoogle: {
    marginTop: 10,
    marginBottom: 10,
    width: 280,
    height: 45,
    backgroundColor: '#4A71C6',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonTextG: {
    fontSize: 18,
    padding: 11,
    color: '#FFF9F6',
  },
  registerText: {
    marginTop: 5,
    fontSize: 18,
    color: '#333333',
  },
  registerPress: {
    fontSize: 18,
    color: '#4A71C6',
    fontWeight: 'bold',
  },
});

export default Login;