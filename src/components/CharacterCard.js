import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const CharContainer = styled.div `
  display: flex;
  justify-content: center;
  background-color: #A9D3E9;
  padding: 40px;
`;

const StyledH2 = styled.h2 `
  text-align: center;
  text-decoration: none;
  color: #000;
  font-size: 30px;
`;

const ImgStyle = styled.img`
  width: 150px;
  height: 150px;
  margin: 30px;
`;

const Pstyle = styled.p`
  font-size: 20px;
  color: #000;
`;


 function CharacterCard(props) {
  return (
    <Link to={`/character-list/${props.id}`}>
      <CharContainer>
          <ImgStyle src={props.character.image} alt="character pic"/>
          <div className="character-info">
              <StyledH2>{props.character.name}</StyledH2>
              <Pstyle>{props.character.species}</Pstyle>
              <Pstyle>{props.character.gender}</Pstyle>
          </div>
      </CharContainer>
    </Link>
  );
}

export default CharacterCard;
