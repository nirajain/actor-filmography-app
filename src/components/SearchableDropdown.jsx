// src/components/SearchableDropdown.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  DropDownList,
  DropDropnListItem,
  SearchableDropdownWrapper,
  StyledInput,
} from "./styles";

const SearchableDropdown = ({ onSelectActor }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const searchActors = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/person?api_key=eb6ea3f3f1eaec789659b88cac1f0973&query=${searchQuery}`,
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.error("Error searching actors:", error);
      }
    };

    searchActors();
  }, [searchQuery]);

  const handleSelectActor = (actorId, actorName) => {
    onSelectActor(actorId);
    setSearchQuery(actorName);
    setSearchResults([]);
  };

  return (
    <SearchableDropdownWrapper>
      <StyledInput
        type="text"
        placeholder="Search for an actor"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchResults.length > 0 && (
        <DropDownList>
          {searchResults.map((actor) => (
            <DropDropnListItem
              key={actor.id}
              onClick={() => handleSelectActor(actor.id, actor.name)}
            >
              {actor.name}
            </DropDropnListItem>
          ))}
        </DropDownList>
      )}
    </SearchableDropdownWrapper>
  );
};

export default SearchableDropdown;
