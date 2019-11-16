import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import styled from "styled-components";
import SearchForm from "./components/SearchForm.js";

const Nav = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 16 px;
   border-bottom: 1 px solid# efefef;
   margin-bottom: 32 px;
`;

function App() {
   const [searchRM, setSearchRM] = useState("");
   const [searchResults, setSearchResults] = useState([]);

   const handleChange = event => {
     setSearchRM(event.target.value)
   }
    useEffect(() => {
      
        axios
          .get('https://rickandmortyapi.com/api/character/')
          .then((response) => {
            const cartoonResults = response.data.results.filter(character => character.toLowercase().includes(searchRM.toLowerCase()))
            setSearchResults(cartoonResults)
          })
          .catch((error) => {
            console.log('Data returned an error', error)
          })
      },[searchRM]);

  return (
    <div className="App">
      <Nav>
       <Header />
       <SearchForm onChange={handleChange} value={searchRM} />
       <div className="rick-morty-list">
        <ul>
         {searchResults.map(character => (
           <li>{character}</li>
         ))}
        </ul>
       </div>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/character-list">FanPage</Link>
        </div>
      </Nav>
      <div>
        <Header />
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/character-list" component={CharacterList} />
    </div>
    </div>
  );
}

export default App;
