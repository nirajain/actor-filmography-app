//
import React, { useState } from "react";
import ActorList from "./components/ActorList";
import MovieList from "./components/MovieList";
import SearchableDropdown from "./components/SearchableDropdown";
import GenreList from "./components/GenreList";
import styled from "styled-components";
import "./App.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9e4c4;
  padding: 20px;
`;

const UserComponentStyles = styled.div`
  display: flex;
  gap: 4rem;
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
      <h1>Actor Movies App</h1>
      <Wrapper style={{ display: "flex" }}>
        <UserComponentStyles>
          <SearchableDropdown onSelectActor={handleSelectActor} />
          {selectedActor && (
            <GenreList
              handleGenreClick={handleGenreClick}
              key={selectedActor}
            />
          )}
        </UserComponentStyles>

        {selectedGenre && (
          <MovieList actorId={selectedActor} genre={selectedGenre} />
        )}
      </Wrapper>
    </div>
  );
}

export default App;
