import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav `
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 16 px;
   border-bottom: 1 px solid# efefef;
   margin-bottom: 32 px;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/character-list">FanPage</Link>
        </div>
      </Nav>
    </header>

  );
}
