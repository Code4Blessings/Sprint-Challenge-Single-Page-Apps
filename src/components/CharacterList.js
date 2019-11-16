import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";


 function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState([]);

  const search = (val) => {
    if (!val) {
      setFilterCharacters(characters);
    } else {
      const filteredArr = characters.filter(character => {
        return character["name"].toLowerCase().search(val.toLowerCase()) > -1;
      })
      setFilterCharacters(filteredArr);
    }
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then((response) => {
        setCharacters(response.data.results);
        setFilterCharacters(response.data.results);
      })
      .catch((error) => {
        console.log('Data returned an error', error)
      })
  },[]);

  return (
    <section className="character-list">
      <SearchForm search = {search} />
      {filterCharacters.map(character => (
        <CharacterCard
          key = {character.id}
          char = {character} />
      ))}
    </section>
  );
}

export default CharacterList;

