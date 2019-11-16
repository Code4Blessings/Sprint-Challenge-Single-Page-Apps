import React from "react";
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
   
  return (
    <div className="App">
      <Nav>
       <Header />
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
