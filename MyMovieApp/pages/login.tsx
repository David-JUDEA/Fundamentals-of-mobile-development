import { Button, StyleSheet, Text, View } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title="S'inscrire"
        onPress={(): void => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d7cfcfff",
    alignItems: "center",
    justifyContent: "center",
  },
});
