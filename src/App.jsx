//
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import SearchableDropdown from "./components/SearchableDropdown";
import GenreList from "./components/GenreList";
import styled from "styled-components";
import "./App.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const UserComponentStyles = styled.div`
  display: flex;
  gap: 4rem;
  ustify-content: space-between;
  align-items: center;
`;
function App() {
  const [selectedActor, setSelectedActor] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleSelectActor = (actorId) => {
    setSelectedActor(actorId);
    setSelectedGenre(null);
  };

  const handleGenreClick = (genreValue) => {
    setSelectedGenre(genreValue);
  };

  return (
    <div className="app-container">
      <div className="title">Star Flicks Hub</div>
      <p className="description">
        No more hassle to find the perfect movie. Just write selecting below!!
      </p>
      <Wrapper style={{ display: "flex" }}>
        <UserComponentStyles>
          <SearchableDropdown onSelectActor={handleSelectActor} />
          {
            <GenreList
              handleGenreClick={handleGenreClick}
              key={selectedActor}
            />
          }
        </UserComponentStyles>

        {selectedGenre && (
          <MovieList actorId={selectedActor} genre={selectedGenre} />
        )}
      </Wrapper>
    </div>
  );
}

export default App;
