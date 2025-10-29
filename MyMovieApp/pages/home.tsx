import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <DisplayAnImage />
    </View>
  );
}

export function DisplayAnImage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../assets/image_home.jpg")}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d2cdbaff",
    alignItems: "center",
    justifyContent: "center",
  },
});
