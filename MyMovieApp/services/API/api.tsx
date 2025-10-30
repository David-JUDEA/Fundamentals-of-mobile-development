import React, { useEffect, useState } from "react";

export default function Api() {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);						

  const API_KEY = "4aca0f6f6a985bbeda325c359be7a7aa";
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results); // Affiche les films dans la console
        setMovies(data.results); // Stocke les films dans le state
      })
      .catch((error) => console.error(error));
  }, []);
}
