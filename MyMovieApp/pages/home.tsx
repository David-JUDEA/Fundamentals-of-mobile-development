import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Home() {
  return (
    <View style={styles.container}>
      
      <DisplayAnImage />
    </View>
  );
}

export function DisplayAnImage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.headerImage}>
        <Image
          style={{ width: 413, height: 300 }}
          source={require("../assets/image_movies.png")}
          resizeMode="cover"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bcafafff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
});
