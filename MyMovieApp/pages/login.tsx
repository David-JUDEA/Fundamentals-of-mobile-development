import React from "react";
import { Button, StyleSheet, Text, View, ImageBackground } from "react-native";

export default function Login({ navigation, setIsLogged }) {
  const handleLogin = () => {
    setIsLogged(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/movie_time_login.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.innerText}>Login</Text>
		  <Text>&</Text>
          <Button title="Se connecter" onPress={handleLogin} />
          <Text style={styles.innerText}>&</Text>
          <Button
            title="S'inscrire"
            onPress={(): void => {
              navigation.navigate("Register");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfdff",
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 413,
  },

  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  innerText: {
    color: "#ffffffff",
  },
});
