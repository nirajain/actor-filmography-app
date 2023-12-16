// src/components/GenreList.js
import React from "react";
import genreMap from "../constants";
import {
  GenreListWrapper,
  GenreTitle,
  GenreMapList,
  GenreDropdown,
} from "./styles";

const GenreList = ({ handleGenreClick }) => {
  return (
    <GenreListWrapper>
      <GenreTitle>Genre List </GenreTitle>
      <GenreDropdown
        onChange={(e) => handleGenreClick(parseInt(e.target.value, 10))}
      >
        <option value="">Select Genre</option>
        {genreMap.map((genre) => (
          <option key={genre.value} value={genre.value}>
            {genre.name}
          </option>
        ))}
      </GenreDropdown>
    </GenreListWrapper>
  );
};

export default GenreList;
