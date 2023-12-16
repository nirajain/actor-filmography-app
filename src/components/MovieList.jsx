// src/components/MovieList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MovieListTitle, MovieListWrapper, MovieListItem } from "./styles";

import MovieCard from "./MovieCard";

const MovieList = ({ actorId, genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies by actor and genre from TMDb API
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=eb6ea3f3f1eaec789659b88cac1f0973`,
        );

        // Filter movies based on the given genre
        const filteredMovies = response.data.cast.filter(
          (movie) => movie.genre_ids && movie.genre_ids.includes(genre),
        );
        setMovies(filteredMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (actorId) {
      fetchMovies();
    }
  }, [actorId, genre]);

  return (
    <MovieListWrapper>
      <MovieListTitle>Movies Starring the Actor</MovieListTitle>
      <MovieListItem>
        {movies.length ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies found in this genre</p>
        )}
      </MovieListItem>
    </MovieListWrapper>
  );
};

export default MovieList;
