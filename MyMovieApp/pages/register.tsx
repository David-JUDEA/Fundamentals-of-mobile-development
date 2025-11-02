import { Button, StyleSheet, Text, View, ImageBackground } from "react-native";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/image_movies.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.innerText}>Registe</Text>
		  <Text>&</Text>
          <Button
            title="S'inscrire"
            onPress={(): void => {
              navigation.navigate("Login");
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
