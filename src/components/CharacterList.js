import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


 function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    //const id = props.match.params.id
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then((response) => {
        setCharacters(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log('Data returned an error', error)
      })
  },[]);

  return (
    <section className="character-list">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
}

export default CharacterList;

