import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import 




<FlatList
  data={movies} // movies est le tableau contenant les films
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <View style={styles.movieItem}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
      />
      <Text>{item.title}</Text>
    </View>
  )}
/>;
