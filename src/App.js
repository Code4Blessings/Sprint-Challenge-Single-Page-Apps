import React from "react";
import { Route, Link } from "react-router-dom";
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
`

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  display: flex;
  justify-content: space-between;
`;


function App() {
 
  return (
    <div className="App">
      <Nav>
       <Header />
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/character-list">Fan Page</Link>
        </NavLinks>
      </Nav>
      <div>
        <Header />
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/character-list" component={SearchForm} />
        <Route path="/character-list" component={CharacterList} />
    </div>
    </div>
  );
}

export default App;
