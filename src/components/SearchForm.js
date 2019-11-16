import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import styled from "styled-components";

const LabelStyle = styled.label`
  font-size: 30px;
  color: #000;
`;

const Input = styled.input`
  width: 200px;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;  
  border: 1px solid #000;
  border-radius: 4px;
`;

 function SearchForm() {
  
    return (
      <section className="search-form">
        <form>
          <LabelStyle htmlFor="name">Search:</LabelStyle>
          <Input type='search' placeholder='search rick and morty' />
        </form>
        </section>
    );
  }  
  
export default SearchForm;