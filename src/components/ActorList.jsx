// src/components/ActorList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ActorList = ({ onSelectActor }) => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Fetch a list of actors from TMDb API
    const fetchActors = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/person/popular?api_key=eb6ea3f3f1eaec789659b88cac1f0973",
        );
        setActors(response.data.results);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };

    fetchActors();
  }, []);

  return (
    <div>
      <h2>Actors List</h2>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id} onClick={() => onSelectActor(actor.id)}>
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActorList;
