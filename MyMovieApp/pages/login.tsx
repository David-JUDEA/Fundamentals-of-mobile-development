import { Button, StyleSheet, Text, View } from "react-native";

export default function login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>login</Text>
      <Button
        title="S'inscrire"
        onPress={(): void => {
          navigation.navigate("register");
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
