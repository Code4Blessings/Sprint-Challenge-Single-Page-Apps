import React from "react";
import styled from "styled-components";

const Cartoon = styled.img`
  height: 300px;
  width: 300px;
  margin-left: 300px;
  margin-top: 40px;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Cartoon
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
