import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';

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
        <CharacterDetails key={character.id} character={character} />
      ))}
    </section>
  );
}

const CharContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #A9D3E9;
  padding: 40px;
`;

const StyledH2 = styled.h2`
  text-align: center;
  text-decoration: none;
  color: #000;
`;

function CharacterDetails(props) {
  return (
    <Link to={`/character-list/${props.id}`}>
      <CharContainer>
        <div className="character">
          <img src={props.character.image} alt="character pic"/>
          <StyledH2>{props.character.name}</StyledH2>
        </div>
      </CharContainer>
    </Link>
  );
}

export default CharacterList;

