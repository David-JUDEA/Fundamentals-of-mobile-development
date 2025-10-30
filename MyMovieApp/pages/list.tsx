import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function List() {
  const API_KEY = "4aca0f6f6a985bbeda325c359be7a7aa";
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results); // Affiche les films dans la console
        setMovies(data.results); // Stocke les films dans le state
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
