// src/components/GenreList.js
import React from "react";
import genreMap from "../constants";
import {
  GenreListWrapper,
  GenreTitle,
  GenreMapList,
  GenreDropdown,
  GenreOptions,
} from "./styles";

const GenreList = ({ handleGenreClick }) => {
  return (
    <GenreListWrapper>
      <GenreTitle> Pick Your Genre: </GenreTitle>
      <GenreDropdown
        onChange={(e) => handleGenreClick(parseInt(e.target.value, 10))}
      >
        <GenreOptions value="">Select Genre</GenreOptions>
        {genreMap.map((genre) => (
          <GenreOptions key={genre.value} value={genre.value}>
            {genre.name}
          </GenreOptions>
        ))}
      </GenreDropdown>
    </GenreListWrapper>
  );
};

export default GenreList;
