import React from "react";
import styled from "styled-components";

const LabelStyle = styled.label`
  font-size: 30px;
  color: #000;
`;

const Input = styled.input`
  width: 220px;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;  
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 15px;
`;

 function SearchForm(props) {
  
    return (
      <section className="search-form">
        <form>
          <LabelStyle htmlFor="name">Search:</LabelStyle>
          <Input 
          type='search' 
          placeholder='search rick and morty'
          />
        </form>
        </section>
    );
  }  
  
export default SearchForm;