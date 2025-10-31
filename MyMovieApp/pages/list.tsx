import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Api from "../services/API/api";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "4aca0f6f6a985bbeda325c359be7a7aa";
  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR&page=1&with_genres=`; 

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ffffffff" />
        <Text>Chargement des films...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.poster}
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bcafafff",
    padding: 10,
  },
  movieItem: {
    marginBottom: 20,
    alignItems: "center",
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
