import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

 function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const id = props.match.params.id
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacters(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log('Data returned an error', error)
      })
  }, [props.match.params.id]);

  return (
    <section className="character-list">
      {characters.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}
    </section>
  );
}

function CharacterDetails({ character }) {
  return (
    <Link to={`/character-list/${character.id}`}>
      <div className="character-card">
        <img src={character.image} alt="character pic"/>
        <h2>{character.name}</h2>
        <p>Species: {character.species}</p>
        <p>Status: {character.status}</p>
        <p>Location: {character.location}</p>
      </div>
    </Link>
  );
}

export default CharacterList;

